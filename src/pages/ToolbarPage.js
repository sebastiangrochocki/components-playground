import React, { useState } from "react";
import Section from "./Section";

import {
  Flex,
  Paragraph,
  Heading,
  Separator,
  CodeHighlight,
  Button,
  IconButton,
  Avatar,
  Table,
  Toggle,
  Tooltip,
  Card,
  Toolbar,
} from "../src/index";
import ReactLive from "./ReactLive";
import {
  Cross2Icon,
  SizeIcon,
  CopyIcon,
  BellIcon,
  ViewGridIcon,
  GridIcon,
  GroupIcon,
  GearIcon,
  Pencil2Icon,
  Pencil1Icon,
  EraserIcon,
  TrashIcon,
  CursorArrowIcon,
  SquareIcon,
} from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";
import CodeFormatter from "./CodeFormatter";

const ToolbarPage = () => {
  const codeString1 = `  
import Toolbar from "./Toolbar";
import { GearIcon } from "@radix-ui/react-icons";

<Toolbar orientation="horizontal">
  <IconButton variant="ghost" size="medium">
    <GearIcon />
  </IconButton>
  <IconButton variant="ghost" size="medium">
    <Pencil2Icon />
  </IconButton>
</Toolbar>
  `;
  const [showGridLines, setShowGridLines] = useState(false);

  const toggleGridLines = () => {
    setShowGridLines(!showGridLines);
  };

  const scope = {
    Card,
    showGridLines,
    setShowGridLines,
    toggleGridLines,
    ViewGridIcon,
    Separator,
    Avatar,
    Beaver,
    Button,
    Cross2Icon,
    SizeIcon,
    CopyIcon,
    IconButton,
    Flex,
    Heading,
    BellIcon,
    Paragraph,
    Toggle,
    GridIcon,
    GroupIcon,
    Tooltip,
    Toolbar,
    GearIcon,
    Pencil2Icon,
    Pencil1Icon,
    EraserIcon,
    TrashIcon,
  };

  const columns = [
    {
      Header: "Property",
      accessor: "Property",
      Cell: (value) => <CodeHighlight text={value} />,
    },
    { Header: "Type", accessor: "Type" },
    { Header: "Optional", accessor: "Optional" },
    { Header: "Description", accessor: "Description" },
  ];

  const data = [
    {
      Property: "asChild",
      Type: "boolean",
      Optional: "false",
      Description:
        "Specifies if the toolbar should be rendered as a child of another component.",
    },
    {
      Property: "orientation",
      Type: "enum",
      Optional: "'horizontal'",
      Description:
        "Sets the orientation of the toolbar. Can be 'horizontal' or 'vertical'. Default is 'horizontal'.",
    },
    {
      Property: "dir",
      Type: "enum",
      Optional: "No default value",
      Description:
        "Defines the direction of navigation within the toolbar. Can be 'ltr' (left-to-right) or 'rtl' (right-to-left).",
    },
    {
      Property: "loop",
      Type: "boolean",
      Optional: "true",
      Description:
        "Determines whether focus navigation within the toolbar should loop from last to first and vice versa.",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Toolbar Component
          </Heading>
          <Paragraph size="large">
            A toolbar is a UI component that organizes actions or tools in a
            single row or column, often placed at the top of an application
            window. It provides quick access to frequently used functions,
            improving efficiency and reducing the number of steps required for
            tasks. Toolbars are especially useful in applications where users
            need to frequently switch contexts or tools, such as in graphic
            design software or development environments.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Toolbar orientation="horizontal">
              <IconButton variant="ghost" size="medium">
                <GearIcon />
              </IconButton>
              <IconButton variant="ghost" size="medium">
                <Pencil2Icon />
              </IconButton>
              <IconButton variant="ghost" size="medium">
                <CursorArrowIcon />
              </IconButton>
              <IconButton variant="ghost" size="medium">
                <SquareIcon />
              </IconButton>
            </Toolbar>
          </Flex>
          <Heading level={3} weight="bold">
            Usage
          </Heading>
          <CodeFormatter language="" codeString={codeString1} />
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Properties
          </Heading>

          <Table
            fluid
            columns={columns}
            data={data}
            pageSize={10}
            sorting={false}
            fullBorder
            large
          />
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Playground
          </Heading>
          <Paragraph size="large">
            Experience real-time component interaction with React! This powerful
            feature empowers non-technical users—designers, project managers,
            brand or content specialists—to seamlessly engage with components.
            They can modify component content on the fly, ensuring comprehensive
            validation against accessibility, localization, and content design
            requirements. This hands-on approach ensures the design aligns
            perfectly with all necessary criteria, fostering a more
            collaborative and efficient development process.
          </Paragraph>

          <ReactLive scope={scope}>
            {`
<Flex direction="row" gap={100}>
  <Toolbar orientation="horizontal">
    <Flex gap={100} align="center">
      <IconButton variant="ghost" size="small">
        <GearIcon />
      </IconButton>
      <IconButton variant="ghost" size="small">
        <Pencil2Icon />
      </IconButton>
      <Button size="small">
        Get Started
      </Button>
    </Flex>
  </Toolbar>
</Flex>
      `}
          </ReactLive>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Design Patterns
          </Heading>
          <Paragraph size="large">
            In a whiteboard application, toolbars enhance usability by providing
            easy access to tools and actions. Horizontal toolbars, typically
            placed at the top, might include file management options like new,
            open, save, and print, as well as undo/redo actions. This layout
            aligns frequently used actions where users expect them.
            <br />
            <br />
            Vertical toolbars, often docked to the side, are useful for housing
            drawing tools such as pens, markers, erasers, and color pickers.
            This arrangement efficiently utilizes space and keeps essential
            tools readily accessible, facilitating a seamless creative process.
            <br />
            <br />
            For example, in a brainstorming session using a whiteboard app, a
            top horizontal toolbar could offer quick access to save and share
            functions, while a side vertical toolbar allows users to switch
            between different drawing tools without leaving the canvas. This
            setup optimizes the interface for both usability and efficiency,
            grouping tools logically according to their use and accessibility.
          </Paragraph>
          <ReactLive scope={scope}>
            {`
<Flex direction="row" fluid gap={100} align="center" justify="center" style={{
  position: "relative",
  height: "100%",
  backgroundColor: "var(--blue-1)",
  borderRadius: "8px",
}}>
  <Toolbar orientation="horizontal" style={{
    position: "absolute",
    top: "8px",
    right: "8px"
  }}>
    <Flex gap={100} align="center">
      <IconButton variant="ghost" size="small">
        <GearIcon />
      </IconButton>
      <IconButton variant="ghost" size="small">
        <Pencil2Icon />
      </IconButton>
      <Button size="small" variant="outline">
        Present
      </Button>
      <Button size="small">
        Share
      </Button>
    </Flex>
  </Toolbar>

  <Toolbar orientation="vertical" style={{
    position: "absolute",
    top: "50%",
    left: "8px",
    transform: "translateY(-50%)",
  }}>
    <Flex direction="column" gap={100} align="center">
      <IconButton variant="ghost" size="small">
        <EraserIcon />
      </IconButton>
      <IconButton variant="ghost" size="small">
        <Pencil1Icon />
      </IconButton>
      <IconButton variant="ghost" size="small">
        <TrashIcon />
      </IconButton>
    </Flex>
  </Toolbar>

  <svg width="144" height="90"viewBox="0 0 144 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32.6001 81.9805C32.6001 75.6902 32.6001 69.4 32.6001 63.1097C32.6001 61.5065 32.7156 61.9809 31.514 61.9422C20.9805 61.6024 8.25541 58.0334 3.87313 47.4429C2.03439 42.9993 0.809357 36.5413 2.35261 31.8032C5.71808 21.4706 19.1155 14.46 29.2876 13.5027C30.239 13.4131 38.0665 14.2349 37.7319 13.2312C36.4543 9.39834 40.6177 5.85895 43.2981 3.91795C45.3907 2.40261 49.2021 -0.148183 50.5749 3.40206C51.021 4.55572 51.2058 8.81485 53.0729 7.36628C57.2929 4.09215 59.6583 0.755792 64.2867 5.38417C65.9135 7.01092 67.7894 8.89118 67.7894 11.3305C67.7894 12.0525 67.6482 13.0714 68.0609 13.7199C68.6205 14.5993 70.6374 13.7044 71.3191 13.557C74.7797 12.8088 78.5711 13.0585 82.0714 13.0682C89.1231 13.0878 96.27 13.1294 103.25 14.2629C108.085 15.048 112.809 16.4025 117.288 18.3901C126.464 22.4623 130.061 30.1911 133.308 39.3516C134.214 41.9077 139.445 53.8733 135.86 56.9462C134.242 58.3326 131.816 59.0684 129.914 59.9601C128.441 60.6504 123.736 61.5917 123.506 63.4627C122.703 69.9741 120.067 76.2622 117.071 82.0619C115.867 84.3912 115.156 84.1744 113.839 81.9805C112.883 80.3861 112.754 78.6954 112.156 76.9845C110.853 73.2564 107.575 70.3976 104.608 67.9699C100.421 64.5446 102.001 69.9874 102.001 73.156C102.001 75.2692 103.631 86.8363 100.861 88.0083C97.1509 89.5778 93.638 86.1311 92.8237 82.8493C91.8781 79.0382 92.1466 73.4485 88.4793 70.9567C85.3679 68.8425 81.0838 69.2733 77.537 69.2733C72.51 69.2733 67.5767 68.9991 62.6304 68.0243C62.6208 68.0224 56.6275 66.1442 56.6841 66.9653C57.0596 72.4101 58.6311 76.9975 56.657 82.4149C55.9229 84.4292 52.3135 89.0106 51.3894 84.4785C50.6742 80.9701 51.2772 77.6822 48.9729 74.6765C47.9738 73.3734 43.4992 70.3567 42.565 73.3461C41.3142 77.3486 44.1984 82.1148 41.8319 86.1619C39.1609 90.7297 33.2722 86.7458 31.6227 83.4467" stroke="#F232C8" stroke-width="3" stroke-linecap="round"/>
    <path d="M41.8862 15.512C40.193 13.4425 40.431 7.83884 44.3842 9.32129C49.1856 11.1218 44.9317 18.8585 42.3749 15.0232" stroke="#F232C8" stroke-width="3" stroke-linecap="round"/>
    <path d="M56.5484 16.0006C54.7733 15.7918 53.2093 14.607 53.8331 12.5795C54.4375 10.6154 56.8858 11.0468 58.4762 11.1404C60.2764 11.2463 61.2884 11.9792 61.6258 13.8013C62.1674 16.7258 58.9893 16.3592 57.0371 16.4894" stroke="#F232C8" stroke-width="3" stroke-linecap="round"/>
    <path d="M10.1182 43.8589C18.6637 43.8589 26.2655 47.1748 34.528 48.7192C40.1794 49.7755 48.1243 51.527 53.6974 49.3437C56.1551 48.3809 61.1671 43.1113 57.5259 40.9265" stroke="#F232C8" stroke-width="3" stroke-linecap="round"/>
    <path d="M51.6611 40.4377C53.7914 40.2247 55.9027 39.7981 58.0147 39.4602" stroke="#F232C8" stroke-width="3" stroke-linecap="round"/>
    <path d="M135.235 41.904C143.418 41.5767 143.444 34.6867 140.123 28.708" stroke="#F232C8" stroke-width="3" stroke-linecap="round"/>
    <path d="M139.145 28.2192C137.355 28.2192 132.161 28.8816 131.353 26.7258C130.274 23.8496 132.44 21.0609 135.507 20.8881C138.751 20.7053 140.756 27.1935 137.679 28.2192" stroke="#F232C8" stroke-width="3" stroke-linecap="round"/>
  </svg>
</Flex>
            `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default ToolbarPage;
