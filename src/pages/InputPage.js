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
  Card,
} from "../src/index";
import ReactLive from "./ReactLive";
import { Cross2Icon, SizeIcon, CopyIcon, TextIcon } from "sebikostudio-icons";
import { BellIcon } from "sebikostudio-icons";
import Beaver from "../assets/avatar.png";
import CodeFormatter from "./CodeFormatter";

const InputPage = () => {
  const codeString1 = `  
import { Input } from "blocksin-system";

<Input
  label="Email Address"
  placeholder="Enter your email"
  type="email"
  value={email}
  onChange={handleEmailChange}
/>
        `;
  const scope = {
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
    Input,
    TextIcon,
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
      property: "icon",
      type: "Component (optional)",
      description:
        "A React component (icon) to be displayed on the right side of the Input field.",
      default: "-",
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
          <Flex customClass="ComponentPreview">
            <Input
              label="Email Address"
              placeholder="Enter your email"
              type="email"
            />
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
            The Input component supports various variants based on the type
            prop. For example, it can render a standard text input, a search
            input with a magnifying glass icon, or other types like number or
            date inputs. These variants can be used to collect different types
            of user input, such as names, search queries, or numeric values.
            It's important to use the appropriate type for each use case to
            ensure the best user experience. For example, using a "number" type
            for numeric input can enable native validation and input controls,
            while using a "search" type for search inputs can provide a more
            intuitive interface for users searching for content. However, it's
            also important not to overuse these variants and to consider
            accessibility and user experience when choosing the input type.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Input
              label="Search"
              placeholder="Enter keyword"
              type="search"
              // value={email}
              // onChange={handleEmailChange}
            />
            <Input
              label="Password"
              placeholder="Enter password"
              type="password"
              // value={email}
              // onChange={handleEmailChange}
            />
            <Input
              label="Name"
              placeholder="Enter your name"
              type="text"
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
            pageSize={16}
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
  <Input
  label="Your Initials"
  placeholder="Enter your Initials"
  type="text"
  pattern="^[A-Z]+$"
  icon={TextIcon}
  validation={true}
  errormsg="Use capital letters only."
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
            The search input design pattern is ideal for enabling users to find
            specific content within an application. It includes a search icon to
            visually indicate its purpose and often features auto-suggestions
            for quicker results.
          </Paragraph>
          <ReactLive scope={scope}>
            {`
<Flex direction="row" gap={100}>
  <Card direction="column" gap={100}>
    <Input
    label="Search"
    placeholder="Enter search keyword"
    type="search"
    />
    <Paragraph>Results:</Paragraph>
  </Card>
</Flex>
            `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default InputPage;
