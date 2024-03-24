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
import CodeFormatter from "./CodeFormatter";

const TooltipPage = () => {
  const codeString1 = `  
import React from "react";
import { Tooltip, IconButton, Paragraph } from "blocksin-system";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

const Example = () => {
  return (
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
  );
};

export default Example;
      `;
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
          <Flex customClass="ComponentPreview">
            <Tooltip delayDuration={200}>
              <Tooltip.Trigger asChild>
                <IconButton>
                  <ChatBubbleIcon />
                </IconButton>
              </Tooltip.Trigger>
              <Tooltip.Content side="top">Test</Tooltip.Content>
            </Tooltip>
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
            The tooltip component offers variable design variants with
            positioning options such as left, right, top, and bottom. By
            default, the tooltip is positioned according to the variant, but if
            there is limited space within the window, it dynamically repositions
            itself to the nearest available space.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Tooltip delayDuration={200}>
              <Tooltip.Trigger asChild>
                <IconButton>
                  <ChatBubbleIcon />
                </IconButton>
              </Tooltip.Trigger>
              <Tooltip.Content side="top">
                <Paragraph size="medium">Top</Paragraph>
              </Tooltip.Content>
            </Tooltip>

            <Tooltip delayDuration={200}>
              <Tooltip.Trigger asChild>
                <IconButton>
                  <ChatBubbleIcon />
                </IconButton>
              </Tooltip.Trigger>
              <Tooltip.Content side="bottom">
                <Paragraph size="medium">Bottom</Paragraph>
              </Tooltip.Content>
            </Tooltip>

            <Tooltip delayDuration={200}>
              <Tooltip.Trigger asChild>
                <IconButton>
                  <ChatBubbleIcon />
                </IconButton>
              </Tooltip.Trigger>
              <Tooltip.Content side="left">
                <Paragraph size="medium">Left</Paragraph>
              </Tooltip.Content>
            </Tooltip>

            <Tooltip delayDuration={200}>
              <Tooltip.Trigger asChild>
                <IconButton>
                  <ChatBubbleIcon />
                </IconButton>
              </Tooltip.Trigger>
              <Tooltip.Content side="right">
                <Paragraph size="medium">Right</Paragraph>
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
  <Tooltip delayDuration={200}>
    <Tooltip.Trigger asChild>
      <IconButton>
        <ChatBubbleIcon />
      </IconButton>
    </Tooltip.Trigger>
    <Tooltip.Content side="right">
      Test
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
            Tooltips are useful in UI design when graphical elements or
            truncated text don't fully convey interaction or information. They
            can enhance understanding in cases like IconButton with complex
            actions, buttons with long texts needing truncation, or truncated
            headlines in product cards.
          </Paragraph>
          <ReactLive scope={scope}>
            {`
<Flex direction="row" gap={100} fluid style={{maxWidth: "300px"}}>
  <Tooltip delayDuration={200}>
    <Tooltip.Trigger asChild>
      <Heading style={{textOverflow: "ellipsis", width: "100%", overflow: "hidden", textWrap: "nowrap"}} level={3} weight="bold">Some very long headline with truncation on</Heading>
    </Tooltip.Trigger>
    <Tooltip.Content side="top">
      Some very long headline with truncation on
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
