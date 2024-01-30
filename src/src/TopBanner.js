import React, { useState, useEffect } from "react";

import Flex from "./Flex"; // Adjust the import path
import Paragraph from "./Paragraph"; // Adjust the import path
import IconButton from "./IconButton"; // Adjust the import path
import { Cross1Icon } from "@radix-ui/react-icons"; // Adjust the import path
// import notifications from "./notifications.json";
import "./TopBanner.scss";

const TopBanner = ({ username, notifications }) => {
  const [isVisible, setIsVisible] = useState(false);

  const firstNotification = notifications.length > 0 ? notifications[0] : null;

  useEffect(() => {
    if (firstNotification) {
      const notificationKey = `NotificationShown_${firstNotification.id}_${username}`;

      // Check if the notification has been dismissed before
      const notificationDismissed = localStorage.getItem(notificationKey);
      if (!notificationDismissed) {
        setIsVisible(true);
      }
    }
  }, [username, firstNotification]);

  const dismissNotification = () => {
    if (firstNotification) {
      const notificationKey = `NotificationShown_${firstNotification.id}_${username}`;

      // Mark the notification as dismissed forever
      localStorage.setItem(notificationKey, "dismissed");
      setIsVisible(false);
    }
  };

  if (!isVisible || notifications.length === 0) {
    return null;
  }

  const { title, text, style } = notifications[0];

  const bannerClass = style ? `TopBanner ${style}` : "TopBanner"; // Add the style as a class

  return (
    <Flex customClass={bannerClass} align={"center"} justify={"between"}>
      <Flex direction={"column"}>
        <Paragraph size="large" weight="bold">
          {title}
        </Paragraph>

        <Paragraph>{text}</Paragraph>
      </Flex>

      <IconButton
        size="medium"
        variant="ghost-static"
        onClick={dismissNotification}
      >
        <Cross1Icon />
      </IconButton>
    </Flex>
  );
};

export default TopBanner;
