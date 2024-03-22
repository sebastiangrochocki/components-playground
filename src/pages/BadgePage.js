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
  Badge,
} from "../src/index";
import ReactLive from "./ReactLive";
import { Cross2Icon, SizeIcon, CopyIcon } from "@radix-ui/react-icons";
import { BellIcon } from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";

const BadgePage = () => {
  const scope = {
    Separator,
    Badge,
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
      Property: "label",
      Type: "String",
      Optional: "(required)",
      Description: "The text to be displayed inside the badge.",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Badge Component
          </Heading>
          <Paragraph size="large">
            The Badge component is a simple React component used to display a
            small badge, typically used to show a count or to label an element.
            This component is styled using SCSS.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <div
              style={{
                width: "44px",
                height: "44px",
                position: "relative",
              }}
              className="dashed"
            >
              <Badge label="New" />
            </div>
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
<div
style={{
width: "44px",
height: "44px",
position: "relative",
}}
className="dashed"
>
  <Badge label="New" />
</div>
      `}
          </ReactLive>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Design Patterns
          </Heading>
          <Paragraph size="large">
            One common design pattern involving badge..
          </Paragraph>
          <ReactLive scope={scope}>
            {`
<Flex style={{ paddingRight: '32px', boxSizing: 'border-box', position: 'relative',  }} align="center" gap={0} direction='row' justify="center">
  <Heading level={2} weight="bold" style={{ color: 'var(--foreground-neutral)',  textAlign: 'left', }}>New Feature</Heading>
  <Badge label="DEMO" />
</Flex>
            `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default BadgePage;
