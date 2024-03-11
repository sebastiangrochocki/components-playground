import React, { forwardRef } from "react";
import Flex from "./Flex";

const AvatarGroup = forwardRef(({ children }, ref) => {
  return (
    <>
      <Flex ref={ref} customClass="AvatarGroup">
        {children}
      </Flex>
    </>
  );
});

export default AvatarGroup;
