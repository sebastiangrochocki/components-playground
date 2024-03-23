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
  Switch,
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

const SwitchPage = () => {
  const codeString1 = `  
import { Switch } from "blocksin-system";

function ExampleWithLabel() {
  const [isToggled, setIsToggled] = React.useState(false);

  return (
    <Switch
      id="exampleSwitch"
      checked={isToggled}
      onCheckedChange={setIsToggled}
    >
      Toggle me
    </Switch>
  );
}  
                  `;
  const [isToggled, setIsToggled] = React.useState(false);
  const [isToggled2, setIsToggled2] = React.useState(false);
  const [isToggled3, setIsToggled3] = React.useState(false);

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
    Switch,
    isToggled,
    setIsToggled,
    isToggled2,
    setIsToggled2,
    isToggled3,
    setIsToggled3,
  };

  //

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
      property: "id",
      type: "String (required)",
      description:
        "A unique identifier for the switch. It associates the switch with its label for accessibility.",
      default: "-",
    },
    {
      property: "checked",
      type: "Boolean (required)",
      description:
        "Indicates the switch's state, either 'on' (true) or 'off' (false).",
      default: "-",
    },
    {
      property: "onCheckedChange",
      type: "Function (required)",
      description:
        "Callback function triggered when the switch's state changes, receiving the new state as an argument.",
      default: "-",
    },
    {
      property: "children",
      type: "Node (optional)",
      description:
        "Content displayed alongside the switch, typically used as a label. When provided, the switch and label are rendered inside a Flex container for layout purposes.",
      default: "-",
    },
  ];

  //

  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Switch Component
          </Heading>
          <Paragraph size="large">
            The Switch component is a customizable switch control for React
            applications, leveraging the capabilities of Radix UI's Switch
            component. It provides the option to include a label and can be used
            within a Flex container for better layout management. This component
            is suitable for toggling between two states such as
            enabling/disabling settings or features.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Switch
              id="exampleSwitch"
              checked={isToggled}
              onCheckedChange={setIsToggled}
            >
              Toggle me
            </Switch>
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
            Variants refer to different versions or styles of an avatar image,
            allowing for customization based on context or user preference.
            Avatars are commonly used in user interfaces to represent
            individuals, providing visual identification in profiles, comments,
            or messaging systems.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Switch id="defaultSwitch">Default</Switch>
            <Switch id="disabledSwitch" disabled>
              Disabled
            </Switch>
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
  <Switch
    id="exampleSwitch2"
    checked={isToggled2}
    onCheckedChange={setIsToggled2}
  >
    Toggle me
  </Switch>
</Flex>
      `}
          </ReactLive>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Design Patterns
          </Heading>
          <Paragraph size="large">
            The Switch component is ideal for toggling between two states, such
            as enabling or disabling a feature. It should be used when a binary
            choice needs to be presented to users, offering a clear and
            intuitive way to change settings. However, it might not be suitable
            for situations where more than two options are needed or when the
            state change is complex and requires additional context or
            explanation.
          </Paragraph>
          <ReactLive scope={scope}>
            {`
<Flex direction="row" gap={100}>
  <Switch
    id="exampleSwitch3"
    checked={isToggled3}
    onCheckedChange={setIsToggled3}
  >
    Darkmode
  </Switch>
</Flex>
            `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default SwitchPage;
