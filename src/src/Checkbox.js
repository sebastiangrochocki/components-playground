import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "sebikostudio-icons";
import Flex from "./Flex";
import "./Checkbox.scss";

const Checkbox = ({ customID, children, checked, onChange, disabled }) => {
  return children ? (
    <Flex align="center" gap={100}>
      <CheckboxPrimitive.Root
        className="CheckboxRoot"
        id={customID}
        checked={checked}
        onCheckedChange={onChange}
        disabled={disabled}
      >
        <CheckboxPrimitive.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label className="Label" htmlFor={customID}>
        {children}
      </label>
    </Flex>
  ) : (
    <>
      <CheckboxPrimitive.Root
        className="CheckboxRoot"
        id={customID}
        checked={checked}
        onCheckedChange={onChange}
        disabled={disabled}
      >
        <CheckboxPrimitive.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </>
  );
};

export default Checkbox;
