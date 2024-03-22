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
} from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";

const ToggleGroupPage = () => {
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
            One common design pattern involving avatars is to use them in user
            profiles, where they represent the user's identity visually. Another
            example is in messaging applications, where avatars can be used to
            display the profile pictures of the sender or recipient next to the
            message.
          </Paragraph>
          <ReactLive scope={scope}>
            {`
<Flex direction="row" gap={100}>
  <ToggleGroup type="single" aria-label="View options">
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
      </Flex>
    </>
  );
};

export default ToggleGroupPage;
