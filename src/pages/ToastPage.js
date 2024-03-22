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
  Toast,
} from "../src/index";
import ReactLive from "./ReactLive";
import { Cross2Icon, SizeIcon, CopyIcon } from "@radix-ui/react-icons";
import { BellIcon } from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";

const ToastPage = () => {
  // eslint-disable-next-line
  const [showToastState, setShowToastState] = useState(false);
  const [showToast2State, setShowToast2State] = useState(false);

  const [showSimpleToastState, setShowSimpleToastState] = useState(false);
  const [showSimpleToast2State, setShowSimpleToast2State] = useState(false);

  //
  //
  //
  function handleShowToast() {
    setShowToastState(true);
  }
  function handleShowToast2() {
    setShowToast2State(true);
  }
  //
  function handleShowSimpleToast() {
    setShowSimpleToastState(true);
  }
  function handleShowSimpleToast2() {
    setShowSimpleToast2State(true);
  }

  const scope = {
    setShowToast2State,
    setShowSimpleToast2State,
    showToast2State,
    showSimpleToast2State,
    handleShowToast2,
    handleShowSimpleToast2,
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
    Toast,
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
  ];

  const data = [
    {
      property: "showToast",
      type: "Boolean",
      description:
        "Controls the visibility of the toast. When true, the toast is shown.",
    },
    {
      property: "setShowToast",
      type: "Function",
      description: "A callback function to update the showToast state.",
    },
    {
      property: "headline",
      type: "String",
      description: "The headline or title text of the toast.",
    },
    {
      property: "text",
      type: "String",
      description: "The main content text of the toast.",
    },
    {
      property: "time",
      type: "Number",
      description:
        "The duration (in milliseconds) for which the toast is displayed.",
    },
    {
      property: "showAgain",
      type: "Boolean",
      description: "When true, displays a 'Don't Show Again' button.",
    },
    {
      property: "onDismissForever",
      type: "Function",
      description:
        "A callback function triggered when the 'Don't Show Again' button is clicked.",
    },
    {
      property: "simple",
      type: "Boolean",
      description:
        "If true, displays the toast in a simple style without a headline.",
    },
  ];

  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Toast Component
          </Heading>
          <Paragraph size="large">
            Toast is a React component built using @radix-ui/react-toast that
            provides a customizable toast notification with an optional progress
            bar and a 'Don't Show Again' button. It can be used to display brief
            messages or alerts to users, with a smooth fade-out effect
            controlled by a timer.
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
            <Button onClick={handleShowToast} variant="ghost" size="large">
              Show Toast
            </Button>
            <Toast
              showToast={showToastState}
              setShowToast={setShowToastState}
              headline="Success!"
              text="Your action was successful."
              time={3000}
              showAgain={true}
            />
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
            Variants
          </Heading>
          <Flex customClass="ComponentPreview">
            <Button
              onClick={handleShowSimpleToast}
              variant="ghost"
              size="large"
            >
              Show Simple Toast
            </Button>
            <Toast
              showToast={showSimpleToastState}
              setShowToast={setShowSimpleToastState}
              headline="Success!"
              text="Your action was successful."
              time={3000}
              simple
            />
          </Flex>
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
  <Button onClick={handleShowToast2} variant="ghost" size="large">
    Show Toast
  </Button>
  <Toast
  showToast={showToast2State}
  setShowToast={setShowToast2State}
  headline="Success!"
  text="Your action was successful."
  time={3000}
  showAgain={true}
  />
</Flex>
      `}
          </ReactLive>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Design Patterns
          </Heading>
          <Paragraph size="large">
            One common design pattern involving codehighlight
          </Paragraph>
          <ReactLive scope={scope}>
            {`
<Flex direction={"row"} align={"center"} gap={200}>

</Flex>
            `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default ToastPage;
