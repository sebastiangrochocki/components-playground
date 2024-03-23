import React, { useState, useEffect } from "react";
// import MenubarPage from "../menubarPage";
import Nav from "./pages/Nav";
import { Button, Flex, Heading, Input, ScrollArea, Toast } from "./src/index";
// import Section from "./pages/Section";
import Logo2 from "./Logo";
import NpmDownloads from "./pages/NpmDownloads";
import "./pages/DesignSystem.scss";
import Logo from "./Logo";
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

  const routes = [
    { path: "introduction", title: "Introduction", icon: <FileTextIcon /> },
    { path: "colors", title: "Colors", icon: <ColorWheelIcon /> },
    { path: "avatar", title: "Avatar", icon: <AvatarIcon /> },
    { path: "avatar-group", title: "AvatarGroup", icon: <AvatarIcon /> },
    { path: "badge", title: "Badge", icon: <BadgeIcon /> },
    { path: "badge-level", title: "BadgeLevel", icon: <BadgeIcon /> },
    { path: "button", title: "Button", icon: <ButtonIcon /> },
    { path: "calendar", title: "Calendar", icon: <CalendarIcon /> },
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
    { path: "spinner", title: "Spinner", icon: <ReloadIcon /> },
    { path: "switch", title: "Switch", icon: <SwitchIcon /> },
    { path: "table", title: "Table", icon: <TableIcon /> },
    { path: "tabs", title: "Tabs", icon: <DashboardIcon /> },
    { path: "tags", title: "Tags", icon: <BadgeIcon /> },
    { path: "textarea", title: "TextArea", icon: <InputIcon /> },
    { path: "toggle", title: "Toggle", icon: <BadgeIcon /> },
    { path: "toggle-group", title: "ToggleGroup", icon: <BadgeIcon /> },
    { path: "tooltip", title: "Tooltip", icon: <ChatBubbleIcon /> },
    { path: "top-banner", title: "TopBanner", icon: <ChatBubbleIcon /> },
    {
      path: "user-on-hold-item",
      title: "UserOnHoldItem",
      icon: <ChatBubbleIcon />,
    },
    { path: "user-list-item", title: "UserListItem", icon: <ChatBubbleIcon /> },
    { path: "user-item", title: "UserItem", icon: <ChatBubbleIcon /> },
    { path: "youtube", title: "Youtube", icon: <ChatBubbleIcon /> },
    { path: "scrollarea", title: "ScrollArea", icon: <ChatBubbleIcon /> },
    { path: "select", title: "Select", icon: <ChatBubbleIcon /> },
    { path: "separator", title: "Separator", icon: <ChatBubbleIcon /> },
  ];

  const [searchQuery, setSearchQuery] = useState(""); // Declare search query state
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query based on input
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
      console.log("roundedTop:", roundedTop);
      console.log("previewBodyRect:", previewBodyRect);

      if (roundedTop <= 88) {
        previewBodyContent.classList.add("Touched");

        const newLeft = previewBodyRect.left + 16; // Calculate new left position
        console.log("newLeft:", newLeft);
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
                BlocksIn System v.1.4.1
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
                <Button fluid variant="outline" onClick={handleCopyToClipboard}>
                  {npmCommand} <CopyIcon />
                </Button>
                <Button fluid variant="ghost" onClick={handleOpenDocumentation}>
                  Documentation
                </Button>
              </Flex>
            </Flex>
            <Flex fluid>
              <NpmDownloads />
            </Flex>
          </Flex>
        </Flex>
      )}
      <Flex gap={400} customClass={"DesignSystemBodyContainer"}>
        <div className="flareGreen" style={{ position: "absolute" }}></div>

        <Flex customClass={`sidebarMenu`} direction={"column"}>
          <label className="Logo">
            <a href="/">
              <Logo />
            </a>
          </label>

          <Input
            label="Search"
            placeholder="Search for page"
            errormsg={false}
            type="search"
            value={searchQuery}
            onChange={handleSearchChange} // Add onChange handler
          />
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
