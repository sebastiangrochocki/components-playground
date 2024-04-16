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
  DropdownMenu,
  Pill,
} from "../src/index";
import ReactLive from "./ReactLive";
import {
  Cross2Icon,
  SizeIcon,
  CopyIcon,
  BellIcon,
  TrashIcon,
  CheckIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";
import CodeFormatter from "./CodeFormatter";

const TablePage = () => {
  const codeString1 = `  
import Table from "./Table";

const columns = [
  { Header: "Name", accessor: "name" },
  { Header: "Age", accessor: "age" },
  { Header: "Country", accessor: "country" },
];

const data = [
  { name: "John Doe", age: 30, country: "USA" },
  { name: "Jane Doe", age: 25, country: "Canada" },
];

<Table
  columns={columns}
  data={data}
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
`;
  // eslint-disable-next-line
  const codeString2 = `  
const columns = [
  { Header: "Name", accessor: "name" },
  { Header: "Age", accessor: "age" },
  { Header: "Country", accessor: "country" },
];

const data = [
  { name: "John Doe", age: 30, country: "USA" },
  { name: "Jane Doe", age: 25, country: "Canada" },
];
`;
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
    {
      property: "cellAlign",
      type: "String (optional)",
      description: "Cell content vertical alignment.",
      default: "start",
    },
    {
      property: "large",
      type: "Boolean (optional)",
      description: "Cells have 16px of padding.",
      default: "false",
    },
  ];

  //
  const columns2 = [
    {
      Header: "Name",
      accessor: "name",
      Cell: (value, row) => (
        <UserItem
          altText={row.name}
          avatar={row.avatar}
          name={row.name}
          helper={row.email}
        />
      ),
    },
    { Header: "Age", accessor: "age" },
    { Header: "Country", accessor: "country" },
    {
      Header: "Status",
      accessor: "status",
      Cell: (value, row) => {
        let statusColor = "";
        switch (row.status) {
          case "approved":
            statusColor = "success";
            break;
          case "waiting":
            statusColor = "warning";
            break;
          case "blocked":
            statusColor = "error";
            break;
          default:
            statusColor = "neutral";
        }
        return <Pill status={statusColor}>{row.status}</Pill>;
      },
    },

    {
      Header: (
        <DropdownMenu>
          <DropdownMenu.Trigger>
            <IconButton size="small" variant="ghost">
              <DotsHorizontalIcon />
            </IconButton>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end" sideOffset={4}>
            <DropdownMenu.Item
              icon={CheckIcon}
              onClick={() => alert("Multi-selection action")}
            >
              Approve
            </DropdownMenu.Item>

            <DropdownMenu.Item icon={TrashIcon}>Delete</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      ),
      accessor: "actions",
      Cell: (value, row) => (
        <DropdownMenu>
          <DropdownMenu.Trigger>
            <IconButton size="small" variant="ghost">
              <DotsHorizontalIcon />
            </IconButton>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end" sideOffset={4}>
            <DropdownMenu.Item
              icon={CheckIcon}
              onClick={() => alert(`Editing ${row.name}`)}
            >
              Approve
            </DropdownMenu.Item>

            <DropdownMenu.Item icon={TrashIcon}>Delete</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      ),
      maxWidth: "40px",
    },
  ];

  const data2 = [
    {
      name: "Alice",
      age: 25,
      country: "USA",
      email: "john@example.com",
      avatar: Beaver,
      status: getRandomStatus(),
    },
    {
      name: "Bob",
      age: 30,
      country: "Canada",
      email: "john@example.com",
      avatar: Beaver,
      status: getRandomStatus(),
    },
    {
      name: "Charlie",
      age: 35,
      country: "UK",
      email: "john@example.com",
      avatar: Beaver,
      status: getRandomStatus(),
    },
    { name: "Diana", age: 28, country: "Germany", status: getRandomStatus() },
    { name: "Ethan", age: 22, country: "Australia", status: getRandomStatus() },
    { name: "Fiona", age: 27, country: "Spain", status: getRandomStatus() },
    { name: "George", age: 31, country: "France", status: getRandomStatus() },
    {
      name: "Hannah",
      age: 24,
      country: "Netherlands",
      status: getRandomStatus(),
    },
    { name: "Ian", age: 29, country: "Italy", status: getRandomStatus() },
    { name: "Julia", age: 32, country: "Portugal", status: getRandomStatus() },
    { name: "Kevin", age: 26, country: "Norway", status: getRandomStatus() },
    { name: "Lily", age: 34, country: "Sweden", status: getRandomStatus() },
    { name: "Michael", age: 29, country: "Denmark", status: getRandomStatus() },
    { name: "Nora", age: 23, country: "Ireland", status: getRandomStatus() },
    { name: "Oscar", age: 37, country: "Belgium", status: getRandomStatus() },
    {
      name: "Pamela",
      age: 33,
      country: "Switzerland",
      status: getRandomStatus(),
    },
    { name: "Quentin", age: 25, country: "Austria", status: getRandomStatus() },
    { name: "Rachel", age: 30, country: "Finland", status: getRandomStatus() },
    { name: "Steven", age: 36, country: "Greece", status: getRandomStatus() },
    {
      name: "Tina",
      age: 28,
      country: "Czech Republic",
      status: getRandomStatus(),
    },
  ];

  function getRandomStatus() {
    const statuses = ["approved", "waiting", "blocked"];
    return statuses[Math.floor(Math.random() * statuses.length)];
  }

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
            pageSize={19}
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
  large
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
            The Table design pattern is useful for displaying structured data,
            such as a user list for managing team members in software. It allows
            for easy access to actions like changing status, updating
            information, and exporting data to CSV, providing a clear and
            organized layout for managing data-intensive tasks.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Flex direction="column" gap={200} fluid>
              <Flex justify="between" align="center">
                <Heading level={4} weight="bold">
                  Users
                </Heading>
                <Button variant="outline">Export to CSV</Button>
              </Flex>
              <Table
                columns={columns2}
                data={data2}
                pageSize={4}
                maxPagination={2}
                fluid
                multiSelect
                cellAlign="center"
                large
              />
            </Flex>
          </Flex>
        </Section>
      </Flex>
    </>
  );
};

export default TablePage;
