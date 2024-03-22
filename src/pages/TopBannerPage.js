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

const TopBannerPage = () => {
  const notifications = useMemo(
    () => [
      {
        title: "Figma Icons is live!",
        text: "Now you can generate React Icon Library synced with your Figma source.",
        id: "080220241",
        style: "info",
      },
      {
        title: "We will discontinue BlocksIn App!",
        text: "Please backup your data before closing accounts. You have 30 days left.",
        id: "0802202412",
        style: "danger",
      },
      {
        title: "Community is live!",
        text: "Now you can browse through templates.",
        id: "121212120",
        style: "info",
      },
      {
        title: "New Navigation",
        text: "New release comes with the brand new LeftSide Panel navigation.",
        id: "1212121211",
        style: "info",
      },
    ],
    []
  );

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
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Variants
          </Heading>
          <Paragraph size="large">
            Variants refer to different versions or styles of an avatar image,
            allowing for customization based on context or user preference.
            Avatars are commonly used in user interfaces to represent
            individuals, providing visual identification in profiles, comments,
            or messaging systems.
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
  <TopBanner username="johndoe" notifications={notifications2} />
</Flex>
      `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default TopBannerPage;
