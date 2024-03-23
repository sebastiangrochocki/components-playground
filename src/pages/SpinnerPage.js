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
  Spinner,
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

const SpinnerPage = () => {
  const codeString1 = `  
import { Spinner } from "blocksin-system";

<Spinner />
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
    Spinner,
  };

  //
  return (
    <>
      <Flex direction={"column"} id="IconButton" customClass={"WebPageBody"}>
        <Section>
          <Heading level={2} weight="bold">
            Spinner Component
          </Heading>
          <Paragraph size="large">
            The Spinner component is a React component designed to display an
            animated spinner, typically used as a loading indicator. It uses
            lottie-react to render a Lottie animation, providing a visually
            appealing and smooth animation for indicating loading or processing
            states in your application.
          </Paragraph>
          <Flex customClass="ComponentPreview">
            <Spinner />
          </Flex>
          <Heading level={3} weight="bold">
            Usage
          </Heading>
          <CodeFormatter language="" codeString={codeString1} />
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
  <Spinner />
</Flex>
      `}
          </ReactLive>
        </Section>

        <Section>
          <Heading level={3} weight="bold">
            Design Patterns
          </Heading>
          <Paragraph size="large">
            A spinner component can be used inside a button to indicate a
            loading state when the button is disabled, providing visual feedback
            to users during asynchronous operations.
          </Paragraph>
          <ReactLive scope={scope}>
            {`
<Flex direction="row" gap={100} fluid>
  <Button fluid isLoading>Button</Button>
</Flex>
            `}
          </ReactLive>
        </Section>
      </Flex>
    </>
  );
};

export default SpinnerPage;
