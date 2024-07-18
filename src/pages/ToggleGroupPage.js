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
  ToggleGroup,
} from "../src/index";
import ReactLive from "./ReactLive";
import {
  Cross2Icon,
  SizeIcon,
  CopyIcon,
  BellIcon,
  ViewGridIcon,
  ViewHorizontalIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from "sebikostudio-icons";
import Beaver from "../assets/avatar.png";
import CodeFormatter from "./CodeFormatter";

const ToggleGroupPage = () => {
  const codeString1 = `  
import ToggleGroup from "./ToggleGroup";
import { ViewGridIcon, ViewListIcon } from "sebikostudio-icons";

<ToggleGroup type="single" aria-label="View options">
  <ToggleGroup.Item value="grid" aria-label="Grid view">
    <ViewGridIcon />
  </ToggleGroup.Item>
  <ToggleGroup.Item value="list" aria-label="List view">
    <ViewListIcon />
  </ToggleGroup.Item>
</ToggleGroup>;  
    `;
  const [value, setValue] = React.useState("grid");
  const [value2, setValue2] = React.useState("grid");

  const scope = {
    value2,
    setValue2,
    ViewHorizontalIcon,
    ViewGridIcon,
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
    ToggleGroup,
    TextAlignCenterIcon,
    TextAlignLeftIcon,
    TextAlignRightIcon,
  };

  const columns = [
    {
      Header: "Prop",
      accessor: "Prop",
      Cell: (value) => <CodeHighlight text={value} />,
    },
    { Header: "Type", accessor: "Type" },
    { Header: "Default", accessor: "Default" },
  ];

  const data = [
    { Prop: "asChild", Type: "boolean", Default: "false" },
    {
      Prop: "size",
      Type: "string",
      Default: "medium",
    },
    { Prop: "type*", Type: "enum", Default: "No default value" },
    { Prop: "value", Type: "string", Default: "No default value" },
    { Prop: "defaultValue", Type: "string", Default: "No default value" },
    { Prop: "onValueChange", Type: "function", Default: "No default value" },
    { Prop: "value", Type: "string[]", Default: "[]" },
    { Prop: "defaultValue", Type: "string[]", Default: "[]" },
    { Prop: "onValueChange", Type: "function", Default: "No default value" },
    { Prop: "disabled", Type: "boolean", Default: "false" },
    { Prop: "rovingFocus", Type: "boolean", Default: "true" },
    { Prop: "orientation", Type: "enum", Default: "undefined" },
    { Prop: "dir", Type: "enum", Default: "No default value" },
    { Prop: "loop", Type: "boolean", Default: "true" },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            ToggleGroup Component
          </Heading>
          <Paragraph size="large">
            ToggleGroup is a React component that provides a group of toggle
            buttons, allowing the user to select one or multiple options. It is
            built using Radix UI's ToggleGroup primitive.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <ToggleGroup
              value={value}
              onValueChange={(value) => {
                if (value) setValue(value);
              }}
              type="single"
              aria-label="View options"
            >
              <ToggleGroup.Item value="grid" aria-label="Grid view">
                <ViewGridIcon />
              </ToggleGroup.Item>
              <ToggleGroup.Item value="list" aria-label="List view">
                <ViewHorizontalIcon />
              </ToggleGroup.Item>
            </ToggleGroup>
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
            pageSize={15}
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
<Flex direction="row" gap={100}>
  <ToggleGroup
    value={value2}
    onValueChange={(value) => {
      if (value) setValue2(value);
    }}
    type="single"
    aria-label="View options"
  >
    <ToggleGroup.Item value="grid" aria-label="Grid view">
      <ViewGridIcon />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="list" aria-label="List view">
      <ViewHorizontalIcon />
    </ToggleGroup.Item>
  </ToggleGroup>
</Flex>
      `}
          </ReactLive>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Design Patterns
          </Heading>
          <Paragraph size="large">
            Toggle group component can be used in UI design when you need to
            allow users to select only one option from a group, such as text
            alignment (left, right, center), to ensure mutually exclusive
            selections.
          </Paragraph>
          <ReactLive scope={scope}>
            {`
<Flex direction="row" gap={100}>
  <ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
    <ToggleGroup.Item value="left" aria-label="Align left">
      <TextAlignLeftIcon />
    </ToggleGroup.Item>

    <ToggleGroup.Item value="center" aria-label="Align center">
      <TextAlignCenterIcon />
    </ToggleGroup.Item>

    <ToggleGroup.Item value="right" aria-label="Align right">
      <TextAlignRightIcon />
    </ToggleGroup.Item>
  </ToggleGroup>
</Flex>
            `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default ToggleGroupPage;
