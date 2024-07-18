import React, { useState } from "react";
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
  Youtube,
  ScrollArea,
  Select,
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

const SelectPage = () => {
  const [role, setRole] = useState("");
  const [role2, setRole2] = useState("");
  const codeString1 = `  
import { Select } from "blocksin-system";
import { useState } from "react";

const MyComponent = () => {
  const [role, setRole] = useState("");

  return (
    <Select value={role} onValueChange={setRole}>
      <Select.Trigger aria-label="Role">
        <Select.Value placeholder="Select a role" />
      </Select.Trigger>
      <Select.Content side="bottom" sideOffset={8} align="start">
        <Select.Item value="Design">Product Designer</Select.Item>
        <Select.Item value="Developer">Developer</Select.Item>
        <Select.Item value="PM">PM</Select.Item>
        <Select.Item value="Brand">Brand Designer</Select.Item>
      </Select.Content>
    </Select>
  );
};  
        `;
  const scope = {
    role2,
    setRole2,
    Select,
    ScrollArea,
    Youtube,
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
    { Header: "Default", accessor: "Default" },
    { Header: "Description", accessor: "Description" },
  ];

  const data = [
    {
      Property: "defaultValue",
      Type: "string",
      Default: "No default value",
      Description: "The default value.",
    },
    {
      Property: "value",
      Type: "string",
      Default: "No default value",
      Description: "The current value.",
    },
    {
      Property: "onValueChange",
      Type: "function",
      Default: "No default value",
      Description: "Callback function called when the value changes.",
    },
    {
      Property: "defaultOpen",
      Type: "boolean",
      Default: "No default value",
      Description: "Initial open state.",
    },
    {
      Property: "open",
      Type: "boolean",
      Default: "No default value",
      Description: "Current open state.",
    },
    {
      Property: "onOpenChange",
      Type: "function",
      Default: "No default value",
      Description: "Callback function called when the open state changes.",
    },
    {
      Property: "dir",
      Type: "enum",
      Default: "No default value",
      Description: "Direction of the component.",
    },
    {
      Property: "name",
      Type: "string",
      Default: "No default value",
      Description: "The name of the component.",
    },
    {
      Property: "disabled",
      Type: "boolean",
      Default: "No default value",
      Description: "Whether the component is disabled.",
    },
    {
      Property: "required",
      Type: "boolean",
      Default: "No default value",
      Description: "Whether the component is required.",
    },
  ];

  const columns2 = [
    {
      Header: "Property",
      accessor: "Property",
      Cell: (value) => <CodeHighlight text={value} />,
    },
    { Header: "Type", accessor: "Type" },
    { Header: "Default", accessor: "Default" },
  ];

  const data2 = [
    { Property: "asChild", Type: "boolean", Default: "false" },
    {
      Property: "onCloseAutoFocus",
      Type: "function",
      Default: "No default value",
    },
    {
      Property: "onEscapeKeyDown",
      Type: "function",
      Default: "No default value",
    },
    {
      Property: "onPointerDownOutside",
      Type: "function",
      Default: "No default value",
    },
    { Property: "position", Type: "enum", Default: '"item-aligned"' },
    { Property: "side", Type: "enum", Default: '"bottom"' },
    { Property: "sideOffset", Type: "number", Default: "0" },
    { Property: "align", Type: "enum", Default: '"start"' },
    { Property: "alignOffset", Type: "number", Default: "0" },
    { Property: "avoidCollisions", Type: "boolean", Default: "true" },
    { Property: "collisionBoundary", Type: "Boundary", Default: "[]" },
    { Property: "collisionPadding", Type: "number | Padding", Default: "10" },
    { Property: "arrowPadding", Type: "number", Default: "0" },
    { Property: "sticky", Type: "enum", Default: '"partial"' },
    { Property: "hideWhenDetached", Type: "boolean", Default: "false" },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Select Component
          </Heading>
          <Paragraph size="large">
            Select is a React component that provides a customizable dropdown
            menu for selecting an option from a list. It is built using the
            Radix UI Select primitive and includes features such as custom
            icons, scrolling buttons, and item indicators.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Select value={role} onValueChange={setRole}>
              <Select.Trigger aria-label="Role">
                <Select.Value placeholder="Select a role" />
              </Select.Trigger>
              <Select.Content side="bottom" sideOffset={8} align="start">
                <Select.Item value="Design">Product Designer</Select.Item>
                <Select.Item value="Developer">Developer</Select.Item>
                <Select.Item value="PM">PM</Select.Item>
                <Select.Item value="Brand">Brand Designer</Select.Item>
              </Select.Content>
            </Select>
          </Flex>
          <Heading level={3} weight="bold">
            Usage
          </Heading>
          <CodeFormatter language="" codeString={codeString1} />
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Properties for Root
          </Heading>

          <Table
            fluid
            columns={columns}
            data={data}
            pageSize={18}
            sorting={false}
            fullBorder
            large
          />
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Properties for Content
          </Heading>
          <Table
            fluid
            columns={columns2}
            data={data2}
            pageSize={17}
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
<Flex direction="column" gap={100} style={{width: "60%"}}>
  <Select value={role2} onValueChange={setRole2}>
    <Select.Trigger aria-label="Role">
      <Select.Value placeholder="Select a role" />
    </Select.Trigger>
    <Select.Content position="popper" side="bottom" sideOffset={8} align="start">
      <Select.Item value="Design">Product Designer</Select.Item>
      <Select.Item value="Developer">Developer</Select.Item>
      <Select.Item value="PM">PM</Select.Item>
      <Select.Item value="Brand">Brand Designer</Select.Item>
    </Select.Content>
  </Select>
</Flex>
      `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default SelectPage;
