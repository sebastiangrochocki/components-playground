import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import MenubarPage from "../menubarPage";
import Nav from "./pages/Nav";
import {
  Button,
  Flex,
  Paragraph,
  Heading,
  Separator,
  Iframe,
  Toast,
  Input,
  CodeHighlight,
  IconButton,
  DropdownMenu,
} from "./src/index";

import usernotifications from "./pages/userNotifications.json";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import NotificationItem from "./pages/NotificationItem";
import "./pages/WebPage.scss";
import {
  FileTextIcon,
  TrashIcon,
  Cross2Icon,
  SizeIcon,
  CopyIcon,
} from "@radix-ui/react-icons";
import "./pages/DesignSystem.scss";
import Logo from "./Logo";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import * as Tabs from "@radix-ui/react-tabs";
import { BellIcon, TimerIcon } from "@radix-ui/react-icons";

const Home = () => {
  // IconButton with notifications
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setNotifications(usernotifications.notifications);
  }, []);

  // Function to handle the dismissal of a notification
  const handleDismissNotification = (notificationId) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== notificationId)
    );
  };
  //

  const [searchQuery, setSearchQuery] = useState(""); // Declare search query state
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query based on input
  };
  const [activePage, setActivePage] = useState("Introduction"); // State to manage active page

  // Sample data for sections/pages
  const sections = [
    { id: "Introduction", title: "Introduction" },
    { id: "ColorFoundations", title: "Color Foundations" },
    { id: "IconButton", title: "Icon Button" },
    // Add more sections as needed...
  ];

  // Function to handle navigation to different sections
  const handleNavigation = (sectionId) => {
    setActivePage(sectionId); // Update active page on click
    // Additional logic for navigating to specific section if needed
  };

  //
  useEffect(() => {
    const checkPosition = () => {
      const detector = document.querySelector(".detector");
      const menu = document.querySelector(".sidebarMenu");
      const previewBody = document.querySelector(".DesignSystemBody");

      if (!detector || !menu || !previewBody) {
        console.log("Elements not found");
        return;
      }

      const rect = detector.getBoundingClientRect();
      const previewBodyRect = previewBody.getBoundingClientRect();

      if (rect.top <= 64) {
        menu.classList.add("Touched");
        previewBody.classList.add("Touched");
        const newLeft = previewBodyRect.left; // Calculate new left position
        menu.style.left = `${newLeft}px`; // Set the left position
      } else {
        menu.classList.remove("Touched");
        previewBody.classList.remove("Touched");

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
    const filteredSections = sections.filter((section) =>
      section.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filteredSections.map((section) => (
      <Button
        size="medium"
        fluid
        variant="ghost"
        key={section.id}
        onClick={() => handleNavigation(section.id)}
        aria-pressed={activePage === section.id ? "true" : undefined}
      >
        <FileTextIcon />
        <span>{section.title}</span>
      </Button>
    ));
  };

  //

  const IconButtonCode = `
  <Flex direction="row" gap={100}>
    <IconButton
      size="small"
      variant="ghost"
      showBadge
      badgeLabel={"3"}
    >
      <BellIcon />
    </IconButton>
  </Flex>
`;

  const IconButtonCodePatterns = `
  <Flex direction="column" gap={100} justify="between"
    style={{
      padding: "var(--size-400) var(--size-100) var(--size-100) var(--size-300)",
      border: "1px solid var(--border-neutral-subtle)",
      borderRadius: "var(--size-100)",
      minWidth: "300px",
      minHeight: "160px",
      position: "relative",
    }}>
    <Flex style={{
      position: "absolute",
      top: "var(--size-50)",
      right: "var(--size-50)"
    }}> 
      <IconButton
        size="small"
        variant="ghost"
      >
        <Cross2Icon />
      </IconButton>
    </Flex>
    <Flex direction="column" gap={100}>
      <Heading level={4} weight="bold">Dialog</Heading>
      <Paragraph>Start playing with the pattern.</Paragraph>
    </Flex>
    <Separator/>
    <Flex direction="row" gap={100} justify="end">
      <Button
        size="small"
        variant="ghost"
      >
        Cancel
      </Button>
      <Button
        size="small"
        variant="solid"
      >
        Save
      </Button>
    </Flex>
  </Flex>
`;

  const customTheme = {
    plain: {
      color: "var(--gray-100)",
      backgroundColor: "var(--black)",
    },
    styles: [
      {
        types: [
          "prolog",
          "comment",
          "block-comment",
          "doctype",
          "cdata",
          "class-name",
        ],
        style: {
          color: "var(--brand-1)", // Use --brand-1 color for specific types
        },
      },
      {
        types: ["attr-name"], // Targeting div elements
        style: {
          color: "var(--brand-2)", // Use --brand-2 color for div elements
        },
      },
      {
        types: ["punctuation"], // Targeting div elements
        style: {
          color: "var(--gray-100)", // Use --brand-2 color for div elements
        },
      },

      // Add more styles as needed...
    ],
  };

  //
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const [currentCode, setCurrentCode] = useState(IconButtonCodePatterns);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  //
  const [showToast, setShowToast] = useState(false);

  return (
    <Flex
      direction={"column"}
      customClass={"DesignSystem WebPage"}
      align={"center"}
    >
      {/* <Flex direction={"column"} customClass={"PrivacyPolicyHeader"}>
        <MenubarPage />
      </Flex> */}
      <Nav />

      {showToast && (
        <Toast
          showToast={showToast}
          setShowToast={setShowToast} // Add this line
          text="Copied to clipboard 🚀"
          time={3000}
          simple
        />
      )}

      <Flex gap={400} customClass={"DesignSystemBodyContainer flareGreen"}>
        <Flex customClass={`sidebarMenu`} direction={"column"}>
          <label className="Logo">
            <Logo />
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
          <ScrollArea.Root className="ScrollAreaRoot">
            <ScrollArea.Viewport
              className="ScrollAreaViewport"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                maxHeight: "70vh",
              }}
            >
              {renderSidebarMenu()}
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              className="ScrollAreaScrollbar"
              orientation="vertical"
            >
              <ScrollArea.Thumb className="ScrollAreaThumb" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar
              className="ScrollAreaScrollbar"
              orientation="horizontal"
            >
              <ScrollArea.Thumb className="ScrollAreaThumb" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="ScrollAreaCorner" />
          </ScrollArea.Root>
        </Flex>
        <Flex direction={"column"} customClass={"DesignSystemBody"}>
          <Flex customClass={"detector"}></Flex>

          {activePage === "Introduction" && (
            <Flex direction={"column"} id="Button" customClass={"WebPageBody"}>
              <Heading level={2} weight="bold">
                Welcome to BlocksIn App!
              </Heading>
              <Paragraph size="large">
                BlocksIn App is your go-to Design System management tool, a
                space where Product Managers, Designers, and Developers
                collaborate seamlessly. It's a platform designed for creating,
                sharing knowledge, assigning ownership, and connecting with
                Design System champions through the Contributions feature.
              </Paragraph>
              <Heading level={3} weight="bold">
                Why Design Systems Matter
              </Heading>
              <Paragraph size="large">
                Design System documentation acts as a bridge between design and
                development. Over my decade-long career as a product designer,
                I've grappled with connecting non-technical individuals,
                striving to streamline component usage to reduce time-to-market
                costs. In my previous role, I collaborated with 55+ product
                designers, encompassing accessibility, localization, and content
                guidelines. This experience illuminated how Design Systems can
                tackle issues like diminishing technical debt and mitigating
                costs tied to design and accessibility audits.
              </Paragraph>
              <Paragraph size="large">
                This is the essence of why documentation is pivotal—it fosters
                connectivity among people and encourages the widespread adoption
                of Design Systems.
              </Paragraph>
              <Heading level={3} weight="bold">
                Experience the Power of BlocksIn App
              </Heading>
              <Paragraph size="large">
                Click on the icon button component to witness the BlocksIn App
                block builder seamlessly connecting various resources. Explore
                how it effortlessly integrates Figma assets, live React code
                from your NPM package, real components, and much more!
              </Paragraph>
            </Flex>
          )}

          {activePage === "ColorFoundations" && (
            <Flex direction={"column"} id="Button" customClass={"WebPageBody"}>
              <Heading level={2} weight="bold">
                Color Foundations
              </Heading>
              <Heading level={3} weight="bold">
                Global Colors
              </Heading>
              <Paragraph size="large">
                Global Colors are a key part of a design system because they
                help make sure that a brand looks the same across all its
                digital products. They are important for a few reasons:
              </Paragraph>
              <Paragraph size="large" weight="bold">
                Consistency ⭐
              </Paragraph>
              <Paragraph size="large">
                Global Colors keep the look of your brand the same everywhere,
                which helps people recognize and remember your brand.
              </Paragraph>

              <Paragraph size="large" weight="bold">
                Efficiency in Development 🚀
              </Paragraph>
              <Paragraph size="large">
                Having a set of predefined colors makes it easier and faster for
                developers and designers to work. They don’t have to guess
                colors; they just use the set ones.
              </Paragraph>

              <Paragraph size="large" weight="bold">
                Easy Updates 🔁
              </Paragraph>
              <Paragraph size="large">
                If you need to change a color, you just update it in the global
                settings, and it changes everywhere. This makes your design
                system easy to manage.
              </Paragraph>
              <Paragraph size="large">
                In short, Global Colors help keep your brand consistent, make
                work easier for your team, and are simple to update.
              </Paragraph>
            </Flex>
          )}

          {activePage === "IconButton" && (
            <Flex
              direction={"column"}
              id="IconButton"
              customClass={"WebPageBody"}
            >
              <Heading level={2} weight="bold">
                Icon Button Component
              </Heading>
              <Paragraph size="medium">
                The IconButton component is a versatile UI element designed to
                offer a clickable interface element that can incorporate various
                icons. It's crafted to be flexible, allowing customization of
                size, appearance, and behavior through its properties.
              </Paragraph>
              <Heading level={3} weight="bold">
                Variants
              </Heading>
              <Paragraph size="medium">
                The Icon Button component showcases various versatile variants,
                including ghost, outline, and solid, each capable of integrating
                an additional badge component. This versatility makes it a
                cornerstone for constructing 90% of standard product
                experiences. It's ideal for displaying dynamic data such as time
                for timer functionalities or indicating the count of unread
                notifications, ensuring enhanced visibility within interfaces.
              </Paragraph>

              <Tabs.Root className="TabsRoot" defaultValue="tab1">
                <Tabs.List
                  className="TabsList"
                  aria-label="Manage your account"
                >
                  <Tabs.Trigger className="TabsTrigger" value="tab1">
                    For developers
                  </Tabs.Trigger>
                  <Tabs.Trigger className="TabsTrigger" value="tab2">
                    For designers
                  </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content className="TabsContent" value="tab1">
                  <Flex customClass="ComponentPreview">
                    <IconButton size="small" variant="ghost">
                      <BellIcon />
                    </IconButton>
                    <IconButton size="small" variant="outline">
                      <BellIcon />
                    </IconButton>
                    <IconButton size="small" variant="solid">
                      <BellIcon />
                    </IconButton>
                    <IconButton size="small" variant="danger">
                      <TrashIcon />
                    </IconButton>
                    <IconButton size="small" disabled variant="ghost">
                      <BellIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      variant="ghost"
                      showBadge
                      badgeLabel="8"
                    >
                      <BellIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      variant="ghost"
                      showBadge
                      badgeLabel="16s"
                    >
                      <TimerIcon />
                    </IconButton>
                  </Flex>
                </Tabs.Content>
                <Tabs.Content className="TabsContent" value="tab2">
                  <Iframe url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FYZW2UgEtRkveoF6bTbmWPw%2FBlocksInGrids-App%3Ftype%3Ddesign%26node-id%3D745%253A947%26mode%3Ddesign%26t%3DwC7qfQ1IqvY8x6g8-1" />
                </Tabs.Content>
              </Tabs.Root>

              <Heading level={3} weight="bold">
                IconButton with Notifications
              </Heading>
              <Paragraph size="medium">
                The single Icon Button finds its utility within compact UI
                modules like dialogs and popups, simplifying user navigation
                through primary actions such as close or save. Its most
                prevalent use case often involves actions like edit or more
                actions, typically represented by the three-dot icon. This
                commonly precedes a dropdown menu, offering more accessible
                items for further actions, thus enriching user interaction and
                experience.
              </Paragraph>
              <Flex customClass="ComponentPreview">
                <DropdownMenu modal={false}>
                  <DropdownMenu.Trigger asChild>
                    <IconButton
                      size="small"
                      variant="ghost"
                      showBadge
                      badgeLabel={notifications.length.toString()}
                    >
                      <BellIcon />
                    </IconButton>
                  </DropdownMenu.Trigger>

                  <DropdownMenu.Content
                    className="DropdownMenuContent userNotifications"
                    sideOffset={4}
                    align="end"
                  >
                    <ScrollArea.Root className="ScrollAreaRoot">
                      <ScrollArea.Viewport
                        className="ScrollAreaViewport"
                        style={{ display: "flex" }}
                      >
                        {notifications.map((notification) => (
                          <NotificationItem
                            key={notification.id}
                            notification={notification}
                            onDismiss={handleDismissNotification}
                            isDismissedByCurrentUser={notification.read}
                          />
                        ))}
                      </ScrollArea.Viewport>
                      <ScrollArea.Scrollbar
                        className="ScrollAreaScrollbar"
                        orientation="vertical"
                      >
                        <ScrollArea.Thumb className="ScrollAreaThumb" />
                      </ScrollArea.Scrollbar>
                      <ScrollArea.Scrollbar
                        className="ScrollAreaScrollbar"
                        orientation="horizontal"
                      >
                        <ScrollArea.Thumb className="ScrollAreaThumb" />
                      </ScrollArea.Scrollbar>
                      <ScrollArea.Corner className="ScrollAreaCorner" />
                    </ScrollArea.Root>
                  </DropdownMenu.Content>
                </DropdownMenu>
              </Flex>

              <Heading level={3} weight="bold">
                Properties
              </Heading>

              <table class="Table">
                <tbody>
                  <tr>
                    <th>Prop</th>
                    <th>Description</th>
                    <th>Value</th>
                  </tr>
                  <tr>
                    <td>
                      <CodeHighlight text="size (string)" />
                    </td>
                    <td>
                      <Paragraph size="large">
                        Determines the size of the button. Default values
                        include "small", "medium", and "large".
                      </Paragraph>
                    </td>
                    <td>
                      <Paragraph size="large">
                        "small", "medium", "large".
                      </Paragraph>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <CodeHighlight text="variant (string)" />
                    </td>
                    <td>
                      <Paragraph size="large">
                        Defines the visual style of the button. Supported
                        variants are "solid", "outline", "ghost",
                        "ghost-static", and "danger".
                      </Paragraph>
                    </td>
                    <td>
                      "solid", "outline", "ghost", "ghost-static", "danger"
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <CodeHighlight text="onClick (function)" />
                    </td>
                    <td>
                      <Paragraph size="large">
                        Function to be executed when the button is clicked.
                      </Paragraph>
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <CodeHighlight text="children (ReactNode)" />
                    </td>
                    <td>
                      <Paragraph size="large">
                        The icon or content displayed within the button.
                      </Paragraph>
                    </td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <CodeHighlight text="showBadge (boolean)" />
                    </td>
                    <td>
                      <Paragraph size="large">
                        Indicates whether to display a badge on the button.
                      </Paragraph>
                    </td>
                    <td>"true", "false"</td>
                  </tr>
                  <tr>
                    <td>
                      <CodeHighlight text="badgeLabel (string)" />
                    </td>
                    <td>Text content for the badge.</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
              <Heading level={3} weight="bold">
                Playground
              </Heading>
              <Paragraph size="medium">
                Experience real-time component interaction with React! This
                powerful feature empowers non-technical users—designers, project
                managers, brand or content specialists—to seamlessly engage with
                components. They can modify component content on the fly,
                ensuring comprehensive validation against accessibility,
                localization, and content design requirements. This hands-on
                approach ensures the design aligns perfectly with all necessary
                criteria, fostering a more collaborative and efficient
                development process.
              </Paragraph>
              <LiveProvider
                code={IconButtonCode}
                scope={{ IconButton, BellIcon, Flex }}
                theme={customTheme}
              >
                <Flex customClass="ComponentPreviewCode">
                  <LivePreview />
                  <LiveEditor />
                  <Paragraph customClass="Error">
                    <LiveError />
                  </Paragraph>
                </Flex>
              </LiveProvider>

              <Heading level={3} weight="bold">
                Design Patterns
              </Heading>
              <Paragraph size="medium">
                Unleash your creativity and dive into the world of React with
                our interactive React-live editor! Feel the freedom to modify
                content, add or remove components, and experiment with different
                patterns to see your ideas come to life in real-time. Once
                you've crafted the perfect design, use handy 'Copy to Clipboard'
                button to seamlessly capture your production-ready frontend
                code. Start playing now and transform your visions into reality!
              </Paragraph>
              <LiveProvider
                code={currentCode}
                scope={{
                  IconButton,
                  BellIcon,
                  Flex,
                  Button,
                  Cross2Icon,
                  Heading,
                  Separator,
                  Paragraph,
                }}
                theme={customTheme}
              >
                <Flex
                  customClass={`ComponentPreviewCode ${
                    isExpanded ? "Expanded" : ""
                  }`}
                >
                  <LivePreview />
                  <LiveEditor
                    value={currentCode}
                    onChange={(newCode) => setCurrentCode(newCode)}
                  />
                  <Paragraph customClass="Error">
                    <LiveError />
                  </Paragraph>
                  <Flex customClass="actions" gap={100}>
                    <IconButton
                      size="medium"
                      variant="ghost"
                      onClick={copyToClipboard}
                    >
                      <CopyIcon />
                    </IconButton>
                    <IconButton
                      variant="solid"
                      size="medium"
                      onClick={toggleExpand}
                    >
                      <SizeIcon />
                    </IconButton>
                  </Flex>
                </Flex>
              </LiveProvider>
              <Heading level={3} weight="bold">
                What's next!?
              </Heading>
              <Paragraph size="medium">
                We are working on NPM package uploader! Why is that so exciting?
                Imagin this, uploading your own React comeponent library, and
                use our Block builder to create Design Patterns with your react
                components and seamlessly exporting ready-production frontend
                code? If you have question, feel free to reach out ot me over
                LinkedIn.
              </Paragraph>
              <CodeHighlight text="> npm i blocksin-system" />
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
