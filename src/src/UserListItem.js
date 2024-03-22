import React from "react";
import "./UserListItem.scss";
import Paragraph from "./Paragraph";
import Flex from "./Flex";
import BadgeLevel from "./BadgeLevel";
import Avatar from "./Avatar";

const UserListItem = ({ name, badge, avatar, role, children }) => {
  return (
    <Flex
      direction={"row"}
      customClass={"UserListItem"}
      justify={"between"}
      align={"center"}
    >
      <Flex style={{ gap: "var(--size-150)" }} align={"center"}>
        <Avatar size="medium" avatar={avatar} altText={name} role={role} />
        <Paragraph size="medium">{name}</Paragraph>
      </Flex>
      <Flex gap={100} align={"center"}>
        {children}
        <Flex customClass={"BadgeLevelContainer"}>
          <BadgeLevel badge={badge} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserListItem;
