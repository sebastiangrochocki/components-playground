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
  UserListItem,
} from "../src/index";
import ReactLive from "./ReactLive";
import { Cross2Icon, SizeIcon, CopyIcon } from "@radix-ui/react-icons";
import { BellIcon } from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";

const UserListItemPage = () => {
  const scope = {
    UserListItem,
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
      Property: "name",
      Type: "String",
      Required: "required",
      Description: "The name of the user to be displayed.",
    },
    {
      Property: "badge",
      Type: "Number",
      Required: "required",
      Description: "The badge level of the user, represented numerically.",
    },
    {
      Property: "avatar",
      Type: "String",
      Required: "optional",
      Description: "The URL or path to the user's avatar image.",
    },
    {
      Property: "role",
      Type: "String",
      Required: "optional",
      Description: "The role or title of the user.",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            UserListItem Component
          </Heading>
          <Paragraph size="large">
            UserListItem is a React component designed to display a user item in
            a list format. It includes an avatar, user name, user role, badge
            level, and an interactive dropdown menu with action items. This
            component is ideal for user lists in applications like social
            networks, team management tools, or any platform that displays user
            information.
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
            <Flex direction="column" gap={100}>
              <UserListItem
                name="John Doe"
                badge={3}
                avatar={Beaver}
                role="Developer"
              />
            </Flex>
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

          <ReactLive scope={scope}>
            {`
<Flex direction="column" gap={100}>
  <UserListItem
  name="John Doe"
  badge={3}
  avatar={Beaver}
  role="Developer"
  />
</Flex>
      `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default UserListItemPage;
