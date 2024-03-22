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
  Input,
} from "../src/index";
import ReactLive from "./ReactLive";
import { Cross2Icon, SizeIcon, CopyIcon } from "@radix-ui/react-icons";
import { BellIcon } from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";

const InputPage = () => {
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
    Input,
  };

  //

  const columns = [
    {
      Header: "Property",
      accessor: "property",
      Cell: (value) => <CodeHighlight text={value} />,
    },
    { Header: "Type", accessor: "type" },
    { Header: "Description", accessor: "description" },
    { Header: "Default", accessor: "default" },
  ];

  const data = [
    {
      property: "pattern",
      type: "String (optional)",
      description:
        "A regular expression pattern that the input's value must match.",
      default: "-",
    },
    {
      property: "label",
      type: "String (optional)",
      description:
        "The label text displayed alongside the input field. Default is 'First name'.",
      default: "First name",
    },
    {
      property: "placeholder",
      type: "String (optional)",
      description:
        "The placeholder text displayed inside the input field. Default is 'Enter first name'.",
      default: "Enter first name",
    },
    {
      property: "errormsg",
      type: "String | Boolean (optional)",
      description:
        "The error message to display when the input's value is invalid. Set to false to hide the error message. Default is 'Invalid format.'.",
      default: "Invalid format.",
    },
    {
      property: "type",
      type: "String (optional)",
      description:
        "The type of the input (text, search, number, date, etc.). Default is 'text'.",
      default: "text",
    },
    {
      property: "value",
      type: "String (required)",
      description: "The current value of the input.",
      default: "-",
    },
    {
      property: "onChange",
      type: "Function (required)",
      description: "Callback function to handle changes to the input's value.",
      default: "-",
    },
    {
      property: "className",
      type: "String (optional)",
      description: "Additional custom CSS class names to be applied.",
      default: "-",
    },
    {
      property: "disabled",
      type: "Boolean (optional)",
      description: "Disables the input field when set to true.",
      default: "-",
    },
    {
      property: "onClick",
      type: "Function (optional)",
      description:
        "Callback function to be called when the input field is clicked.",
      default: "-",
    },
    {
      property: "validation",
      type: "Boolean (optional)",
      description: "Enables validation display for the input field.",
      default: "-",
    },
    {
      property: "name",
      type: "String (optional)",
      description: "The name attribute of the input field.",
      default: "-",
    },
    {
      property: "fluid",
      type: "Boolean (optional)",
      description: "If true, the container will take up all available space.",
      default: "-",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Input Component
          </Heading>
          <Paragraph size="large">
            Input is a versatile React component for rendering various types of
            input fields. It supports text, search, number, date, and other
            input types, along with customizable labels, placeholders, error
            messages, and an optional search icon for search inputs.
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
            <Input
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              // value={email}
              // onChange={handleEmailChange}
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

          <ReactLive scope={scope}>
            {`
<Flex direction="row" gap={100}>
  <Input
  label="Search"
  placeholder="Enter search keyword"
  type="search"
  />
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
<Input
label="Search"
placeholder="Enter search keyword"
type="search"
/>
</Flex>
            `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default InputPage;
