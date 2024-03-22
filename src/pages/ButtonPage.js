import React, { useState, useEffect } from "react";
import Section from "./Section";

import {
  Flex,
  Paragraph,
  Heading,
  Iframe,
  DropdownMenu,
  Separator,
  CodeHighlight,
  Button,
  ScrollArea,
  IconButton,
  Tabs,
  Table,
} from "../src/index";
import NotificationItem from "./NotificationItem";
import usernotifications from "./userNotifications.json";
import ReactLive from "./ReactLive";
import { Cross2Icon, SizeIcon, CopyIcon } from "@radix-ui/react-icons";
import { BellIcon, TimerIcon } from "@radix-ui/react-icons";

const ButtonPage = () => {
  // IconButton with notifications
  const [notifications, setNotifications] = useState([]);
  const scope = {
    Separator,
    Button,
    Cross2Icon,
    SizeIcon,
    CopyIcon,
    IconButton,
    Flex,
    Heading,
    BellIcon,
    Paragraph,
  };
  useEffect(() => {
    setNotifications(usernotifications.notifications);
  }, []);

  // Function to handle the dismissal of a notification
  const handleDismissNotification = (notificationId) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== notificationId)
    );
  };

  const columns = [
    {
      Header: "Property",
      accessor: "name",
      Cell: (value) => <CodeHighlight text={value} />,
    },
    { Header: "Type", accessor: "type" },
    { Header: "Description", accessor: "description" },
  ];

  const data = [
    {
      name: "disabled",
      type: "Boolean",
      description: "Disables the button when true. Default is false.",
    },
    {
      name: "showBadge",
      type: "Boolean",
      description: "Shows a badge on the button when true. Default is false.",
    },
    {
      name: "badgeLabel",
      type: "String",
      description: "The text to be displayed inside the badge.",
    },
    {
      name: "size",
      type: "String",
      description:
        "Sets the size of the button (small, medium, large). Default is medium.",
    },
    {
      name: "variant",
      type: "String",
      description:
        "Sets the button's style variant (solid, outline, etc.). Default is solid.",
    },
    {
      name: "onClick",
      type: "Function",
      description: "Callback function to be called when the button is clicked.",
    },
    {
      name: "onDrop",
      type: "Function",
      description: "Callback function to be called on drop event.",
    },
    {
      name: "fluid",
      type: "Boolean",
      description:
        "If true, the button takes the full width of its container. Default is false.",
    },
    {
      name: "isLoading",
      type: "Boolean",
      description:
        "Shows a loading spinner and disables the button when true. Default is false.",
    },
    {
      name: "helper",
      type: "String",
      description:
        "A helper text to be displayed alongside the button content.",
    },
    {
      name: "iconLeft",
      type: "Component",
      description:
        "A React component (icon) to be displayed on the left side of the button text.",
    },
    {
      name: "children",
      type: "Node",
      description: "The content to be displayed inside the button.",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Button Component
          </Heading>
          <Paragraph size="large">
            The IconButton component is a versatile UI element designed to offer
            a clickable interface element that can incorporate various icons.
            It's crafted to be flexible, allowing customization of size,
            appearance, and behavior through its properties.
          </Paragraph>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Variants
          </Heading>
          <Paragraph size="large">
            The Icon Button component showcases various versatile variants,
            including ghost, outline, and solid, each capable of integrating an
            additional badge component. This versatility makes it a cornerstone
            for constructing 90% of standard product experiences. It's ideal for
            displaying dynamic data such as time for timer functionalities or
            indicating the count of unread notifications, ensuring enhanced
            visibility within interfaces.
          </Paragraph>
        </Section>

        <Section>
          {" "}
          <Tabs defaultValue="tab1">
            <Tabs.List aria-label="Manage your account">
              <Tabs.Trigger value="tab1">For developers</Tabs.Trigger>
              <Tabs.Trigger value="tab2">For designers</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">
              <Flex customClass="ComponentPreview">
                <Button size="medium" variant="ghost">
                  Button
                </Button>
                <Button size="medium" variant="outline">
                  Button
                </Button>
                <Button size="medium" variant="solid">
                  Button
                </Button>
                <Button size="medium" variant="danger">
                  Button
                </Button>
                <Button size="medium" disabled variant="ghost">
                  Button
                </Button>
                <Button size="medium" isLoading disabled variant="ghost">
                  Button
                </Button>
                <Button size="medium" variant="solid" showBadge badgeLabel="8">
                  <BellIcon />
                  Button
                </Button>
                <Button
                  size="medium"
                  variant="outline"
                  showBadge
                  badgeLabel="16s"
                >
                  <TimerIcon />
                  Button
                </Button>
              </Flex>
            </Tabs.Content>
            <Tabs.Content value="tab2">
              <Iframe url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F1frKKZIlbKr0SfJGEcrDku%2FBlocksIn-App-System%3Ftype%3Ddesign%26node-id%3D745%253A882%26mode%3Ddesign%26t%3DeR7xNJyygwaiLCRi-1" />
            </Tabs.Content>
          </Tabs>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Button with Notifications
          </Heading>
          <Paragraph size="large">
            The single Icon Button finds its utility within compact UI modules
            like dialogs and popups, simplifying user navigation through primary
            actions such as close or save. Its most prevalent use case often
            involves actions like edit or more actions, typically represented by
            the three-dot icon. This commonly precedes a dropdown menu, offering
            more accessible items for further actions, thus enriching user
            interaction and experience.
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
                <ScrollArea>
                  {notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                      onDismiss={handleDismissNotification}
                      isDismissedByCurrentUser={notification.read}
                    />
                  ))}
                </ScrollArea>
              </DropdownMenu.Content>
            </DropdownMenu>
          </Flex>
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
  <IconButton
    size="small"
    variant="ghost"
    showBadge
    badgeLabel={"3"}
  >
    <BellIcon />
  </IconButton>
</Flex>
      `}
          </ReactLive>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Design Patterns
          </Heading>
          <Paragraph size="large">
            Unleash your creativity and dive into the world of React with our
            interactive React-live editor! Feel the freedom to modify content,
            add or remove components, and experiment with different patterns to
            see your ideas come to life in real-time. Once you've crafted the
            perfect design, use handy 'Copy to Clipboard' button to seamlessly
            capture your production-ready frontend code. Start playing now and
            transform your visions into reality!
          </Paragraph>
          <ReactLive scope={scope}>
            {`
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
    <Paragraph size="large" >Start playing with the pattern.</Paragraph>
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
      `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default ButtonPage;
