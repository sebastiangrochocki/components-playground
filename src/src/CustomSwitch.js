import React from "react";
import * as Switch from "@radix-ui/react-switch";
// import "./CustomSwitch.scss";
import "./radix-styles/Switch.scss";
import Flex from "./Flex";

const CustomSwitch = ({ id, checked, onCheckedChange, children }) => {
  return children ? (
    <Flex customClass="CustomSwitch" gap={200} align="center">
      <Switch.Root
        className="SwitchRoot"
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
      <label className="Label" htmlFor={id}>
        {children}
      </label>
    </Flex>
  ) : (
    <>
      <Switch.Root
        className="SwitchRoot"
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
    </>
  );
};

export default CustomSwitch;
