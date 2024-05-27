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
  Slider,
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

const SliderPage = () => {
  const codeString1 = `  
import { Slider } from "blocksin-system";

<form>
  <Slider defaultValue={[50]} max={100} step={1} />
</form>
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
    Switch,
    Slider,
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
      property: "defaultValue",
      type: "Array<number> (optional)",
      description: "The initial value of the slider.",
      default: "[]",
    },
    {
      property: "value",
      type: "Array<number> (optional)",
      description: "The controlled value of the slider.",
      default: "undefined",
    },
    {
      property: "min",
      type: "number (optional)",
      description: "The minimum value of the slider.",
      default: "0",
    },
    {
      property: "max",
      type: "number (optional)",
      description: "The maximum value of the slider.",
      default: "100",
    },
    {
      property: "step",
      type: "number (optional)",
      description: "The step increment value of the slider.",
      default: "1",
    },
    {
      property: "onValueChange",
      type: "Function (optional)",
      description:
        "Callback function triggered when the slider's value changes.",
      default: "undefined",
    },
    {
      property: "disabled",
      type: "boolean (optional)",
      description: "If true, the slider will be disabled.",
      default: "false",
    },
    {
      property: "fluid",
      type: "boolean (optional)",
      description: "If true, the slider will fill the container.",
      default: "false",
    },
  ];

  //

  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Slider Component
          </Heading>
          <Paragraph size="large">
            The Slider component is a custom wrapper around the Radix UI slider,
            providing a unified interface for creating sliders. It supports
            customizable properties like default value, max value, and step
            increments. The component combines track, range, and thumb elements,
            and offers forward refs for direct interaction with underlying
            elements, ensuring flexibility and control.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Slider fluid defaultValue={[50]} max={100} step={1} />
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
<Flex direction="row" fluid gap={100}>
  <form style={{width: "100%"}}>
    <Slider fluid defaultValue={[50]} max={100} step={1} />
  </form>
</Flex>
      `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default SliderPage;
