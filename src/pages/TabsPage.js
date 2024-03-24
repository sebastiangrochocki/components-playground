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
  Tabs,
  Input,
  Card,
} from "../src/index";
import ReactLive from "./ReactLive";
import { Cross2Icon, SizeIcon, CopyIcon } from "@radix-ui/react-icons";
import { BellIcon } from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";
import CodeFormatter from "./CodeFormatter";

const TabsPage = () => {
  const codeString1 = `  
import { Tabs } from "blocksin-system";

<Tabs defaultValue="tab1" fluid>
  <Tabs.List aria-label="Manage your account">
    <Tabs.Trigger value="tab1">Sign Up</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Sign In</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">{/* Sign Up content */}</Tabs.Content>
  <Tabs.Content value="tab2">{/* Sign In content */}</Tabs.Content>
</Tabs>
                    `;
  const scope = {
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
    Tabs,
    Input,
    Card,
  };

  //
  const columns = [
    {
      Header: "Property",
      accessor: "Property",
      Cell: (value) => <CodeHighlight text={value} />,
    },
    { Header: "Type", accessor: "Type" },
    { Header: "Optional", accessor: "Optional" },
    { Header: "Description", accessor: "Description" },
  ];

  const data = [
    {
      Property: "defaultValue",
      Type: "String",
      Optional: "(required)",
      Description: "The default value of the currently selected tab.",
    },
    {
      Property: "fluid",
      Type: "Boolean",
      Optional: "(optional)",
      Description:
        "If true, the tabs will take up the full width of their container. Default is false.",
    },
    {
      Property: "children",
      Type: "ReactNode",
      Optional: "(required)",
      Description:
        "The content of the tabs, including Tabs.List, Tabs.Trigger, and Tabs.Content components.",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Tabs Component
          </Heading>
          <Paragraph size="large">
            The Tabs component is a powerful and flexible React component for
            creating tabbed interfaces in your application. It allows users to
            easily switch between different views or content sections, providing
            an organized and intuitive user experience.
          </Paragraph>
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
            Variants refer to different versions or styles of an avatar image,
            allowing for customization based on context or user preference.
            Avatars are commonly used in user interfaces to represent
            individuals, providing visual identification in profiles, comments,
            or messaging systems.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Tabs defaultValue="tab1" fluid>
              <Tabs.List aria-label="Manage your account">
                <Tabs.Trigger value="tab1">Sign Up</Tabs.Trigger>
                <Tabs.Trigger value="tab2">Sign In</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="tab1">{/* Sign Up content */}</Tabs.Content>
              <Tabs.Content value="tab2">{/* Sign In content */}</Tabs.Content>
            </Tabs>
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
<Flex direction="row" gap={100} fluid>
  <Tabs defaultValue="tab1" fluid>
    <Tabs.List aria-label="Manage your account">
      <Tabs.Trigger value="tab1">Sign Up</Tabs.Trigger>
      <Tabs.Trigger value="tab2">Sign In</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="tab1">Sign Up content</Tabs.Content>
    <Tabs.Content value="tab2">Sign In content</Tabs.Content>
  </Tabs>
</Flex>
      `}
          </ReactLive>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Design Patterns
          </Heading>
          <Paragraph size="large">
            The Tabs component is used to organize content into different
            sections, allowing users to easily switch between them, making it
            ideal for conserving space and providing navigational clarity in
            interfaces with multiple categories or modes of information.
          </Paragraph>
          <Paragraph size="large">
            For a sign-up/sign-in module, you can use Tabs to separate the two
            processes into distinct sections within the same interface, making
            it easy for users to understand and navigate between the two
            actions. The "Sign Up" tab would contain the form fields for new
            user registration, while the "Sign In" tab would provide the login
            form for existing users. This design pattern keeps the interface
            organized and intuitive for users interacting with the
            authentication system.
          </Paragraph>
          <ReactLive scope={scope}>
            {`
<Flex direction="column" gap={100} fluid>
  <Card direction="column" noPadding >
    <Tabs defaultValue="tab1" fluid>
      <Tabs.List aria-label="Manage your account">
        <Tabs.Trigger value="tab1">Sign Up</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Sign In</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <form>
          <Flex direction="column" gap={100} style={{padding: "16px"}}>
            <Input label="Username" type="text" placeholder="Enter username" fluid/>
            <Input label="Password" type="password" placeholder="Enter password" fluid/>
            <Button fluid>Sign Up</Button>
          </Flex>
        </form>
      </Tabs.Content>

      <Tabs.Content value="tab2">
        <form>
          <Flex direction="column" gap={100} style={{padding: "16px"}}>
            <Input label="Username" type="text" placeholder="Enter username" fluid/>
            <Input label="Password" type="password" placeholder="Enter password" fluid/>
            <Button fluid>Sign In</Button>
          </Flex>
        </form>
      </Tabs.Content>
    </Tabs>
  </Card>
</Flex>
            `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default TabsPage;
