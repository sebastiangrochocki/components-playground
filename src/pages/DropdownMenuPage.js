import React, { useState } from "react";
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
  ComboBox,
  Checkbox,
  DropdownMenu,
} from "../src/index";
import ReactLive from "./ReactLive";
import {
  BellIcon,
  SliderIcon,
  FigmaLogoFilledIcon,
  Component1Icon,
  Cross2Icon,
  SizeIcon,
  CopyIcon,
  GearIcon,
  TimerIcon,
  DotsHorizontalIcon,
} from "sebikostudio-icons";
import Beaver from "../assets/avatar.png";
import CodeFormatter from "./CodeFormatter";

const DropdownMenuPage = () => {
  // eslint-disable-next-line
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [item, setItem] = React.useState("Item1");
  const codeString1 = `  
import { DropdownMenu, IconButton } from "blocksin-system";
import { SliderIcon } from "sebikostudio-icons";

const MyComponent = () => {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <IconButton variant="outline">
          <SliderIcon />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content side="bottom" align="start">
        <DropdownMenu.RadioGroup defaultValue="Item1">
          <DropdownMenu.RadioItem value="Item1">Item 1</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="Item2">Item 2</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="Item3">Item 3</DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
    `;
  const scope = {
    SliderIcon,
    FigmaLogoFilledIcon,
    Component1Icon,
    DropdownMenu,
    Separator,
    Checkbox,
    ComboBox,
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
    CodeHighlight,
    GearIcon,
    TimerIcon,
    DotsHorizontalIcon,
  };
  //
  const columnsContent = [
    {
      Header: "Property",
      accessor: "property",
      Cell: (value) => <CodeHighlight text={value} />,
    },
    { Header: "Type", accessor: "type" },
    { Header: "Default Value", accessor: "defaultValue" },
  ];

  const dataContent = [
    {
      property: "asChild",
      type: "boolean",
      defaultValue: "false",
    },
    {
      property: "noPadding",
      type: "boolean",
      defaultValue: "false",
    },
    {
      property: "loop",
      type: "boolean",
      defaultValue: "false",
    },
    {
      property: "onCloseAutoFocus",
      type: "function",
      defaultValue: "No default value",
    },
    {
      property: "onEscapeKeyDown",
      type: "function",
      defaultValue: "No default value",
    },
    {
      property: "onPointerDownOutside",
      type: "function",
      defaultValue: "No default value",
    },
    {
      property: "onFocusOutside",
      type: "function",
      defaultValue: "No default value",
    },
    {
      property: "onInteractOutside",
      type: "function",
      defaultValue: "No default value",
    },
    {
      property: "forceMount",
      type: "boolean",
      defaultValue: "No default value",
    },
    {
      property: "side",
      type: "enum",
      defaultValue: '"bottom"',
    },
    {
      property: "sideOffset",
      type: "number",
      defaultValue: "0",
    },
    {
      property: "align",
      type: "enum",
      defaultValue: '"center"',
    },
    {
      property: "alignOffset",
      type: "number",
      defaultValue: "0",
    },
    {
      property: "avoidCollisions",
      type: "boolean",
      defaultValue: "true",
    },
    {
      property: "collisionBoundary",
      type: "Boundary",
      defaultValue: "[]",
    },
    {
      property: "collisionPadding",
      type: "number | Padding",
      defaultValue: "0",
    },
    {
      property: "arrowPadding",
      type: "number",
      defaultValue: "0",
    },
    {
      property: "sticky",
      type: "enum",
      defaultValue: '"partial"',
    },
    {
      property: "hideWhenDetached",
      type: "boolean",
      defaultValue: "false",
    },
  ];

  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            DropdownMenu Component
          </Heading>
          <Paragraph size="large">
            DropdownMenu is a React component that provides a customizable
            dropdown menu for various actions or options. It is built using the
            Radix UI Dropdown Menu primitive and includes features such as
            submenus, radio groups, checkbox items, and custom icons.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <IconButton variant="outline">
                  <SliderIcon />
                </IconButton>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content side="bottom" align="start">
                <DropdownMenu.Item icon={CopyIcon}>Item 1</DropdownMenu.Item>
                <DropdownMenu.Item icon={FigmaLogoFilledIcon}>
                  Item 2
                </DropdownMenu.Item>
                <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger icon={Component1Icon}>
                    Item3
                  </DropdownMenu.SubTrigger>
                  <DropdownMenu.SubContent>
                    <DropdownMenu.Item>Item 1</DropdownMenu.Item>
                    <DropdownMenu.Item>Item 2</DropdownMenu.Item>
                    <DropdownMenu.Item hotkey="ctrl + S">
                      Item 3
                    </DropdownMenu.Item>
                  </DropdownMenu.SubContent>
                </DropdownMenu.Sub>
              </DropdownMenu.Content>
            </DropdownMenu>
          </Flex>
          <Heading level={3} weight="bold">
            Usage
          </Heading>
          <CodeFormatter language="" codeString={codeString1} />
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            DropdownMenu CheckboxItem
          </Heading>

          <Flex customClass="ComponentPreview">
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <IconButton variant="outline">
                  <SliderIcon />
                </IconButton>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content side="bottom" align="start">
                <DropdownMenu.CheckboxItem
                  checked={isChecked1}
                  onCheckedChange={(checked) => setIsChecked1(checked)}
                >
                  Item 1
                </DropdownMenu.CheckboxItem>
                <DropdownMenu.CheckboxItem
                  checked={isChecked2}
                  onCheckedChange={(checked) => setIsChecked2(checked)}
                >
                  Item 2
                </DropdownMenu.CheckboxItem>
                <DropdownMenu.CheckboxItem
                  checked={isChecked3}
                  onCheckedChange={(checked) => setIsChecked3(checked)}
                >
                  Item 3
                </DropdownMenu.CheckboxItem>
              </DropdownMenu.Content>
            </DropdownMenu>
          </Flex>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            DropdownMenu RadioItem
          </Heading>
          <Flex customClass="ComponentPreview">
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <IconButton variant="outline">
                  <SliderIcon />
                </IconButton>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content side="bottom" sideOffset={8} align="start">
                <DropdownMenu.RadioGroup value={item} onValueChange={setItem}>
                  <DropdownMenu.RadioItem value="Item1">
                    Item 1
                  </DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem value="Item2">
                    Item 2
                  </DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem value="Item3">
                    Item 3
                  </DropdownMenu.RadioItem>
                </DropdownMenu.RadioGroup>
              </DropdownMenu.Content>
            </DropdownMenu>
          </Flex>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Properties for Content
          </Heading>

          <Table
            fluid
            columns={columnsContent}
            data={dataContent}
            pageSize={22}
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
  <DropdownMenu>
    <DropdownMenu.Trigger asChild>
      <IconButton variant="outline">
        <SliderIcon />
      </IconButton>
    </DropdownMenu.Trigger>
    
    <DropdownMenu.Content side="bottom" align="start">
      <DropdownMenu.Item icon={CopyIcon}>Item 1</DropdownMenu.Item>
      <DropdownMenu.Item icon={FigmaLogoFilledIcon}>
        Item 2
      </DropdownMenu.Item>
      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger icon={Component1Icon}>
          Item3
        </DropdownMenu.SubTrigger>
        <DropdownMenu.SubContent>
          <DropdownMenu.Item>Item 1</DropdownMenu.Item>
          <DropdownMenu.Item>Item 2</DropdownMenu.Item>
          <DropdownMenu.Item hotkey="ctrl + S">
            Item 3
          </DropdownMenu.Item>
        </DropdownMenu.SubContent>
      </DropdownMenu.Sub>
    </DropdownMenu.Content>
  </DropdownMenu>
</Flex>
      `}
          </ReactLive>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Design Patterns
          </Heading>
          <Paragraph size="large">
            The dropdown menu design pattern should be used when there are a
            large number of options to choose from, helping to conserve space
            and maintain a clean interface. However, it should be avoided for
            presenting critical or frequently accessed options, as it may
            require additional clicks and hinder user efficiency.
          </Paragraph>
          <ReactLive scope={scope}>
            {`
<Flex direction={"row"} align={"center"} gap={200} style={{background: "var(--background-neutral-container)", boxShadow: "var(--shadow-level-1)", borderRadius: "8px", padding: "var(--size-50)"}}>
  <IconButton variant="ghost" showBadge badgeLabel="8">
    <BellIcon/>
  </IconButton> 

  <IconButton variant="ghost" showBadge badgeLabel="9s">
    <TimerIcon/>
  </IconButton> 

  <DropdownMenu>
    <DropdownMenu.Trigger asChild>
      <IconButton variant="ghost">
        <DotsHorizontalIcon />
      </IconButton>
    </DropdownMenu.Trigger>

    <DropdownMenu.Content side="bottom" align="start">
      <DropdownMenu.Item icon={CopyIcon}>Quick actions</DropdownMenu.Item>
      <DropdownMenu.Item icon={FigmaLogoFilledIcon}>
        Some settings
      </DropdownMenu.Item>
      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger icon={Component1Icon}>
          Some actions
        </DropdownMenu.SubTrigger>
        <DropdownMenu.SubContent>
          <DropdownMenu.Item icon={CopyIcon} hotkey="ctrl + D">Duplicate</DropdownMenu.Item>
          <DropdownMenu.Item icon={CopyIcon} hotkey="ctrl + R">Rename</DropdownMenu.Item>
          <DropdownMenu.Item icon={CopyIcon} hotkey="ctrl + S">
            Save as
          </DropdownMenu.Item>
        </DropdownMenu.SubContent>
      </DropdownMenu.Sub>
    </DropdownMenu.Content>
  </DropdownMenu>
</Flex>
            `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default DropdownMenuPage;
