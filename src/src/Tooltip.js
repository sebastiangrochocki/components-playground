import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import React from "react";
import "./radix-styles/Tooltip.scss";

const Tooltip = ({ children, delayDuration = 300, ...props }) => (
  <TooltipPrimitive.Provider delayDuration={delayDuration}>
    <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
);

Tooltip.Trigger = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <TooltipPrimitive.Trigger asChild {...props} ref={forwardedRef}>
    {children}
  </TooltipPrimitive.Trigger>
));

Tooltip.Content = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      className="TooltipContent"
      sideOffset={2}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <TooltipPrimitive.Arrow className="TooltipArrow" />
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
));

export default Tooltip;
