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
  Pill,
  Card,
  UserListItem,
} from "../src/index";
import ReactLive from "./ReactLive";
import {
  Cross2Icon,
  SizeIcon,
  CopyIcon,
  BellIcon,
} from "sebikostudio-icons";
import Beaver from "../assets/avatar.png";
import CodeFormatter from "./CodeFormatter";

const PillPage = () => {
  const codeString1 = `  
import { Pill } from "blocksin-system";

<Pill status="success">Active</Pill>
          `;
  const scope = {
    UserListItem,
    Pill,
    Card,
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
      Property: "children",
      Type: "Node",
      Description: "The content to be displayed inside the pill.",
    },
    {
      Property: "status",
      Type: "String",
      Description:
        "The status of the pill, which determines its color and styling. Possible values are 'error', 'warning', 'success', or 'disabled'.",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Pill Component
          </Heading>
          <Paragraph size="large">
            Pill is a React component that represents a pill-shaped element,
            commonly used to display status or category information. It accepts
            a status prop to determine its visual appearance.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Pill status="success">done</Pill>
          </Flex>
          <Heading level={3} weight="bold">
            Usage
          </Heading>
          <CodeFormatter language="" codeString={codeString1} />
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Variants
          </Heading>
          <Paragraph size="large">
            The Pill component provides various variants based on status, such
            as 'error', 'warning', 'success', or 'disabled', which determine its
            color and styling. It is commonly used within other components, like
            tables, to highlight additional information such as status.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Pill status="success">done</Pill>
            <Pill status="error">blocked</Pill>
            <Pill status="warning">pending</Pill>
            <Pill status="disabled">undefined</Pill>
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
<Flex direction="row" gap={100} fluid style={{width: "80%"}}>
  <Card direction="column" gap={100} fluid>
    <Flex justify="between">
      <Heading level={4} weight="bold">Username</Heading>
      <Flex style={{minWidth: "156px"}}>
        <Heading level={4} weight="bold">Status</Heading>
      </Flex>
    </Flex>
    <Separator/>
    <UserListItem badge="3" name="Seb" avatar={Beaver}>
      <Flex style={{minWidth: "100px"}}>
        <Pill status="warning">pending</Pill>
      </Flex>
    </UserListItem>
    <UserListItem badge="9" name="Rick" avatar={Beaver}>
      <Flex style={{minWidth: "100px"}}>
        <Pill status="success">approved</Pill>
      </Flex>
    </UserListItem>
  </Card>
</Flex>
      `}
          </ReactLive>
        </Section>

        {/* <Section>
          <Heading level={3} weight="bold">
            Design Patterns
          </Heading>
          <Paragraph size="large">
            One common design pattern involving avatars is to use them in user
            profiles, where they represent the user's identity visually. Another
            example is in messaging applications, where avatars can be used to
            display the profile pictures of the sender or recipient next to the
            message.
          </Paragraph>
          <ReactLive scope={scope}>
            {`
<Flex direction={"row"} align={"center"} gap={200} style={{width: "60%"}}>
  <Separator />
</Flex>
            `}
          </ReactLive>
        </Section> */}
      </Flex>
    </>
  );
};

export default PillPage;
