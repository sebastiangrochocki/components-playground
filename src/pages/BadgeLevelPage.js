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
  UserListItem,
  BadgeLevel,
} from "../src/index";
import ReactLive from "./ReactLive";
import { Cross2Icon, SizeIcon, CopyIcon } from "@radix-ui/react-icons";
import { BellIcon } from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";
import CodeFormatter from "./CodeFormatter";

const BadgeLevelPage = () => {
  const scope = {
    Separator,
    Badge,
    BadgeLevel,
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
    UserListItem,
    Paragraph,
  };

  //
  const codeString1 = `
import { BadgeLevel } from "blocksin-system";

<BadgeLevel badge={3} />
    `;

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
      Property: "badge",
      Type: "Number",
      Optional: "(required)",
      Description:
        "Represents the badge level to be displayed. Defaults to 1 if not provided.",
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
            <BadgeLevel badge="8" />
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
<Flex>
  <BadgeLevel badge="8" />
</Flex>
      `}
          </ReactLive>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Design Patterns
          </Heading>
          <Paragraph size="large">
            To use the BadgeLevel component in design patterns, simply include
            it with numbers to visually highlight levels. This can be applied in
            personal user settings to indicate the level of advancement in
            learning new user interfaces or other gamification features.
          </Paragraph>
          <ReactLive scope={scope}>
            {`
<Flex fluid style={{width: "80%"}} direction="column">
  <UserListItem avatar={Beaver} name="John" role="Designer" level="3"/>
</Flex>
            `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default BadgeLevelPage;
