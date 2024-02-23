import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import Flex from "./Flex";
import "./CheckboxCustom.scss";

const CheckboxCustom = ({
  customID,
  children,
  checked,
  onChange,
  disabled,
}) => (
  <Flex align={"center"} gap={100}>
    <Checkbox.Root
      className="CheckboxRoot"
      // defaultChecked
      id={customID}
      checked={checked}
      onCheckedChange={onChange}
      disabled={disabled}
    >
      <Checkbox.Indicator className="CheckboxIndicator">
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Root>
    <label className="Label" htmlFor={customID}>
      {children}
    </label>
  </Flex>
);

export default CheckboxCustom;
