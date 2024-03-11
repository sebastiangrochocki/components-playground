import React from "react";
import "./UserItem.scss";
import Paragraph from "./Paragraph";
import Flex from "./Flex";
import Avatar from "./Avatar";

const UserItem = ({ name, avatar, helper, role }) => {
  return (
    <Flex direction={"row"} customClass={"UserItem"} align={"center"} gap={200}>
      <Avatar avatar={avatar} altText={name} role={role} />

      <Flex direction="column" customClass="UserInfo">
        <Paragraph size="medium" weight="bold">
          {name}
        </Paragraph>
        <Paragraph size="small">{helper}</Paragraph>
      </Flex>
    </Flex>
  );
};

export default UserItem;
