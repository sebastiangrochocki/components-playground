import React from "react";
import Button from "./Button";
import Paragraph from "./Paragraph";
import Flex from "./Flex";
import "./UserOnHoldItem.scss";
import Avatar from "./Avatar";

const UserOnHoldItem = ({ fluid, user, onApprove, onReject, onRemove }) => {
  const fluidClass = fluid ? "fluid" : "";

  return (
    <Flex
      customClass={`UserOnHoldItem ${fluidClass}`}
      gap={100}
      align="center"
      justify={"between"}
    >
      <Flex gap={100} align={"center"}>
        <Avatar
          avatar={user.avatar}
          role={user.role}
          altText={user.firstName}
        />
        <Paragraph>{user.firstName}</Paragraph>
        <Paragraph>{user.email}</Paragraph>
      </Flex>

      <Flex align={"center"} gap={100} style={{ marginLeft: "auto" }}>
        {user.isApproved ? (
          <Button size="small" variant="danger" onClick={() => onRemove(user)}>
            Remove User
          </Button>
        ) : (
          <>
            <Button
              size="small"
              variant="solid"
              onClick={() => onApprove(user)}
            >
              Approve
            </Button>
            <Button
              size="small"
              variant="danger"
              onClick={() => onReject(user)}
            >
              Reject
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default UserOnHoldItem;
