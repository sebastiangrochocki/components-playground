import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import React from "react";
import "./radix-styles/Toggle.scss";

const ToggleGroup = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <ToggleGroupPrimitive.Root
    className="ToggleGroup"
    {...props}
    ref={forwardedRef}
  >
    {children}
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.Item = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <ToggleGroupPrimitive.Item
    className="ToggleGroupItem"
    {...props}
    ref={forwardedRef}
  >
    {children}
  </ToggleGroupPrimitive.Item>
));

export default ToggleGroup;
