import React, { forwardRef } from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import "./radix-styles/Switch.scss";
import Flex from "./Flex";

const Switch = forwardRef(
  ({ id, checked, onCheckedChange, children, disabled, required }, ref) => {
    return children ? (
      <Flex customClass="CustomSwitch" gap={200} align="center">
        <SwitchPrimitive.Root
          className="SwitchRoot"
          id={id}
          checked={checked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          required={required}
          ref={ref}
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
          disabled={disabled}
          ref={ref}
          required={required}
        >
          <SwitchPrimitive.Thumb className="SwitchThumb" />
        </SwitchPrimitive.Root>
      </>
    );
  }
);

export default Switch;
