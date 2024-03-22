import { Flex, Paragraph, Heading } from "../src/index";
import ReactLive from "./ReactLive";
import Section from "./Section";

const Colors = () => {
  return (
    <Flex direction={"column"} id="Button" customClass={"WebPageBody"}>
      <Section>
        <Heading level={2} weight="bold">
          Color Foundations
        </Heading>
        <Heading level={3} weight="bold">
          Global Colors
        </Heading>
        <Paragraph size="large">
          Global Colors are a key part of a design system because they help make
          sure that a brand looks the same across all its digital products. They
          are important for a few reasons:
        </Paragraph>
        <ReactLive scope={{ Flex }}>
          {`
<Flex wrap="wrap" gap={100} fluid align="center" justify="start">
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--brand-1)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--brand-2)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--black-100)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--black-200)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--black-300)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--black-400)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--gray-100)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--gray-200)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--gray-300)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--gray-400)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--yellow-100)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--yellow-200)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--yellow-500)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--yellow-600)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--yellow-700)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--red-100)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--red-200)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--red-500)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--red-600)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--red-700)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--green-100)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--green-200)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--green-500)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--green-600)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--green-700)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--blue-1)"}}/>
  <Flex style={{width: "15%", height: "56px", backgroundColor: "var(--blue-2)"}}/>
</Flex>
      `}
        </ReactLive>
      </Section>
      <Section>
        <Paragraph size="large" weight="bold">
          Consistency ⭐
        </Paragraph>
        <Paragraph size="large">
          Global Colors keep the look of your brand the same everywhere, which
          helps people recognize and remember your brand.
        </Paragraph>

        <Paragraph size="large" weight="bold">
          Efficiency in Development 🚀
        </Paragraph>
        <Paragraph size="large">
          Having a set of predefined colors makes it easier and faster for
          developers and designers to work. They don’t have to guess colors;
          they just use the set ones.
        </Paragraph>

        <Paragraph size="large" weight="bold">
          Easy Updates 🔁
        </Paragraph>
        <Paragraph size="large">
          If you need to change a color, you just update it in the global
          settings, and it changes everywhere. This makes your design system
          easy to manage.
        </Paragraph>
        <Paragraph size="large">
          In short, Global Colors help keep your brand consistent, make work
          easier for your team, and are simple to update.
        </Paragraph>
      </Section>
    </Flex>
  );
};

export default Colors;
