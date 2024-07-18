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
  Youtube,
} from "../src/index";
import ReactLive from "./ReactLive";
import { Cross2Icon, SizeIcon, CopyIcon, BellIcon } from "sebikostudio-icons";
import Beaver from "../assets/avatar.png";
import CodeFormatter from "./CodeFormatter";

const YoutubePage = () => {
  const codeString1 = `  
import { Youtube } from "blocksin-system";

<Youtube videoId="dQw4w9WgXcQ" />
      `;
  const scope = {
    Youtube,
    UserItem,
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
  };

  const columns = [
    {
      Header: "Property",
      accessor: "Property",
      Cell: (value) => <CodeHighlight text={value} />,
    },
    { Header: "Type", accessor: "Type" },
    { Header: "Description", accessor: "Description" },
  ];

  const data = [
    {
      Property: "videoId",
      Type: "String",
      Description:
        "The unique identifier (ID) of the YouTube video to be embedded.",
    },
  ];

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Youtube Component
          </Heading>
          <Paragraph size="large">
            The Youtube component is a React component for embedding YouTube
            videos in your application. It allows for seamless integration of
            YouTube content by simply providing the video ID.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Flex direction="column" gap={100} style={{ width: "60%" }}>
              <Youtube videoId="dQw4w9WgXcQ" />
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
<Flex direction="column" gap={100} style={{width: "60%"}}>
  <Youtube videoId="dQw4w9WgXcQ" />
</Flex>
      `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default YoutubePage;
