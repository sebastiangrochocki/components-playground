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
import { Cross2Icon, SizeIcon, CopyIcon } from "@radix-ui/react-icons";
import { BellIcon } from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";

const CodeHighlightPage = () => {
  const codeString1 = `  
import { CodeHighlight } from "blocksin-system";

<CodeHighlight text="npm install" />
    `;
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
    CodeHighlight,
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
      name: "text",
      type: "String",
      description: "The code text to be displayed within the component.",
    },
  ];

  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            CodeHighlight Component
          </Heading>
          <Paragraph size="large">
            CodeHighlight is a simple React component designed to display blocks
            of code with basic styling. It is suitable for rendering code
            snippets or configurations in a clear and readable format.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <CodeHighlight text={`npm install blocksin-system`} />
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
  <CodeHighlight text={"npm install"} />
</Flex>
      `}
          </ReactLive>
        </Section>

        {/* <Section>
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
        </Section> */}
      </Flex>
    </>
  );
};

export default CodeHighlightPage;
