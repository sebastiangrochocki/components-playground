import * as TogglePrimitive from "@radix-ui/react-toggle";
import React from "react";
import "./radix-styles/SingleToggle.scss";

const Toggle = React.forwardRef(
  ({ children, onPressedChange, size = "medium", ...props }, ref) => (
    <TogglePrimitive.Root
      {...props}
      ref={ref}
      size={size}
      className={`Toggle Toggle-${size}`}
      onPressedChange={onPressedChange}
    >
      {children}
    </TogglePrimitive.Root>
  )
);

export default Toggle;
