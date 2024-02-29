import React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import "./radix-styles/Switch.scss";
import Flex from "./Flex";

const Switch = ({ id, checked, onCheckedChange, children }) => {
  return children ? (
    <Flex customClass="CustomSwitch" gap={200} align="center">
      <SwitchPrimitive.Root
        className="SwitchRoot"
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <SwitchPrimitive.Thumb className="SwitchThumb" />
      </SwitchPrimitive.Root>
      <label className="Label" htmlFor={id}>
        {children}
      </label>
    </Flex>
  ) : (
    <>
      <SwitchPrimitive.Root
        className="SwitchRoot"
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <SwitchPrimitive.Thumb className="SwitchThumb" />
      </SwitchPrimitive.Root>
    </>
  );
};

export default Switch;
