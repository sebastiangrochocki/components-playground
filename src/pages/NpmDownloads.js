import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Heading, Flex } from "../src/index";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { DownloadIcon } from "@radix-ui/react-icons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const NpmDownloadsChart = ({ packageName = "blocksin-system" }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{ data: [] }],
  });
  const [currentWeekDownloads, setCurrentWeekDownloads] = useState(0); // State for current week downloads

  const labelColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--foreground-neutral-subtle")
    .trim();

  //   const gridColor = getComputedStyle(document.documentElement)
  //     .getPropertyValue("--border-neutral-subtle")
  //     .trim();

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    drawBorder: false,
    scales: {
      x: {
        ticks: {
          color: labelColor,
          display: false,
        },
        grid: {
          display: false,
          color: "transparent",
          borderColor: "transparent",
        },
        border: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
          color: labelColor,
          align: "start",
          crossAlign: "far",
          padding: -10,
        },
        grid: {
          color: "transparent",
          display: false,
        },
        border: {
          display: false,
        },
        afterSetDimensions: (scale) => {
          scale.left -= 30;
        },
      },
    },
  };

  useEffect(() => {
    const fetchDownloadCounts = async () => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentWeek = Math.ceil(
        (currentDate - new Date(currentYear, 0, 1)) / 604800000
      );
      const labels = [];
      const data = [];

      for (let year = currentYear; year >= 2024; year--) {
        const weeksInYear =
          year === currentYear
            ? Math.ceil((currentDate - new Date(year, 0, 1)) / 604800000)
            : 52;

        for (let week = 1; week <= weeksInYear; week++) {
          // Skip the current week if it has no data yet
          if (year === currentYear && week === currentWeek) {
            continue;
          }

          const startDate = new Date(year, 0, (week - 1) * 7 + 1);
          const endDate = new Date(startDate);
          endDate.setDate(endDate.getDate() + 6);

          const startDateFormat = `${startDate.getFullYear()}-${(
            startDate.getMonth() + 1
          )
            .toString()
            .padStart(2, "0")}-${startDate
            .getDate()
            .toString()
            .padStart(2, "0")}`;
          const endDateFormat = `${endDate.getFullYear()}-${(
            endDate.getMonth() + 1
          )
            .toString()
            .padStart(2, "0")}-${endDate
            .getDate()
            .toString()
            .padStart(2, "0")}`;

          const response = await fetch(
            `https://api.npmjs.org/downloads/point/${startDateFormat}:${endDateFormat}/${packageName}`
          );
          const downloadData = await response.json();

          labels.push(`Week ${week}, ${year}`);
          data.push(downloadData.downloads);

          // Update current week downloads
          if (year === currentYear && week === currentWeek - 1) {
            setCurrentWeekDownloads(downloadData.downloads);
          }
        }
      }

      const brandColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--brand-1")
        .trim();

      // Create the gradient after the chart data is fetched
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 0, 200); // Adjust the gradient dimensions to match your chart's height
      gradient.addColorStop(0, `${brandColor}E6`); // 0.9 opacity
      gradient.addColorStop(1, `${brandColor}33`); // 0.2 opacity

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "",
            data: data,
            fill: true,
            backgroundColor: gradient,
            borderColor: brandColor,
            borderWidth: 4,
            tension: 0,
            stepped: false,
          },
        ],
      });
    };

    fetchDownloadCounts();
  }, [packageName]);

  return (
    <Flex direction="column" gap={200}>
      <Flex gap={100} align="center" customClass="HeadingIcon">
        <DownloadIcon />
        <Heading level={4} weight="bold">
          Weekly downloads: {currentWeekDownloads}
        </Heading>
      </Flex>

      <div
        style={{
          maxHeight: "200px",
          width: "120%",
          marginLeft: "-10%",
          marginBottom: "-40px",
        }}
      >
        <Line data={chartData} options={chartOptions} />
      </div>
    </Flex>
  );
};

export default NpmDownloadsChart;
