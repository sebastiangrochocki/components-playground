import React from "react";
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
  UserOnHoldItem,
} from "../src/index";
import ReactLive from "./ReactLive";
import { Cross2Icon, SizeIcon, CopyIcon } from "@radix-ui/react-icons";
import { BellIcon } from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";

const UserOnHoldItemPage = () => {
  const user = {
    firstName: "Jane Doe",
    email: "jane.doe@example.com",
    avatar: Beaver,
    role: "User",
    isApproved: false,
  };

  function handleApprove(user) {
    console.log("Approving user:", user);
  }

  function handleReject(user) {
    console.log("Rejecting user:", user);
  }

  function handleRemove(user) {
    console.log("Removing user:", user);
  }

  const user2 = {
    firstName: "Jane Doe",
    email: "jane.doe@example.com",
    avatar: Beaver,
    role: "User",
    isApproved: false,
  };

  const scope = {
    user2,
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
    UserOnHoldItem,
  };

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
      Property: "fluid",
      Type: "Boolean",
      Required: "optional",
      Description:
        "If true, the component will take the full width of its container. Default is false.",
    },
    {
      Property: "user",
      Type: "Object",
      Required: "required",
      Description:
        "An object representing the user. Should include firstName, email, avatar, role, and isApproved properties.",
    },
    {
      Property: "onApprove",
      Type: "Function",
      Required: "required",
      Description:
        "Callback function called when the 'Approve' button is clicked. Receives the user object as an argument.",
    },
    {
      Property: "onReject",
      Type: "Function",
      Required: "required",
      Description:
        "Callback function called when the 'Reject' button is clicked. Receives the user object as an argument.",
    },
    {
      Property: "onRemove",
      Type: "Function",
      Required: "required",
      Description:
        "Callback function called when the 'Remove User' button is clicked. Receives the user object as an argument.",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            UserOnHoldItem Component
          </Heading>
          <Paragraph size="large">
            The UserOnHoldItem component is designed to manage user items in a
            hold or approval state within your application. It displays user
            information alongside actions to approve, reject, or remove a user,
            providing a convenient way to handle user management tasks.
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
            <UserOnHoldItem
              fluid={true}
              user={user}
              onApprove={handleApprove}
              onReject={handleReject}
              onRemove={handleRemove}
            />
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

          <ReactLive scope={scope} vertical>
            {`
<Flex direction="column" gap={100}>
  <UserOnHoldItem
  fluid={true}
  user={user2}
  onApprove
  onReject
  onRemove
  />
</Flex>
      `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default UserOnHoldItemPage;
