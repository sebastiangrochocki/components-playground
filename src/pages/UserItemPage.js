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
  UserItem,
} from "../src/index";
import ReactLive from "./ReactLive";
import { Cross2Icon, SizeIcon, CopyIcon, BellIcon } from "sebikostudio-icons";
import Beaver from "../assets/avatar.png";
import CodeFormatter from "./CodeFormatter";

const UserItemPage = () => {
  const codeString1 = `  
import UserItem from "./UserItem";

<UserItem
  name="John Doe"
  avatar="/path/to/avatar.jpg"
  helper="Software Engineer"
  role="Team Lead"
/>
    `;
  const scope = {
    UserItem,
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
    { Header: "Description", accessor: "Description" },
  ];

  const data = [
    {
      Property: "name",
      Type: "String",
      Description: "The name of the user.",
    },
    {
      Property: "avatar",
      Type: "String",
      Description: "The URL or path of the avatar image.",
    },
    {
      Property: "helper",
      Type: "String",
      Description:
        "Additional text to display, such as the user's role or status.",
    },
    {
      Property: "role",
      Type: "String",
      Description:
        "The role or title associated with the user, displayed in the tooltip of the avatar.",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            UserItem Component
          </Heading>
          <Paragraph size="large">
            UserItem is a React component that displays a user's information,
            including their avatar, name, and helper text (such as a role or
            status). It is designed to be used in various contexts, such as
            inside tables or dropdown menu items.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Flex direction="column" gap={100}>
              <UserItem
                name="John Doe"
                avatar={Beaver}
                helper="Software Engineer"
                role="Team Lead"
              />
            </Flex>
          </Flex>
          <Heading level={3} weight="bold">
            Usage
          </Heading>
          <CodeFormatter language="" codeString={codeString1} />
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
            large
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
  <UserItem
    name="John Doe"
    avatar={Beaver}
    helper="Software Engineer"
    role="Team Lead"
  />
</Flex>
      `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default UserItemPage;
