import React, { useState, useEffect } from "react";
// import MenubarPage from "../menubarPage";
import Nav from "./pages/Nav";
import {
  Button,
  Flex,
  Heading,
  Input,
  ScrollArea,
  Toast,
  Paragraph,
} from "./src/index";
// import Section from "./pages/Section";
import Logo2 from "./Logo";
import NpmDownloads from "./pages/NpmDownloads";
import "./pages/DesignSystem.scss";
import Logo from "./Logo";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Chart from "./assets/Chart.png";
import InBulk from "./assets/inbulk.png";
import FIgmaIcons from "./assets/figmaicons.png";

import {
  FileTextIcon,
  ButtonIcon,
  ColorWheelIcon,
  CopyIcon,
  AvatarIcon,
  BadgeIcon,
  CalendarIcon,
  InputIcon,
  CheckboxIcon,
  CodeIcon,
  CardStackIcon,
  DropdownMenuIcon,
  BoxIcon,
  HeadingIcon,
  ImageIcon,
  ReloadIcon,
  TextIcon,
  SwitchIcon,
  TableIcon,
  DashboardIcon,
  ChatBubbleIcon,
  ExclamationTriangleIcon,
  PersonIcon,
  SewingPinIcon,
  VideoIcon,
  DividerHorizontalIcon,
  HobbyKnifeIcon,
  CommitIcon,
  SliderIcon,
} from "@radix-ui/react-icons";
import {
  // BrowserRouter as Router,
  // Routes,
  // Route,
  useNavigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import Hero from "./pages/Hero";

const Home = ({ setDark, dark, resetAnimation }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const [latestVersion, setLatestVersion] = useState(null);

  useEffect(() => {
    const fetchLatestVersion = async () => {
      try {
        const response = await axios.get(
          "https://registry.npmjs.org/blocksin-system"
        );
        const version = response.data["dist-tags"].latest;
        setLatestVersion(version);
      } catch (error) {
        console.error("Failed to fetch latest version:", error);
      }
    };

    fetchLatestVersion();
  }, []);

  const routes = [
    { path: "introduction", title: "Introduction", icon: <FileTextIcon /> },
    { path: "colors", title: "Colors", icon: <ColorWheelIcon /> },
    { path: "avatar", title: "Avatar", icon: <AvatarIcon /> },
    { path: "avatar-group", title: "AvatarGroup", icon: <AvatarIcon /> },
    { path: "badge", title: "Badge", icon: <BadgeIcon /> },
    { path: "badge-level", title: "BadgeLevel", icon: <BadgeIcon /> },
    { path: "button", title: "Button", icon: <ButtonIcon /> },
    { path: "calendar", title: "Calendar", icon: <CalendarIcon /> },
    { path: "card", title: "Card", icon: <BoxIcon /> },

    { path: "combobox", title: "ComboBox", icon: <InputIcon /> },
    { path: "checkbox", title: "Checkbox", icon: <CheckboxIcon /> },
    { path: "codehighlight", title: "CodeHighlight", icon: <CodeIcon /> },
    { path: "toast", title: "Toast", icon: <CardStackIcon /> },
    { path: "dropdownmenu", title: "DropdownMenu", icon: <DropdownMenuIcon /> },
    { path: "flex", title: "Flex", icon: <BoxIcon /> },
    { path: "heading", title: "Heading", icon: <HeadingIcon /> },
    { path: "iframe", title: "Iframe", icon: <ImageIcon /> },
    { path: "input", title: "Input", icon: <InputIcon /> },
    { path: "icon-button", title: "Icon Button", icon: <ButtonIcon /> },
    { path: "loader", title: "Loader", icon: <ReloadIcon /> },
    { path: "paragraph", title: "Paragraph", icon: <TextIcon /> },
    { path: "pill", title: "Pill", icon: <BadgeIcon /> },

    { path: "spinner", title: "Spinner", icon: <ReloadIcon /> },
    { path: "switch", title: "Switch", icon: <SwitchIcon /> },
    { path: "table", title: "Table", icon: <TableIcon /> },
    { path: "tabs", title: "Tabs", icon: <DashboardIcon /> },
    { path: "tags", title: "Tags", icon: <BadgeIcon /> },
    { path: "textarea", title: "TextArea", icon: <InputIcon /> },
    { path: "toggle", title: "Toggle", icon: <BadgeIcon /> },
    { path: "toggle-group", title: "ToggleGroup", icon: <BadgeIcon /> },
    { path: "tooltip", title: "Tooltip", icon: <ChatBubbleIcon /> },
    { path: "toolbar", title: "Toolbar", icon: <HobbyKnifeIcon /> },

    {
      path: "top-banner",
      title: "TopBanner",
      icon: <ExclamationTriangleIcon />,
    },
    {
      path: "user-on-hold-item",
      title: "UserOnHoldItem",
      icon: <PersonIcon />,
    },
    { path: "user-list-item", title: "UserListItem", icon: <PersonIcon /> },
    { path: "user-item", title: "UserItem", icon: <PersonIcon /> },
    { path: "youtube", title: "Youtube", icon: <VideoIcon /> },
    { path: "scrollarea", title: "ScrollArea", icon: <SewingPinIcon /> },
    { path: "select", title: "Select", icon: <CheckboxIcon /> },
    { path: "separator", title: "Separator", icon: <DividerHorizontalIcon /> },
    { path: "slider", title: "Slider", icon: <SliderIcon /> },
    { path: "stepper", title: "Stepper", icon: <CommitIcon /> },
  ];

  const [searchQuery, setSearchQuery] = useState(""); // Declare search query state
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const [activePage, setActivePage] = useState();

  //
  useEffect(() => {
    const checkPosition = () => {
      const detector = document.querySelector(".detector");
      const menu = document.querySelector(".sidebarMenu");
      const previewBody = document.querySelector(".DesignSystemBodyContainer");
      const previewBodyContent = document.querySelector(".DesignSystemBody");

      if (!detector || !menu || !previewBody) {
        console.log("Elements not found");
        return;
      }
      const rect = detector.getBoundingClientRect();
      const roundedTop = Math.round(rect.top); // Round the top position to the nearest whole pixel

      const previewBodyRect = previewBody.getBoundingClientRect();
      // console.log("roundedTop:", roundedTop);
      // console.log("previewBodyRect:", previewBodyRect);

      if (roundedTop <= 88) {
        previewBodyContent.classList.add("Touched");

        const newLeft = previewBodyRect.left + 16; // Calculate new left position
        // console.log("newLeft:", newLeft);
        menu.style.left = `${newLeft}px`;
        menu.style.position = `fixed`; // Set the left position
        menu.classList.add("Touched");
      } else {
        menu.classList.remove("Touched");
        previewBodyContent.classList.remove("Touched");
        menu.style.position = ``; // Set the left position

        menu.style.left = ""; // Reset the left position
      }
    };

    // Initial check
    checkPosition();

    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", checkPosition); // Detect viewport change

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("scroll", checkPosition);
      window.removeEventListener("resize", checkPosition);
    };
  }, []);

  //

  const renderSidebarMenu = () => {
    // Filter routes based on the searchQuery
    const filteredRoutes = routes.filter((route) =>
      route.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filteredRoutes.map((route) => (
      <Button
        size="medium"
        fluid
        variant="ghost"
        key={route.path}
        onClick={() => {
          navigate(route.path); // Use relative path for navigation
          setActivePage(route.title);
        }}
        aria-pressed={activePage === route.title ? "true" : undefined}
      >
        {route.icon}
        {/* <FileTextIcon /> */}
        <span>{route.title}</span>
      </Button>
    ));
  };

  //
  //
  //
  const [showToastCopy, setShowToastCopy] = useState(false);
  const [toastMessage, setToastMessage] = useState(""); // New state for toast message
  const documentationUrl = "https://www.npmjs.com/package/blocksin-system";

  const handleOpenDocumentation = () => {
    window.open(documentationUrl, "_blank");
  };
  const npmCommand = "npm i blocksin-system";

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(npmCommand)
      .then(() => {
        setToastMessage("Copied to clipboard!"); // Set success message
        setShowToastCopy(true); // Show toast
      })
      .catch((err) => {
        setToastMessage("Failed to copy!"); // Set error message
        setShowToastCopy(true); // Show toast
        console.error("Failed to copy text: ", err);
      });
  };
  //
  //
  //
  const filteredRoutes = routes.filter((route) =>
    route.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // Event handler for dropdown item click
  const handleDropdownItemClick = (route) => {
    navigate(route.path);
    setActivePage(route.title);
    setShowDropdown(false); // Hide dropdown when item is clicked
  };
  return (
    <Flex direction={"column"} customClass={"DesignSystem"} align={"center"}>
      <Nav setDark={setDark} dark={dark} resetAnimation={resetAnimation} />

      <Toast
        showToast={showToastCopy}
        setShowToast={setShowToastCopy}
        headline="Notification"
        text={toastMessage} // Use dynamic toast message
        time={3000}
        simple
      />

      {location.pathname === "/" && (
        <>
          <Flex direction="column" customClass="PageHeader" gap={200}>
            <Flex direction="column" gap={500}>
              <Flex
                direction="column"
                fluid
                align="center"
                style={{
                  padding: "0 var(--size-200)",
                  boxSizing: "border-box",
                  marginTop: "var(--size-200)",
                }}
              >
                <Logo2 />
                <Heading
                  level={2}
                  weight="bold"
                  style={{
                    textAlign: "center",
                    lineHeight: "1",
                    marginBottom: "16px",
                  }}
                >
                  BlocksIn System v.{latestVersion}
                </Heading>
                <Heading level={4}>React Component Library</Heading>
                <Flex
                  direction="row"
                  gap={100}
                  align="center"
                  style={{
                    marginTop: "var(--size-400)",
                    width: "100%",
                    maxWidth: "440px",
                  }}
                  customClass="CTAs"
                >
                  <Button fluid variant="solid" onClick={handleCopyToClipboard}>
                    {npmCommand} <CopyIcon />
                  </Button>
                  <Button
                    fluid
                    variant="outline"
                    onClick={handleOpenDocumentation}
                  >
                    npmjs.com
                  </Button>
                </Flex>
              </Flex>
              <Flex fluid>
                <NpmDownloads />
              </Flex>
            </Flex>
          </Flex>
          <Flex customClass="Slider" direction="column" gap={200}>
            <Heading level={3} weight="bold" style={{ lineHeight: "1.2" }}>
              Apps built with BlocksIn System
            </Heading>
            <Flex fluid>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={16}
                // centeredSlides={true}
                // slidesPerView={2}
                loop={true}
                autoplay={{ delay: 5500, disableOnInteraction: false }}
                breakpoints={{
                  835: {
                    slidesPerView: 2,
                  },
                  9999: {
                    slidesPerView: 1,
                  },
                }}
              >
                <SwiperSlide>
                  <Flex>
                    <Flex
                      direction={"column"}
                      style={{ width: "50%", height: "100%", flex: "1" }}
                    >
                      <Heading level={3} weight="bold">
                        BlocksIn App
                      </Heading>
                      <Paragraph size="large">
                        We streamline your workflow by integrating essential
                        resources like Figma, GitHub, and Slack into one
                        intuitive platform.
                      </Paragraph>
                      <Button
                        onClick={() => {
                          window.open("https://blocksin.com/");
                        }}
                      >
                        Discover
                      </Button>
                    </Flex>
                    <Flex style={{ width: "50%", flex: "1.2" }}>
                      <img
                        src={Chart}
                        alt="chart"
                        style={{ boxShadow: "var(--shadow-level-2)" }}
                      />
                    </Flex>
                  </Flex>
                </SwiperSlide>

                <SwiperSlide>
                  <Flex>
                    <Flex
                      direction={"column"}
                      style={{ width: "50%", height: "100%", flex: "1" }}
                    >
                      <Heading level={3} weight="bold">
                        InBulk App
                      </Heading>
                      <Paragraph size="large">
                        Effortlessly create custom ad banners with InBulk Ads.
                        Our app integrates with Google Sheets, enabling fast,
                        easy customization for your campaigns.
                      </Paragraph>
                      <Button
                        onClick={() => {
                          window.open("https://inbulk.blocksin.com/");
                        }}
                      >
                        Discover
                      </Button>
                    </Flex>
                    <Flex style={{ width: "50%", flex: "1.2" }}>
                      <img
                        src={InBulk}
                        alt="inbulk"
                        style={{ boxShadow: "var(--shadow-level-2)" }}
                      />
                    </Flex>
                  </Flex>
                </SwiperSlide>

                <SwiperSlide>
                  <Flex>
                    <Flex
                      direction={"column"}
                      style={{ width: "50%", height: "100%", flex: "1" }}
                    >
                      <Heading level={3} weight="bold">
                        FigmaIcons App
                      </Heading>
                      <Paragraph size="large">
                        Export icons directly from Figma frames into your React
                        project with our tool, streamlining your design-to-code
                        process for faster, consistent development.
                      </Paragraph>
                      <Button
                        onClick={() => {
                          window.open(
                            "https://www.producthunt.com/products/figma-icons"
                          );
                        }}
                      >
                        Discover
                      </Button>
                    </Flex>
                    <Flex style={{ width: "50%", flex: "1.2" }}>
                      <img
                        src={FIgmaIcons}
                        alt="inbulk"
                        style={{ boxShadow: "var(--shadow-level-2)" }}
                      />
                    </Flex>
                  </Flex>
                </SwiperSlide>
              </Swiper>
            </Flex>
          </Flex>
        </>
      )}
      <Flex gap={400} customClass={"DesignSystemBodyContainer"}>
        <div className="flareGreen" style={{ position: "absolute" }}></div>

        <Flex customClass={`sidebarMenu`} direction={"column"}>
          <label className="Logo">
            <a href="/">
              <Logo />
            </a>
          </label>
          <Flex
            direction="column"
            style={{ position: "relative" }}
            customClass="search"
            fluid
          >
            <Input
              label="Search"
              placeholder="Search for page"
              errormsg={false}
              type="search"
              fluid
              value={searchQuery}
              onChange={handleSearchChange} // Add onChange handler
              onFocus={() => setShowDropdown(true)} // Show dropdown on focus
            />
            {showDropdown && (
              <div
                style={{
                  position: "absolute",
                  boxSizing: "border-box",
                  padding: "var(--size-50)",
                  top: "52px",
                  width: "100%",
                  zIndex: "99",
                  backgroundColor: "var(--background-neutral-container)",
                  borderRadius: "8px",
                  boxShadow: "var(--shadow-level-2)",
                }}
              >
                <ScrollArea style={{ maxHeight: "40vh" }}>
                  {filteredRoutes.map((route) => (
                    <Button
                      key={route.path}
                      size="medium"
                      fluid
                      variant="ghost"
                      onClick={() => handleDropdownItemClick(route)}
                      aria-pressed={
                        activePage === route.title ? "true" : undefined
                      }
                    >
                      {route.icon}
                      <span>{route.title}</span>
                    </Button>
                  ))}
                </ScrollArea>
              </div>
            )}
          </Flex>
          <Heading level={4} weight="bold">
            Menu
          </Heading>
          <Flex>
            <ScrollArea
              style={{
                maxHeight: "70vh",
              }}
            >
              {renderSidebarMenu()}
            </ScrollArea>
          </Flex>
        </Flex>
        <Flex direction={"column"} customClass={"DesignSystemBody"}>
          <Flex customClass={"detector"}></Flex>
          <Outlet />
          {location.pathname === "/" && <Hero />}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
