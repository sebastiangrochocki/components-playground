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
import {
  Cross2Icon,
  SizeIcon,
  CopyIcon,
  BellIcon,
} from "sebikostudio-icons";
import Beaver from "../assets/avatar.png";
import CodeFormatter from "./CodeFormatter";

const SeparatorPage = () => {
  const codeString1 = `  
import { Separator } from "blocksin-system";

// Renders a horizontal separator
<Separator />
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
      accessor: "Property",
      Cell: (value) => <CodeHighlight text={value} />,
    },
    { Header: "Type", accessor: "Type" },
    { Header: "Default", accessor: "Default" },
  ];

  const data = [{ Property: "vertical", Type: "Boolean", Default: "false" }];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Separator Component
          </Heading>
          <Paragraph size="large">
            Separator is a simple React component designed to visually divide
            content within layouts. It renders as a horizontal line, helping to
            organize and separate different sections or elements on a page.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Separator />
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
            The Separator component offers two variants: horizontal, which is
            ideal for dividing sections or content within a UI, and vertical,
            suitable for separating groups of actionable elements in horizontal
            toolbars or similar layouts.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Separator />
            <Separator vertical />
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
<Flex direction="row" gap={100} style={{width: "60%"}}>
  <Separator />
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

export default SeparatorPage;
