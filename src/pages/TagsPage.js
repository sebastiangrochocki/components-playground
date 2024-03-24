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
  Tag,
  Card,
} from "../src/index";
import ReactLive from "./ReactLive";
import {
  Cross2Icon,
  SizeIcon,
  CopyIcon,
  BellIcon,
} from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";
import CodeFormatter from "./CodeFormatter";

const TagsPage = () => {
  const codeString1 = `  
import { Tag } from "blocksin-system";

<Tag text="Technology" variant="Highlighted" />
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
    Tag,
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
      Property: "text",
      Type: "String",
      Optional: "(required)",
      Description: "The text content to be displayed inside the tag.",
    },
    {
      Property: "variant",
      Type: "String",
      Optional: "(optional)",
      Description:
        "The visual style variant of the tag (Normal, Highlighted, etc.). Default is 'Normal'.",
    },
    {
      Property: "color",
      Type: "String",
      Optional: "(optional)",
      Description: "Use to set custom background color.",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Tags Component
          </Heading>
          <Paragraph size="large">
            The Tag component is a simple yet versatile React component used for
            displaying tag-like elements in your application. It supports
            different visual variants, allowing it to be easily integrated and
            used in various contexts such as labeling, categorizing, or marking
            items.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Tag text="Primary" variant="Primary" />
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
          <Flex customClass="ComponentPreview">
            <Tag text="Primary" variant="Primary" />
            <Tag text="Demo" variant="Demo" />
            <Tag text="Default" />
            <Tag text="Custom color" color="#D1ADFF" />
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
  <Tag color="#D1ADFF" text="Default" />
</Flex>
      `}
          </ReactLive>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Design Patterns
          </Heading>
          <Paragraph size="large">
            The Tag component can be used in a product design UI to provide
            secondary information about a component or feature, such as
            categorizing items (e.g., "New", "Sale", "Recommended") without
            being as prominent as a Badge. For example, in an e-commerce
            platform, you can use tags to indicate product attributes like
            "Limited Stock" or "Free Shipping."
          </Paragraph>
          <Paragraph size="large">
            The Tag component in a product design UI is best used to add a
            secondary level of information, such as categorization or additional
            context, to components or features, distinguishing it from the Pill
            component, which is more prominently used to highlight specific
            states or statuses.
          </Paragraph>
          <ReactLive scope={scope}>
            {`
<Flex direction="row" gap={100}>
  <Card direction="column" noPadding style={{maxWidth: "220px"}}>
    <img src={Beaver} alt="Beaver"/>
    <Tag text="Animal" style={{position: "absolute", top: "8px", right: "8px"}}/>
    <Flex direction="column" gap={200} style={{padding: "var(--size-200)"}}>
      <Paragraph>Some lorem ipsum about beavers.</Paragraph>
    </Flex>
  </Card>
</Flex>
            `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default TagsPage;
