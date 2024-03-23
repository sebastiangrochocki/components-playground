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

const ComboBoxPage = () => {
  const options2 = [
    { label: "John Doe", value: "1", avatar: "path/to/avatar1.jpg" },
    { label: "Jane Doe", value: "2", avatar: "path/to/avatar2.jpg" },
    { label: "Bob Smith", value: "3", avatar: "path/to/avatar3.jpg" },
  ];

  const [selectedOptions2, setSelectedOptions2] = useState([]);

  const handleChange2 = (options2) => {
    setSelectedOptions2(options2);
  };

  const scope = {
    handleChange2,
    options2,
    selectedOptions2,
    setSelectedOptions2,
    Separator,
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
      name: "options",
      type: "Array",
      description:
        "An array of option objects that can be selected. Each option object should have a label, value, and optionally an avatar property.",
    },
    {
      name: "value",
      type: "Array",
      description: "An array of selected option objects.",
    },
    {
      name: "onChange",
      type: "Function",
      description:
        "A callback function that is called when the selected options change. It receives the updated array of selected options as an argument.",
    },
    {
      name: "placeholder",
      type: "String",
      description:
        "A placeholder text to display when no options are selected.",
    },
    {
      name: "isMulti",
      type: "Boolean",
      description:
        "A boolean indicating whether multiple options can be selected. Defaults to true.",
    },
    {
      name: "fluid",
      type: "Boolean",
      description:
        "A boolean indicating whether the component should expand to fill its container's width.",
    },
  ];

  //
  const options = [
    { label: "John Doe", value: "1", avatar: "path/to/avatar1.jpg" },
    { label: "Jane Doe", value: "2", avatar: "path/to/avatar2.jpg" },
    { label: "Bob Smith", value: "3", avatar: "path/to/avatar3.jpg" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (options) => {
    setSelectedOptions(options);
  };

  const codeString1 = `  
import { ComboBox } from "blocksin-system";

const options = [
  { label: "John Doe", value: "1", avatar: "path/to/avatar1.jpg" },
  { label: "Jane Doe", value: "2", avatar: "path/to/avatar2.jpg" },
  { label: "Bob Smith", value: "3", avatar: "path/to/avatar3.jpg" },
];

const App = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (options) => {
    setSelectedOptions(options);
  };

  return (
    <ComboBox
      options={options}
      value={selectedOptions}
      onChange={handleChange}
      placeholder="Select owners..."
      isMulti={false}
      fluid
    />
  );
};

export default App;  
    `;

  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            ComboBox Component
          </Heading>
          <Paragraph size="large">
            The ComboBox component is a multi-select dropdown component that
            allows users to select multiple options from a list. It supports
            custom rendering of options, including displaying avatars and other
            custom elements.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <ComboBox
              options={options}
              value={selectedOptions}
              onChange={handleChange}
              placeholder="Select owners..."
              isMulti={true}
              fluid
            />
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
  <ComboBox
  options={options2}
  value={selectedOptions2}
  onChange={handleChange2}
  placeholder="Select owners..."
  isMulti={false}
  fluid
  />
</Flex>
      `}
          </ReactLive>
        </Section>

        {/* <Section>
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
        </Section> */}
      </Flex>
    </>
  );
};

export default ComboBoxPage;
