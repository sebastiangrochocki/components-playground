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
  Tooltip,
} from "../src/index";
import ReactLive from "./ReactLive";
import {
  Cross2Icon,
  SizeIcon,
  CopyIcon,
  ChatBubbleIcon,
} from "@radix-ui/react-icons";
import { BellIcon } from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";

const TooltipPage = () => {
  const scope = {
    ChatBubbleIcon,
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
    Tooltip,
  };

  //
  const columns = [
    {
      Header: "Prop",
      accessor: "Prop",
      Cell: (value) => <CodeHighlight text={value} />,
    },
    { Header: "Type", accessor: "Type" },
    { Header: "Default", accessor: "Default" },
  ];

  const data = [
    { Prop: "delayDuration", Type: "Number", Default: "300" },
    { Prop: "side", Type: "String", Default: "'top'" },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Tooltip Component
          </Heading>
          <Paragraph size="large">
            The Tooltip component is a lightweight and customizable React
            component used for displaying contextual information when hovering
            over or focusing on an element. It supports various positioning and
            can be easily integrated into any UI. Check radix-ui.com for more
            info.
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
            <Tooltip delayDuration={200}>
              <Tooltip.Trigger asChild>
                <IconButton>
                  <ChatBubbleIcon />
                </IconButton>
              </Tooltip.Trigger>
              <Tooltip.Content side="right">
                <Paragraph size="medium">Test</Paragraph>
              </Tooltip.Content>
            </Tooltip>
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
  <Tooltip delayDuration={200}>
    <Tooltip.Trigger asChild>
      <IconButton>
        <ChatBubbleIcon />
      </IconButton>
    </Tooltip.Trigger>
    <Tooltip.Content side="right">
      <Paragraph size="medium">Test</Paragraph>
    </Tooltip.Content>
  </Tooltip>
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
  <Tooltip delayDuration={200}>
    <Tooltip.Trigger asChild>
      <IconButton>
        <ChatBubbleIcon />
      </IconButton>
    </Tooltip.Trigger>
    <Tooltip.Content side="right">
      <Paragraph size="medium">Test</Paragraph>
    </Tooltip.Content>
  </Tooltip>
</Flex>
            `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default TooltipPage;
