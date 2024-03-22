import React from "react";
import Section from "./Section";

import {
  Flex,
  Paragraph,
  Heading,
  Separator,
  Button,
  IconButton,
  Avatar,
  AvatarGroup,
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
const AvatarGroupPage = () => {
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
    AvatarGroup,
  };

  const codeString1 = `
  import { Avatar, AvatarGroup } from "blocksin-system";
  
  <AvatarGroup>
  <Avatar avatar="/path/to/image1.jpg" altText="John Doe" />
  <Avatar avatar="/path/to/image2.jpg" altText="Jane Doe" />
  <Avatar avatar="/path/to/image3.jpg" altText="Alice Smith" />
</AvatarGroup>
    `;
  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            AvatarGroup Component
          </Heading>
          <Paragraph size="large">
            AvatarGroup is a React component that provides a container for
            displaying a group of avatars. It uses the Flex component to align
            the avatars horizontally.
          </Paragraph>

          <Flex customClass="ComponentPreview">
            <AvatarGroup>
              <Avatar text="Stefan Bao" />
              <Avatar text="Stefan Bao" />
              <Avatar text="Stefan Bao" />
              <Avatar text="Stefan Bao" avatar={Beaver} />
              <Avatar text="Stefan Bao" avatar={Beaver} />
              <Avatar text="Stefan Bao" avatar={Beaver} />
            </AvatarGroup>
          </Flex>
          <Heading level={3} weight="bold">
            Usage
          </Heading>
          <CodeFormatter language="js" codeString={codeString1} />
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
  <AvatarGroup>
    <Avatar text="Stefan Bao" />
    <Avatar text="Stefan Bao" />
    <Avatar text="Stefan Bao"  />
    <Avatar text="Stefan Bao" avatar={Beaver} />
    <Avatar text="Stefan Bao" avatar={Beaver}/>
    <Avatar text="Stefan Bao" avatar={Beaver}  />
  </AvatarGroup>
</Flex>
      `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default AvatarGroupPage;
