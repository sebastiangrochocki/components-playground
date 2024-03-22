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
  UserItem,
} from "../src/index";
import ReactLive from "./ReactLive";
import { Cross2Icon, SizeIcon, CopyIcon } from "@radix-ui/react-icons";
import { BellIcon } from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";

const TablePage = () => {
  const columnsDemo = [
    { Header: "Name", accessor: "name" },
    { Header: "Age", accessor: "age" },
    { Header: "Country", accessor: "country" },
  ];

  const dataDemo = [
    { name: "John Doe", age: 30, country: "USA" },
    { name: "Amy Doe", age: 25, country: "Canada" },
  ];

  const scope = {
    columnsDemo,
    dataDemo,
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
    Table,
    UserItem,
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
      property: "Header",
      type: "String or JSX",
      description: "The header of the column.",
      default: "-",
    },
    {
      property: "accessor",
      type: "String",
      description: "The key of the data to be accessed for this column.",
      default: "-",
    },
    {
      property: "Cell",
      type: "Function (optional)",
      description:
        "Custom renderer for the cell. It receives the cell value and the row data as arguments.",
      default: "-",
    },
    {
      property: "maxWidth",
      type: "String (optional)",
      description: "The maximum width of the column.",
      default: "-",
    },
    {
      property: "data",
      type: "Array of objects",
      description: "The data to be displayed in the table.",
      default: "-",
    },
    {
      property: "pageSize",
      type: "Number",
      description: "The number of rows to display per page.",
      default: "-",
    },
    {
      property: "onRowClick",
      type: "Function (optional)",
      description:
        "Callback function to be called when a row is clicked. It receives the row data as an argument.",
      default: "-",
    },
    {
      property: "multiSelect",
      type: "Boolean (optional)",
      description: "If true, enables multiple row selection with checkboxes.",
      default: "-",
    },
    {
      property: "onMultiSelect",
      type: "Function (optional)",
      description:
        "Callback function to be called when rows are selected or deselected. It receives an array of selected row data as an argument.",
      default: "-",
    },
    {
      property: "maxPagination",
      type: "Number (optional)",
      description: "The maximum number of pagination buttons to display.",
      default: "-",
    },
    {
      property: "fluid",
      type: "Boolean (optional)",
      description:
        "If true, the table will take the full width of its container.",
      default: "-",
    },
    {
      property: "search",
      type: "Boolean (optional)",
      description: "If true, enables a filter input to search the table.",
      default: "-",
    },
    {
      property: "fullBorder",
      type: "Boolean (optional)",
      description: "If true, adds borders to all sides of the table cells.",
      default: "-",
    },
    {
      property: "sorting",
      type: "Boolean (optional)",
      description:
        "If true, enables sorting functionality on the table columns.",
      default: "-",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Table Component
          </Heading>
          <Paragraph size="large">
            Table is a React component designed for displaying tabular data. It
            supports features such as pagination, sorting, filtering, and row
            selection.
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
            <Table
              columns={columnsDemo}
              data={dataDemo}
              pageSize={5}
              onRowClick={(row) => console.log(row)}
              multiSelect={true}
              onMultiSelect={(selectedRows) => console.log(selectedRows)}
              maxPagination={5}
              fluid={true}
              search={true}
              fullBorder={true}
              sorting={true}
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

          <ReactLive scope={scope} vertical>
            {`
<Flex direction="row" gap={100} style={{width: "100%", maxWidth: "600px"}}>
  <Table
  columns={columnsDemo}
  data={dataDemo}
  pageSize={5}
  onRowClick={(row) => console.log(row)}
  multiSelect={true}
  onMultiSelect={(selectedRows) => console.log(selectedRows)}
  maxPagination={5}
  fluid={true}
  search={true}
  fullBorder={true}
  sorting={true}
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
            One common design pattern involving avatars is to use them in user
            profiles, where they represent the user's identity visually. Another
            example is in messaging applications, where avatars can be used to
            display the profile pictures of the sender or recipient next to the
            message.
          </Paragraph>
          <ReactLive scope={scope}>
            {`
<Flex direction={"row"} align={"center"} gap={200}>
  <Table
  columns={columnsDemo}
  data={dataDemo}
  pageSize={5}
  onRowClick={(row) => console.log(row)}
  multiSelect={true}
  onMultiSelect={(selectedRows) => console.log(selectedRows)}
  maxPagination={5}
  fluid={true}
  search={true}
  fullBorder={true}
  sorting={true}
  />
</Flex>
            `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default TablePage;
