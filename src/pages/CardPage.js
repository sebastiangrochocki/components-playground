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
  Pill,
  Card,
  UserListItem,
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

const CardPage = () => {
  const codeString1 = `  
import { Card } from "blocksin-system";

<Card noPadding variant="outline">
  {/* Card Content */}
</Card>
          `;
  const scope = {
    UserListItem,
    Pill,
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
      accessor: "Property",
      Cell: (value) => <CodeHighlight text={value} />,
    },
    { Header: "Type", accessor: "Type" },
    { Header: "Description", accessor: "Description" },
  ];

  const data = [
    {
      Property: "children",
      Type: "Node",
      Description: "The content to be displayed inside the card.",
    },
    {
      Property: "noPadding",
      Type: "Boolean",
      Description: "If true, removes padding from the card content.",
    },
    {
      Property: "variant",
      Type: "String",
      Description:
        "The variant of the card. Possible values are 'outline' and 'ghost'.",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Card Component
          </Heading>
          <Paragraph size="large">
            Card is a React component that provides a flexible container for
            content. It supports different variants, such as outline and ghost,
            and allows for customization through props like noPadding.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Card style={{ minWidth: "300px", minHeight: "200px" }}></Card>
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
            The Card component comes in three variants: default, outline (with
            border only), and ghost (without border and shadow). The default
            card is suitable for displaying primary content and top-level
            sections, while the outline and ghost cards can be used inside
            top-level cards to add an additional level of hierarchy to the
            content in the product interface.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Card style={{ minWidth: "200px", minHeight: "100px" }}>
              <Paragraph>Default Card</Paragraph>
            </Card>
            <Card
              variant="outline"
              style={{ minWidth: "200px", minHeight: "100px" }}
            >
              <Paragraph>Outline Card</Paragraph>
            </Card>
            <Card
              variant="ghost"
              style={{ minWidth: "200px", minHeight: "100px" }}
            >
              <Paragraph>Ghost Card</Paragraph>
            </Card>
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

          <ReactLive scope={scope} vertical>
            {`
<Flex direction="row" gap={100} fluid style={{width: "90%"}}>
  <Card direction="column" gap={200} fluid>
    <Heading level={4} weight="bold">
      Dashboard
    </Heading>
    <Flex wrap="wrap" gap={100} fluid>
      <Card
        variant="outline"
        style={{ maxWidth: "300px", minHeight: "100px", flex: "1" }}
        direction="column"
        gap={100}
      >
        <Paragraph size="large" weight="bold">Card Number 1</Paragraph>
        <Paragraph>Experience real-time component interaction with React!</Paragraph>
      </Card>

      <Card
        variant="outline"
        style={{ maxWidth: "300px", minHeight: "100px", flex: "1" }}
        direction="column"
        gap={100}
      >
        <Paragraph size="large" weight="bold">Card Number 2</Paragraph>
        <Paragraph>Experience real-time component interaction with React!</Paragraph>
      </Card>

      <Card
        variant="outline"
        style={{ maxWidth: "300px", minHeight: "100px", flex: "1"  }}
        direction="column"
        gap={100}
      >
        <Paragraph size="large" weight="bold">Card Number 3</Paragraph>
        <Paragraph>Experience real-time component interaction with React!</Paragraph>
      </Card>
    </Flex>
  </Card>
</Flex>
      `}
          </ReactLive>
        </Section>

        {/* <Section>
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
<Flex direction={"row"} align={"center"} gap={200} style={{width: "60%"}}>
  <Separator />
</Flex>
            `}
          </ReactLive>
        </Section> */}
      </Flex>
    </>
  );
};

export default CardPage;
