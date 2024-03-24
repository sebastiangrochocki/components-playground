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
  Toggle,
  Tooltip,
  Card,
} from "../src/index";
import ReactLive from "./ReactLive";
import {
  Cross2Icon,
  SizeIcon,
  CopyIcon,
  BellIcon,
  ViewGridIcon,
  GridIcon,
  GroupIcon,
} from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";
import CodeFormatter from "./CodeFormatter";

const TogglePage = () => {
  const codeString1 = `  
import Toggle from "./Toggle";
import { ViewGridIcon } from "@radix-ui/react-icons";

<Toggle onPressedChange={(pressed) => console.log(pressed)}>
  <ViewGridIcon />
</Toggle>
  `;
  const [showGridLines, setShowGridLines] = useState(false);

  const toggleGridLines = () => {
    setShowGridLines(!showGridLines);
  };

  const scope = {
    Card,
    showGridLines,
    setShowGridLines,
    toggleGridLines,
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
    Toggle,
    GridIcon,
    GroupIcon,
    Tooltip,
  };

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
      Property: "children",
      Type: "ReactNode",
      Optional: "(optional)",
      Description: "The content of the toggle button.",
    },
    {
      Property: "onPressedChange",
      Type: "(pressed: boolean) => void",
      Optional: "(required)",
      Description:
        "A callback function that is called when the toggle button is pressed. It receives a boolean indicating the new pressed state.",
    },
    {
      Property: "ref",
      Type: "React.Ref",
      Optional: "(optional)",
      Description: "A ref to be forwarded to the root element of the Toggle.",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Toggle Component
          </Heading>
          <Paragraph size="large">
            Toggle is a React component that provides a single toggle button,
            allowing the user to switch between an on and off state. It is built
            using Radix UI's Toggle primitive.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Toggle aria-label="Toggle grid lines">
              <ViewGridIcon />
            </Toggle>
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
<Flex direction="row" gap={100}>
  <Toggle aria-label="Toggle grid lines">
    <ViewGridIcon />
  </Toggle>
</Flex>
      `}
          </ReactLive>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Design Patterns
          </Heading>
          <Paragraph size="large">
            Use a single toggle button for simple, immediate actions like
            turning a feature on or off, or showing/hiding content. Avoid using
            it for complex actions or settings that require confirmation or have
            significant consequences. For example, turning on grid lines in
            drag-and-drop editor.
          </Paragraph>
          <ReactLive scope={scope}>
            {`
<Card direction="column" gap={300} style={{minWidth: "300px"}}>
  <Flex direction="column" fluid>
    <Tooltip>
      <Tooltip.Trigger asChild>
        <label style={{width: "fit-content"}}>
          <Toggle aria-label="Toggle grid lines" checked={showGridLines} onPressedChange={toggleGridLines}>
            <GroupIcon />
          </Toggle>
        </label>
      </Tooltip.Trigger>
      <Tooltip.Content>
        Grid lines
      </Tooltip.Content>
    </Tooltip>
    <Separator/>
  </Flex>

  <Flex customClass={showGridLines ? "Preview gridlines" : "Preview"} fluid>
    <Flex direction="column" fluid gap={200}>
      <Flex>
        <Heading level={3}>
          New Feature!
        </Heading>
      </Flex>
      <Flex>
        <Button>Get Started</Button>
      </Flex>
    </Flex>
  </Flex>
</Card>
            `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default TogglePage;
