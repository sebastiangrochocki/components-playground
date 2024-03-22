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
} from "../src/index";
import ReactLive from "./ReactLive";
import { Cross2Icon, SizeIcon, CopyIcon } from "@radix-ui/react-icons";
import { BellIcon } from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";

const CheckboxPage = () => {
  // eslint-disable-next-line
  const [checkbox, setCheckbox] = useState(false);

  const handleCheckboxChange = () => {
    setCheckbox(!checkbox);
  };

  const scope = {
    handleCheckboxChange,
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
  };

  //
  const columns = [
    {
      Header: "Property",
      accessor: "name",
      Cell: (value) => <CodeHighlight text={value} />,
    },
    { Header: "Type", accessor: "type" },
    { Header: "Description", accessor: "description" },
  ];

  const data = [
    {
      name: "customID",
      type: "String",
      description:
        "A unique identifier for the checkbox. It is used to associate the checkbox with its label.",
    },
    {
      name: "children",
      type: "Node",
      description:
        "The content to be displayed alongside the checkbox. Typically used for the label text.",
    },
    {
      name: "checked",
      type: "Boolean",
      description:
        "Determines whether the checkbox is checked. Default is false.",
    },
    {
      name: "onChange",
      type: "Function",
      description:
        "Callback function that is called when the checkbox's checked state changes.",
    },
    {
      name: "disabled",
      type: "Boolean",
      description: "Disables the checkbox when set to true. Default is false.",
    },
  ];

  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Checkbox Component
          </Heading>
          <Paragraph size="large">
            Checkbox is a React component that provides a customized checkbox
            experience. Built using @radix-ui/react-checkbox, this component
            offers a flexible and accessible way to integrate checkbox
            functionality into your application, with support for custom styling
            and additional content.
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
            <Checkbox customID="notifications" onChange={handleCheckboxChange}>
              Notifications {checkbox ? "on" : "off"}
            </Checkbox>
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
  <Checkbox customID="agreeTerms">
    I agree to the terms and conditions
  </Checkbox>
</Flex>
      `}
          </ReactLive>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Design Patterns
          </Heading>
          <Paragraph size="large">
            One common design pattern involving checkbox
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

export default CheckboxPage;
