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
  UserItem,
  Youtube,
  ScrollArea,
} from "../src/index";
import ReactLive from "./ReactLive";
import { Cross2Icon, SizeIcon, CopyIcon } from "@radix-ui/react-icons";
import { BellIcon } from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";

const ScrollAreaPage = () => {
  const scope = {
    ScrollArea,
    Youtube,
    UserItem,
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
      Type: "ReactNode",
      Description: "The content to be displayed inside the scrollable area.",
    },
    {
      Property: "style",
      Type: "CSSProperties",
      Description:
        "Additional styles to be applied to the root element of the ScrollArea.",
    },
    {
      Property: "ref",
      Type: "React.Ref",
      Description:
        "A ref to be forwarded to the root element of the ScrollArea.",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            ScrollArea Component
          </Heading>
          <Paragraph size="large">
            ScrollArea is a React component that provides a customizable
            scrollable area with optional custom scrollbars. It is built using
            Radix UI's ScrollArea primitive.
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
          <Flex customClass="ComponentPreview">
            <ScrollArea style={{ height: "200px", width: "150px" }}>
              <Flex
                style={{
                  height: "900px",
                  width: "200px",
                  background: "var(--gray-100)",
                }}
              >
                Long rectangle
              </Flex>
            </ScrollArea>
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
<Flex direction="column" gap={100} style={{width: "60%"}}>
  <ScrollArea style={{ height: "200px", width: "150px" }}>
    <Flex
      style={{
        height: "900px",
        width: "200px",
        background: "var(--gray-100)",
      }}
    >
      Long rectangle
    </Flex>
  </ScrollArea>
</Flex>
      `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default ScrollAreaPage;
