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
  Calendar,
  Input,
} from "../src/index";
import ReactLive from "./ReactLive";
import { Cross2Icon, SizeIcon, CopyIcon } from "@radix-ui/react-icons";
import { BellIcon } from "@radix-ui/react-icons";
import Beaver from "../assets/beaver.jpeg";

const CalendarPage = () => {
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
      name: "children",
      type: "ReactElement",
      description:
        "The custom input component that will be used as the trigger for the calendar.",
    },
    {
      name: "selectedDate",
      type: "Date | [Date, Date]",
      description: "The currently selected date or date range.",
    },
    {
      name: "onChange",
      type: "Function",
      description:
        "A function that will be called with the new date or date range when the selection changes.",
    },
    {
      name: "range",
      type: "Boolean",
      description:
        "If true, enables the selection of a date range. Defaults to false.",
    },
    {
      name: "...props",
      type: "Object",
      description:
        "Any additional props will be passed to the underlying react-datepicker component.",
    },
  ];
  const [selectedDate, setSelectedDate] = useState(new Date());
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
    Calendar,
    Input,
    selectedDate,
  };
  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Calendar Component
          </Heading>
          <Paragraph size="large">
            Calendar is a React component that provides a customizable date
            picker. It allows users to select a single date or a range of dates.
            The component is built on top of react-datepicker and can be
            integrated with custom input components.
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
            <Calendar
              selectedDate={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            >
              <Input placeholder="Select a date" readOnly />
            </Calendar>
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
  <Calendar
  selectedDate={selectedDate}
  onChange={(date) => setSelectedDate(date)}
  >
    <Input placeholder="Select a date" readOnly />
  </Calendar>
</Flex>
      `}
          </ReactLive>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Design Patterns
          </Heading>
          <Paragraph size="large">
            One common design pattern involving Calendar..
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

export default CalendarPage;
