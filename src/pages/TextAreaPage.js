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
  TextArea,
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

const TextAreaPage = () => {
  const codeString1 = `  
import { TextArea } from "blocksin-system";

<TextArea
  label="Message"
  placeholder="Type your message here"
  value={message}
  onChange={handleMessageChange}
/>
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
    TextArea,
  };

  //
  const columns = [
    {
      Header: "Property",
      accessor: "Property",
      Cell: (value) => <CodeHighlight text={value} />,
    },
    { Header: "Type", accessor: "Type" },
    { Header: "Optional", accessor: "Optional" },
    { Header: "Description", accessor: "Description" },
  ];

  const data = [
    {
      Property: "label",
      Type: "String",
      Optional: "(optional)",
      Description:
        "The label text displayed above the textarea. Default is 'Your Label'.",
    },
    {
      Property: "placeholder",
      Type: "String",
      Optional: "(optional)",
      Description:
        "The placeholder text displayed inside the textarea when it's empty. Default is 'Enter your text'.",
    },
    {
      Property: "value",
      Type: "String",
      Optional: "(required)",
      Description: "The current value of the textarea.",
    },
    {
      Property: "onChange",
      Type: "Function",
      Optional: "(required)",
      Description:
        "Callback function that is called when the value of the textarea changes.",
    },
    {
      Property: "className",
      Type: "String",
      Optional: "(optional)",
      Description: "Additional custom CSS class names to be applied.",
    },
    {
      Property: "disabled",
      Type: "Boolean",
      Optional: "(optional)",
      Description: "Disables the textarea when set to true.",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            TextArea Component
          </Heading>
          <Paragraph size="large">
            The TextArea component is a React component that renders a
            multi-line text input field, commonly used for collecting longer
            text entries like comments, messages, or descriptions. It includes
            customizable properties for labels, placeholders, and more.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <TextArea
              label="Message"
              placeholder="Type your message here"
              // value={message}
              // onChange={handleMessageChange}
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
  <TextArea
  label="Message"
  placeholder="Type your message here"
  // value={message}
  // onChange={handleMessageChange}
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
<Flex direction="row" gap={100}>
  <TextArea
  label="Message"
  placeholder="Type your message here"
  // value={message}
  // onChange={handleMessageChange}
  />
</Flex>
            `}
          </ReactLive>
        </Section> */}
      </Flex>
    </>
  );
};

export default TextAreaPage;
