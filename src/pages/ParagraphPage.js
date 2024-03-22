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
} from "../src/index";
import ReactLive from "./ReactLive";
import { Cross2Icon, SizeIcon, CopyIcon } from "@radix-ui/react-icons";
import { BellIcon } from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";

const ParagraphPage = () => {
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
            One common design pattern involving avatars is to use them in user
            profiles, where they represent the user's identity visually. Another
            example is in messaging applications, where avatars can be used to
            display the profile pictures of the sender or recipient next to the
            message.
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
      </Flex>
    </>
  );
};

export default ParagraphPage;
