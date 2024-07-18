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
  Iframe,
} from "../src/index";
import ReactLive from "./ReactLive";
import { Cross2Icon, SizeIcon, CopyIcon } from "sebikostudio-icons";
import { BellIcon } from "sebikostudio-icons";
import Beaver from "../assets/avatar.png";
import CodeFormatter from "./CodeFormatter";

const IframePage = () => {
  const codeString1 = `  
import { Iframe } from "blocksin-system";

<Iframe url="https://example.com" title="Embedded Content" />
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
    Iframe,
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
      property: "url",
      type: "String (optional)",
      description:
        "The URL of the web page or resource to be embedded in the iframe. If not provided, a default Figma integration message is displayed.",
      default: "-",
    },
    {
      property: "title",
      type: "String (optional)",
      description:
        "A descriptive title for the iframe, which is useful for accessibility. Default is 'Iframe Title'.",
      default: "Iframe Title",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Iframe Component
          </Heading>
          <Paragraph size="large">
            Iframe is a React component designed to embed an iframe within your
            application. It's ideal for integrating external web content, such
            as videos, web pages, or other resources that support iframe
            embedding. Additionally, this component offers a fallback display
            for Figma integration when no URL is provided.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Iframe url="https://example.com" title="Embedded Content" />
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
  <Iframe url="https://example.com" title="Embedded Content" />
</Flex>
      `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default IframePage;
