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
import { Cross2Icon, SizeIcon, CopyIcon } from "@radix-ui/react-icons";
import { BellIcon } from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";
import CodeFormatter from "./CodeFormatter";

const HeadingPage = () => {
  const codeString1 = `  
import { Heading } from "blocksin-system";

<Heading level={2} weight="bold">
  Your Main Title Here
</Heading>
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
      property: "level",
      type: "Number (optional)",
      description:
        "Specifies the heading level (1 through 6). Corresponds to HTML heading tags (h1, h2, h3, etc.). Default is 1.",
      default: "1",
    },
    {
      property: "weight",
      type: "String (optional)",
      description:
        "Sets the font weight of the heading (regular, bold, etc.). Default is regular.",
      default: "regular",
    },
    {
      property: "children",
      type: "Node (required)",
      description: "The content to be displayed inside the heading tag.",
      default: "-",
    },
    {
      property: "style",
      type: "String (optional)",
      description: "Custom style tag.",
      default: "-",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Heading Component
          </Heading>
          <Paragraph size="large">
            The Heading component is a versatile React component for rendering
            heading text. It allows for dynamic heading levels and customizable
            font weights, making it suitable for various textual hierarchies and
            styles across your application.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Heading level={1} weight="bold">
              Your Main Title Here
            </Heading>
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
            Below variants of headings, from h1 to h4, are being worked on,
            including both bold and regular styles.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Flex direction="column">
              <Heading level={1} weight="bold">
                Your Main Title Here
              </Heading>
              <Heading level={2} weight="bold">
                Your Main Title Here
              </Heading>
              <Heading level={3} weight="bold">
                Your Main Title Here
              </Heading>
              <Heading level={4} weight="bold">
                Your Main Title Here
              </Heading>
            </Flex>
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
  <Heading level={2} weight="bold">
    Your Main Title Here
  </Heading>
</Flex>
      `}
          </ReactLive>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Design Patterns
          </Heading>
          <Paragraph size="large">
            Sure! Headings (h1 to h4) in product interfaces are commonly used to
            provide a clear and hierarchical structure to content, with h1
            typically used for page titles, h2 for section titles, h3 for
            subsections, and h4 for smaller subsections or distinctions within a
            subsection.
          </Paragraph>
          <ReactLive scope={scope}>
            {`
<Flex direction={"row"} align={"center"} gap={200}>
  <Card direction="column" gap={100} style={{minWidth: "240px"}}>
    <Heading level={4} weight="bold">
      Widgets
    </Heading>
    <Separator/>
    <Button variant="outline">Add Github</Button>
  </Card>
</Flex>
            `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default HeadingPage;
