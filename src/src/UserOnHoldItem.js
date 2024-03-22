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
      gap={300}
      align="center"
      justify={"between"}
    >
      <Flex style={{ gap: "var(--size-150)" }} align={"center"}>
        <Avatar
          avatar={user.avatar}
          role={user.role}
          altText={user.firstName}
          size="medium"
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
