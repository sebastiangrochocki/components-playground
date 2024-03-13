import React from "react";
import AvatarPlaceholder from "./AvatarDemo2.svg"; // Adjust the import path as needed
import "./NotificationItem.scss";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { Button, Flex, Paragraph } from "../src/index";

const NotificationItem = ({
  notification,
  onDismiss,
  isDismissedByCurrentUser,
}) => {
  // if (!notification || !notification.author) {
  //   return null; // Or render some placeholder or error state
  // }

  return (
    <Flex
      direction="column"
      customClass={`notificationItem ${isDismissedByCurrentUser ? "read" : ""}`}
    >
      <Flex gap={100} align={"center"} justify={"between"}>
        <Flex gap={100} align={"center"}>
          {notification.author.avatar ? (
            <img src={notification.author.avatar} alt={notification.username} />
          ) : (
            <img src={AvatarPlaceholder} alt="Avatar Placeholder" />
          )}
          <Paragraph size="medium">{notification.author.username}</Paragraph>
        </Flex>
        {isDismissedByCurrentUser ? (
          <Flex customClass={"notificationSeen"}>
            <EnvelopeOpenIcon />
          </Flex>
        ) : (
          <Button
            size="small"
            variant="ghost"
            onClick={() => onDismiss(notification._id)}
          >
            Read
          </Button>
        )}
      </Flex>
      <Paragraph size="small">{notification.message}</Paragraph>
    </Flex>
  );
};

export default NotificationItem;
