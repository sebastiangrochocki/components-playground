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

const AvatarPage = () => {
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
    {
      Header: "Deprecated",
      accessor: "Deprecated",
      Cell: (value) => <CodeHighlight text={value} />,
    },
  ];

  const data = [
    {
      Property: "avatar",
      Type: "String",
      Optional: "(optional)",
      Description:
        "The URL or path of the avatar image. If not provided, a random avatar from demo images is used.",
    },
    {
      Property: "altText",
      Type: "String",
      Optional: "(optional)",
      Description:
        "Alternative text for the avatar image for accessibility purposes. Defaults to 'Avatar' if not provided.",
    },
    {
      Property: "text",
      Type: "String",
      Optional: "(optional)",
      Description:
        "Text for the avatar image for accessibility purposes. Defaults to 'Avatar' if not provided.",
    },
    {
      Property: "role",
      Type: "String",
      Optional: "(optional, deprecated)",
      Description:
        "The role or title associated with the user. Displayed in the tooltip alongside the altText.",
      Deprecated: "true",
    },
    {
      Property: "size",
      Type: "String",
      Optional: "(optional)",
      Description: "Default 'large'.",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Avatar Component
          </Heading>
          <Paragraph size="large">
            Avatar is a React component that displays a user's avatar image. It
            optionally shows a tooltip with the user's name and role when
            hovered over. If no avatar image is provided, it randomly selects
            one from a set of demo avatars.
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
            <Avatar text="Stefan Bao" />
            <Avatar text="Stefan Bao" size="medium" />

            <Avatar text="Stefan Bao" size="small" />
            <Avatar text="Stefan Bao" avatar={Beaver} />
            <Avatar text="Stefan Bao" avatar={Beaver} size="medium" />

            <Avatar text="Stefan Bao" avatar={Beaver} size="small" />
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
  <Avatar text="Stefan Bao" avatar={Beaver} />
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
<Flex direction={"row"} align={"center"} gap={200}>
  <Avatar size="medium" avatar={Beaver} altText="Gregory" role="Designer" />

  <Flex direction="column">
    <Paragraph size="medium" weight="bold">
      Gregory
    </Paragraph>
    <Paragraph size="small">mail@example.com</Paragraph>
  </Flex>
</Flex>
            `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default AvatarPage;
