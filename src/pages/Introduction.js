import { Flex, Paragraph, Heading } from "../src/index";
import Section from "./Section";

const Introduction = () => {
  return (
    <Flex direction={"column"} id="Button" customClass={"WebPageBody"}>
      <Section>
        <Heading level={2} weight="bold">
          Welcome to BlocksIn System!
        </Heading>
        <Paragraph size="large">
          Welcome to BlocksIn System, a custom React component library designed
          to extend the functionalities of the Radix component library. This
          library offers a range of components, from basic UI elements to
          complex functionalities, tailored for developers looking to streamline
          their React application development.
        </Paragraph>
        <Paragraph size="large">
          To ensure optimal appearance and functionality, BlocksIn System uses
          'Open Sans' for body text and 'Darker Grotesque' for accent fonts. Add
          these fonts to your application by declaring the following variables
          in your main app.css file:
        </Paragraph>
      </Section>

      <Section>
        <Heading level={3} weight="bold">
          Why Design Systems Matter
        </Heading>
        <Paragraph size="large">
          Design System documentation acts as a bridge between design and
          development. Over my decade-long career as a product designer, I've
          grappled with connecting non-technical individuals, striving to
          streamline component usage to reduce time-to-market costs. In my
          previous role, I collaborated with 55+ product designers, encompassing
          accessibility, localization, and content guidelines. This experience
          illuminated how Design Systems can tackle issues like diminishing
          technical debt and mitigating costs tied to design and accessibility
          audits.
        </Paragraph>
        <Paragraph size="large">
          This is the essence of why documentation is pivotal—it fosters
          connectivity among people and encourages the widespread adoption of
          Design Systems.
        </Paragraph>
      </Section>
    </Flex>
  );
};

export default Introduction;
