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
  Card,
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

const ParagraphPage = () => {
  const codeString1 = `  
import { Paragraph } from "blocksin-system";

<Paragraph size="large" weight="bold">
  This is a large, bold paragraph.
</Paragraph>
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
    Card,
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
      property: "customClass",
      type: "String (optional)",
      description:
        "Additional custom CSS class names to be applied to the paragraph.",
      default: "-",
    },
    {
      property: "size",
      type: "String (optional)",
      description:
        "Specifies the size of the text (small, medium, large, etc.). Default is medium.",
      default: "medium",
    },
    {
      property: "weight",
      type: "String (optional)",
      description:
        "Sets the font weight of the text (regular, bold, etc.). Default is regular.",
      default: "regular",
    },
    {
      property: "children",
      type: "Node (required)",
      description: "The text content to be displayed inside the paragraph.",
      default: "-",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Paragraph Component
          </Heading>
          <Paragraph size="large">
            The Paragraph component is a React component for rendering text
            content. It provides options to customize the size and weight of the
            text, making it a versatile choice for displaying paragraphs or
            other textual elements in your application.
          </Paragraph>
          <Flex customClass="ComponentPreview" direction="column">
            <Paragraph size="large" weight="bold">
              This is a large, bold paragraph.
            </Paragraph>
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
            Variants refer to different versions or styles of an avatar image,
            allowing for customization based on context or user preference.
            Avatars are commonly used in user interfaces to represent
            individuals, providing visual identification in profiles, comments,
            or messaging systems.
          </Paragraph>
          <Flex customClass="ComponentPreview" direction="column">
            <Paragraph size="large" weight="bold">
              This is a large, bold paragraph.
            </Paragraph>
            <Paragraph size="medium" weight="bold">
              This is a medium, bold paragraph.
            </Paragraph>
            <Paragraph size="small" weight="bold">
              This is a small, bold paragraph.
            </Paragraph>
            <Paragraph size="large">
              This is a large, regular paragraph.
            </Paragraph>
            <Paragraph size="medium">
              This is a medium, regular paragraph.
            </Paragraph>
            <Paragraph size="small">
              This is a small, regular paragraph.
            </Paragraph>
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
<Flex direction="row" gap={100}>
  <Paragraph size="large" weight="bold">
    This is a large, bold paragraph.
  </Paragraph>
</Flex>
      `}
          </ReactLive>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Design Patterns
          </Heading>
          <Paragraph size="large">
            Design patterns with paragraphs, like small or large, can be used to
            create visually distinct text blocks for different types of content,
            such as short descriptions or longer paragraphs, ensuring a clear
            hierarchy and improved readability in product interfaces.
          </Paragraph>
          <ReactLive scope={scope}>
            {`
<Flex direction="row" gap={100}>
  <Card direction="column" gap={200} align="center" style={{minWidth: "290px"}}>
    <Flex gap={100} fluid>
      <Button fluid variant="ghost">Learn more</Button>
      <Button fluid>Get Started</Button>
    </Flex>
    <Paragraph size="small">
      Cancel anytime!
    </Paragraph>
  </Card>
</Flex>
            `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default ParagraphPage;
