import React from "react";
import { Flex } from "../src/index";

const Section = ({ children }) => {
  return (
    <Flex direction="column" customClass={"Section"}>
      {children}
    </Flex>
  );
};
export default Section;
