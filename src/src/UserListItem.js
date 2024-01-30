import React from "react";
import "./UserListItem.scss";
import Paragraph from "./Paragraph";
import Flex from "./Flex";
import BadgeLevel from "./BadgeLevel";
import IconButton from "./IconButton";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Avatar from "./Avatar";

const UserListItem = ({ name, badge, avatar, role }) => {
  return (
    <Flex
      direction={"row"}
      customClass={"UserListItem"}
      justify={"between"}
      align={"center"}
    >
      <Flex gap={100} align={"center"}>
        <Avatar avatar={avatar} altText={name} role={role} />
        <Paragraph size="medium">{name}</Paragraph>
      </Flex>
      <Flex gap={100} align={"center"}>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <IconButton size="medium" variant="ghost">
              <PaperPlaneIcon />
            </IconButton>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="DropdownMenuContent"
              sideOffset={4}
              align="start"
            >
              <DropdownMenu.Item disabled className="DropdownMenuItem">
                Send private message
              </DropdownMenu.Item>
              <DropdownMenu.Item disabled className="DropdownMenuItem">
                Create Slack channel
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        <Flex customClass={"BadgeLevelContainer"}>
          <BadgeLevel badge={badge} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UserListItem;
