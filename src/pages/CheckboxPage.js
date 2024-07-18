import React, { useState } from "react";
import Section from "./Section";
import CodeFormatter from "./CodeFormatter";

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
import {
  Cross2Icon,
  SizeIcon,
  CopyIcon,
  BellIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  FigmaLogoFilledIcon,
} from "sebikostudio-icons";
import Beaver from "../assets/avatar.png";

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
    FigmaLogoFilledIcon,
    GitHubLogoIcon,
    TwitterLogoIcon,
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
  const codeString1 = `  
import { Checkbox } from "blocksin-system";

<Checkbox customID="agreeTerms" onChange={handleCheckboxChange}>
  I agree to the terms and conditions
</Checkbox>
    `;
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
          <Flex customClass="ComponentPreview">
            <Flex gap={300}>
              <Checkbox
                customID="notifications"
                onChange={handleCheckboxChange}
              >
                Notifications {checkbox ? "on" : "off"}
              </Checkbox>
              <Checkbox customID="unsubscribe" disabled checked>
                Unsubscribe
              </Checkbox>
              <Checkbox customID="unsubscribe" checked>
                Newsletter
              </Checkbox>
            </Flex>
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
            Design patterns with checkboxes should be used when multiple
            selections are allowed, such as selecting multiple items from a list
            or enabling multiple options simultaneously. However, checkboxes
            should not be used for binary choices or actions that can be
            accomplished with a single toggle, as this can lead to confusion for
            users and hinder accessibility. The UI experience should be
            optimized for accessibility by ensuring that checkboxes are clearly
            labeled and can be easily selected using keyboard navigation or
            screen readers.
          </Paragraph>
          <ReactLive scope={scope}>
            {`
<Flex direction={"column"} align={"start"}>
  <Flex direction={"row"} align={"center"} gap={100}>
    <Flex justify="center" align="center" style={{width: "48px", height: "48px"}}>
      <TwitterLogoIcon style={{width: "20px", height: "20px"}}/>
    </Flex>
    <Flex justify="center" align="center" style={{width: "48px", height: "48px"}}>
      <GitHubLogoIcon style={{width: "20px", height: "20px"}}/>
    </Flex>
    <Flex justify="center" align="center" style={{width: "48px", height: "48px"}}>
      <FigmaLogoFilledIcon style={{width: "20px", height: "20px"}}/>
    </Flex>
  </Flex>
  <Flex direction={"row"} align={"center"} gap={100}>
    <Flex justify="center" align="center" style={{width: "48px", height: "48px"}}>
      <Checkbox customID="item1"/>
    </Flex>
    <Flex justify="center" align="center" style={{width: "48px", height: "48px"}}>
      <Checkbox customID="item2"/>
    </Flex>
    <Flex justify="center" align="center" style={{width: "48px", height: "48px"}}>
      <Checkbox customID="item3"/>
    </Flex>
    <Paragraph size="large">Notifications</Paragraph>
  </Flex>
  <Flex direction={"row"} align={"center"} gap={100}>
    <Flex justify="center" align="center" style={{width: "48px", height: "48px"}}>
      <Checkbox customID="item1"/>
    </Flex>
    <Flex justify="center" align="center" style={{width: "48px", height: "48px"}}>
      <Checkbox customID="item2"/>
    </Flex>
    <Flex justify="center" align="center" style={{width: "48px", height: "48px"}}>
      <Checkbox customID="item3"/>
    </Flex>
    <Paragraph size="large">Something else</Paragraph>
  </Flex>
</Flex>
            `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default CheckboxPage;
