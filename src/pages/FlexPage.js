import React from "react";
import Section from "./Section";
import CodeFormatter from "./CodeFormatter";

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
} from "../src/index";
import ReactLive from "./ReactLive";
import { Cross2Icon, SizeIcon, CopyIcon } from "sebikostudio-icons";
import { BellIcon } from "sebikostudio-icons";
import Beaver from "../assets/avatar.png";

const FlexPage = () => {
  const codeString1 = `  
import { Flex } from "blocksin-system";

<Flex direction="column" align="center" justify="space-between" gap={100}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>
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
  };

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
      property: "children",
      type: "Node (required)",
      description:
        "The child elements to be rendered inside the flex container.",
      default: "-",
    },
    {
      property: "direction",
      type: "String (optional)",
      description:
        "Specifies the flex direction (row, column, etc.). Default is row.",
      default: "row",
    },
    {
      property: "gap",
      type: "Number (optional)",
      description: "The space between the child elements (in pixels).",
      default: "-",
    },
    {
      property: "style",
      type: "Object (optional)",
      description: "Custom inline styles to be applied to the flex container.",
      default: "{}",
    },
    {
      property: "align",
      type: "String (optional)",
      description:
        "Aligns items along the cross axis (center, flex-start, flex-end, etc.).",
      default: "-",
    },
    {
      property: "justify",
      type: "String (optional)",
      description:
        "Justifies items along the main axis (center, space-between, space-around, etc.).",
      default: "-",
    },
    {
      property: "id",
      type: "String (optional)",
      description: "The ID attribute of the flex container.",
      default: "-",
    },
    {
      property: "customClass",
      type: "String (optional)",
      description: "Additional custom CSS class names to be applied.",
      default: "-",
    },
    {
      property: "onClick",
      type: "Function (optional)",
      description:
        "Callback function to be called when the flex container is clicked.",
      default: "() => {}",
    },
    {
      property: "wrap",
      type: "String (optional)",
      description:
        "Allows flex items to wrap as needed (wrap, nowrap, wrapreverse).",
      default: "-",
    },
    {
      property: "fluid",
      type: "Boolean (optional)",
      description: "If true, the container will take up all available space.",
      default: "false",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Flex Component
          </Heading>
          <Paragraph size="large">
            The Flex component is a React utility component designed to
            streamline the usage of CSS flexbox layout. It provides a simple and
            intuitive way to create flexible and responsive layouts with ease.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Flex
              direction="column"
              align="center"
              justify="space-between"
              gap={100}
              style={{
                backgroundColor: "var(--brand-2)",
                padding: "var(--size-200)",
              }}
            >
              <Flex
                direction="column"
                gap={100}
                style={{ backgroundColor: "var(--white)" }}
              >
                item 1
              </Flex>
              <Flex
                direction="column"
                gap={100}
                style={{ backgroundColor: "var(--white)" }}
              >
                item 2
              </Flex>
              <Flex
                direction="column"
                gap={100}
                style={{ backgroundColor: "var(--white)" }}
              >
                item 3
              </Flex>
            </Flex>
          </Flex>
          <Heading level={3} weight="bold">
            Usage
          </Heading>
          <CodeFormatter language="" codeString={codeString1} />
        </Section>

        {/* <Section>
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
        </Section> */}

        <Section>
          <Heading level={3} weight="bold">
            Properties
          </Heading>

          <Table
            fluid
            columns={columns}
            data={data}
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
<Flex direction="row" gap={100}>
  <Flex
  direction="rowreverse"
  wrap="wrapreverse"
  align="center"
  justify="space-between"
  gap={100}
  style={{
    backgroundColor: "var(--brand-2)",
    padding: "var(--size-200)",
    maxWidth: "200px",
  }}
  >
    <Flex
      direction="column"
      gap={100}
      style={{ backgroundColor: "var(--white)" }}
    >
      item 1
    </Flex>
    <Flex
      direction="column"
      gap={100}
      style={{ backgroundColor: "var(--white)" }}
    >
      item 2
    </Flex>
    <Flex
      direction="column"
      gap={100}
      style={{ backgroundColor: "var(--white)" }}
    >
      item 3
    </Flex>
    <Flex
      direction="column"
      gap={100}
      style={{ backgroundColor: "var(--white)" }}
    >
      item 4
    </Flex>
    <Flex
      direction="column"
      gap={100}
      style={{ backgroundColor: "var(--white)" }}
    >
      item 5
    </Flex>
    <Flex
      direction="column"
      gap={100}
      style={{ backgroundColor: "var(--white)" }}
    >
      item 6
    </Flex>
    <Flex
      direction="column"
      gap={100}
      style={{ backgroundColor: "var(--white)" }}
    >
      item 7
    </Flex>
  </Flex>
</Flex>
      `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default FlexPage;
