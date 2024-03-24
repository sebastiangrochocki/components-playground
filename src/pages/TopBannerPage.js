import React, { useEffect, useState, useMemo } from "react";
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
  TopBanner,
} from "../src/index";
import ReactLive from "./ReactLive";
import { Cross2Icon, SizeIcon, CopyIcon } from "@radix-ui/react-icons";
import { BellIcon } from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";
import CodeFormatter from "./CodeFormatter";

const TopBannerPage = () => {
  const codeString1 = `  
import { TopBanner } from "blocksin-system";

const notifications = [
  {
    title: "Community is live!",
    text: "Now you can browse through templates.",
    id: "121212122",
    style: "info",
  },
  {
    title: "New Navigation",
    text: "New release comes with the brand new LeftSide Panel navigation.",
    id: "121212123",
    style: "info",
  },
];

<TopBanner username="johndoe" notifications={notifications} />
        `;
  const notifications = useMemo(
    () => [
      {
        title: "Figma Icons is live!",
        text: "Now you can generate React Icon Library synced with your Figma source.",
        id: "0802202414",
        style: "info",
      },
      {
        title: "We will discontinue BlocksIn App!",
        text: "Please backup your data before closing accounts. You have 30 days left.",
        id: "08022024125",
        style: "danger",
      },
      {
        title: "Community is live!",
        text: "Now you can browse through templates.",
        id: "1212121206",
        style: "info",
      },
      {
        title: "New Navigation",
        text: "New release comes with the brand new LeftSide Panel navigation.",
        id: "12121212117",
        style: "info",
      },
    ],
    []
  );

  const notification1 = {
    title: "Figma Icons is live!",
    text: "Now you can generate React Icon Library synced with your Figma source.",
    id: "0802202414",
    style: "info",
  };

  const notification2 = {
    title: "Figma Icons is live!",
    text: "Now you can generate React Icon Library synced with your Figma source.",
    id: "0802202414",
    style: "danger",
  };

  const notification3 = {
    title: "Figma Icons is live!",
    text: "Now you can generate React Icon Library synced with your Figma source.",
    id: "0802202414",
    style: "warning",
  };

  const [currentNotification, setCurrentNotification] = useState(null);
  const username = "dav";

  useEffect(() => {
    // Example logic to select the first notification that hasn't been dismissed
    const undismissedNotification = notifications.find((notification) => {
      const notificationKey = `NotificationShown_${notification.id}_${username}`;
      return !localStorage.getItem(notificationKey);
    });

    setCurrentNotification(undismissedNotification);
  }, [username, notifications]);

  const dismissNotification = () => {
    if (currentNotification) {
      const notificationKey = `NotificationShown_${currentNotification.id}_${username}`;
      localStorage.setItem(notificationKey, "dismissed");
      setCurrentNotification(null); // Remove the notification from the UI
    }
  };

  //

  const notifications2 = [
    {
      title: "Community is live!",
      text: "Now you can browse through templates.",
      id: "1212121214",
      style: "info",
    },
    {
      title: "New Navigation",
      text: "New release comes with the brand new LeftSide Panel navigation.",
      id: "1212121212",
      style: "info",
    },
  ];

  const scope = {
    notification1,
    notification2,
    notifications2,
    TopBanner,
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
  };

  //
  const columns = [
    {
      Header: "Property",
      accessor: "Property",
      Cell: (value) => <CodeHighlight text={value} />,
    },
    { Header: "Type", accessor: "Type" },
    { Header: "Required", accessor: "Required" },
    { Header: "Description", accessor: "Description" },
  ];

  const data = [
    {
      Property: "username",
      Type: "String",
      Required: "required",
      Description:
        "The username of the currently logged-in user, used for tracking dismissed notifications.",
    },
    {
      Property: "notifications",
      Type: "Array",
      Required: "required",
      Description:
        "An array of notification objects. Each object should contain title, text, id, and style.",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            TopBanner Component
          </Heading>
          <Paragraph size="large">
            The TopBanner component is a React component designed to display
            notification banners at the top of the page. It is capable of
            handling dynamic content and styles and includes functionality to
            dismiss notifications permanently.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            {currentNotification && (
              <TopBanner
                username={username}
                notification={currentNotification}
                onDismiss={dismissNotification}
              />
            )}
          </Flex>
          <Heading level={3} weight="bold">
            Usage
          </Heading>
          <CodeFormatter language="" codeString={codeString1} />
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Variants
          </Heading>
          <Paragraph size="large">
            The ToBanner component is typically positioned at the very top of
            the UI, above the main body of the interface. However, it can also
            be placed within the body, at the top of the content, right below
            the main navigation or even above it, depending on the design and
            context.
            <br />
            <br />
            The component comes with three variants: danger, info, and warning.
            These variants should be used based on the severity and purpose of
            the message. For example, the info variant can be used for regular
            information such as new feature releases or updates. The warning
            variant is suitable for temporary disturbances, like upcoming server
            maintenance, and it's helpful to include information on the duration
            of the downtime. The danger variant should be reserved for critical
            actions or issues, such as an expired credit card or an unpaid
            monthly bill that could potentially disable a user's account.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Flex direction="column" gap={200} fluid>
              <TopBanner username={username} notification={notification1} />
              <TopBanner username={username} notification={notification2} />
              <TopBanner username={username} notification={notification3} />
            </Flex>
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

          <ReactLive scope={scope} vertical>
            {`
<Flex direction="column" gap={100} fluid>
  <TopBanner username="johndoe" notification={notification2} />
  <TopBanner username="johndoe" notification={{
    title: "Figma Icons is live!",
    text: "Now you can generate React Icon Library synced with your Figma source.",
    id: "0802202414",
    style: "warning",
  }} />
</Flex>
      `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default TopBannerPage;
