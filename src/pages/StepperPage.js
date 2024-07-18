import React, { useState } from "react";
import Section from "./Section";

import {
  Flex,
  Paragraph,
  Heading,
  Separator,
  Button,
  IconButton,
  Stepper,
  Avatar,
  CodeHighlight,
  Table,
  Tabs,
  Iframe,
} from "../src/index";
import ReactLive from "./ReactLive";
import {
  Cross2Icon,
  SizeIcon,
  CopyIcon,
  BellIcon,
  FilePlusIcon,
  UploadIcon,
  RepeatIcon,
  HomeIcon,
} from "sebikostudio-icons";
import Beaver from "../assets/avatar.png";
import CodeFormatter from "./CodeFormatter";

const StepperPage = () => {
  const [currentStep, setCurrentStep] = useState(4);

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  const scope = {
    currentStep,
    handleStepClick,
    Separator,
    Avatar,
    Beaver,
    Button,
    Cross2Icon,
    SizeIcon,
    CopyIcon,
    BellIcon,
    FilePlusIcon,
    UploadIcon,
    RepeatIcon,
    HomeIcon,
    IconButton,
    Flex,
    Heading,
    Paragraph,
    Stepper,
  };

  const codeString1 = `
import { Stepper } from "blocksin-system";

const [currentStep, setCurrentStep] = useState(4);

const handleStepClick = (step) => {
  setCurrentStep(step);
};

<Stepper
  steps={5}
  currentStep={currentStep}
  orientation="horizontal"
  icons={[CopyIcon, FilePlusIcon, UploadIcon, RepeatIcon, HomeIcon]}
  dynamic={true}
  onStepClick={handleStepClick}
/>
    `;
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
      property: "steps",
      type: "Number (required)",
      description: "The total number of steps in the stepper.",
      default: "-",
    },
    {
      property: "currentStep",
      type: "Number (required)",
      description: "The current active step in the stepper.",
      default: "-",
    },
    {
      property: "orientation",
      type: "String (optional)",
      description:
        "The orientation of the stepper, either 'horizontal' or 'vertical'.",
      default: "'horizontal'",
    },
    {
      property: "icons",
      type: "Array of Components (optional)",
      description:
        "An array of custom icon components to display in each step.",
      default: "[]",
    },
    {
      property: "dynamic",
      type: "Boolean (optional)",
      description:
        "If true, allows steps to be clickable and navigable via keyboard.",
      default: "false",
    },
    {
      property: "onStepClick",
      type: "Function (optional)",
      description:
        "Callback function triggered when a step is clicked, receiving the step number as an argument.",
      default: "() => {}",
    },
  ];

  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Stepper Component
          </Heading>
          <Paragraph size="large">
            The Stepper component is a versatile UI element designed to guide
            users through a series of steps or stages in a process. It can be
            used for multi-step forms, onboarding processes, or any sequential
            workflow where progress needs to be tracked visually.
            <br />
            <br />
            With support for both horizontal and vertical orientations, dynamic
            step interactions, and customizable icons, the Stepper component
            provides a flexible and intuitive way to enhance user experience in
            applications.
          </Paragraph>

          <Flex customClass="ComponentPreview">
            <Stepper
              steps={5}
              currentStep={currentStep}
              orientation="horizontal"
              icons={[CopyIcon, FilePlusIcon, UploadIcon, RepeatIcon, HomeIcon]}
              dynamic={true}
              onStepClick={handleStepClick}
            />
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
            When using variants with only icons in the Stepper component, it's
            crucial to ensure that your steps are accessible to all users,
            including those using screen readers. Here are some best practices
            to follow:
            <br />
            <br />
            <b>Accessible Headings:</b> Ensure each step has a descriptive and
            accessible heading. This helps users understand the purpose and
            content of each step, even if they can't see the icons.
            <br />
            <br />
            <b>ARIA Labels:</b> Use ARIA labels to provide additional context
            for each step. For example, you can use the aria-label attribute to
            describe the step when only an icon is present.
            <br />
            <br />
            By following these guidelines, you can create an accessible and
            user-friendly Stepper component, even when using icon-only variants.
            This ensures that all users, regardless of their abilities, can
            effectively navigate and interact with your application's
            step-by-step processes.
          </Paragraph>

          <Tabs defaultValue="tab1">
            <Tabs.List aria-label="Manage your account">
              <Tabs.Trigger value="tab1">For developers</Tabs.Trigger>
              <Tabs.Trigger value="tab2">For designers</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1">
              <Flex customClass="ComponentPreview">
                <Stepper
                  steps={5}
                  currentStep={currentStep}
                  orientation="horizontal"
                  onStepClick={handleStepClick}
                />
              </Flex>
            </Tabs.Content>
            <Tabs.Content value="tab2">
              <Iframe
                style={{ minHeight: "400px" }}
                url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F1frKKZIlbKr0SfJGEcrDku%2FBlocksIn-App-System%3Fnode-id%3D5625-2431%26t%3DlsVZQV5aAdh8jf6i-1"
              />
            </Tabs.Content>
          </Tabs>
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
  <Stepper
    steps={5}
    currentStep={currentStep}
    orientation="horizontal"
    icons={[CopyIcon, FilePlusIcon, UploadIcon, RepeatIcon, HomeIcon]}
    dynamic={true}
    onStepClick={handleStepClick}
  />
</Flex>
      `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default StepperPage;
