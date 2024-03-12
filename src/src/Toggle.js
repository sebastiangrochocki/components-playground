import * as TogglePrimitive from "@radix-ui/react-toggle";
import React from "react";
import "./radix-styles/SingleToggle.scss";

const Toggle = React.forwardRef(
  ({ children, onPressedChange, ...props }, ref) => (
    <TogglePrimitive.Root
      {...props}
      ref={ref}
      className="Toggle"
      onPressedChange={onPressedChange}
    >
      {children}
    </TogglePrimitive.Root>
  )
);

export default Toggle;
