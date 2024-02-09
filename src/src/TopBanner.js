import React from "react";
import Flex from "./Flex"; // Adjust the import path
import Paragraph from "./Paragraph"; // Adjust the import path
import IconButton from "./IconButton"; // Adjust the import path
import { Cross1Icon } from "@radix-ui/react-icons"; // Adjust the import path
import "./TopBanner.scss";

const TopBanner = ({ username, notification, onDismiss }) => {
  if (!notification) {
    return null;
  }

  const { title, text, style } = notification;
  const bannerClass = style ? `TopBanner ${style}` : "TopBanner"; // Add the style as a class

  return (
    <Flex customClass={bannerClass} align={"center"} justify={"between"}>
      <Flex direction={"column"}>
        <Paragraph size="large" weight="bold">
          {title}
        </Paragraph>
        <Paragraph>{text}</Paragraph>
      </Flex>
      <IconButton size="medium" variant="ghost-static" onClick={onDismiss}>
        <Cross1Icon />
      </IconButton>
    </Flex>
  );
};

export default TopBanner;
