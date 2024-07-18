import React from "react";
import Flex from "./Flex";
import Paragraph from "./Paragraph";
import IconButton from "./IconButton";
import { Cross1Icon } from "sebikostudio-icons";
import "./TopBanner.scss";

const TopBanner = ({ username, notification, onDismiss }) => {
  if (!notification) {
    return null;
  }

  const { title, text, style } = notification;
  const bannerClass = style ? `TopBanner ${style}` : "TopBanner";
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
