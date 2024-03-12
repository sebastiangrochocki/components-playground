import React, { forwardRef } from "react";
import "./radix-styles/ScrollArea.scss";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

const ScrollArea = forwardRef(({ children, style, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    {...props}
    className="ScrollAreaRoot"
    style={style}
  >
    <ScrollAreaPrimitive.Viewport className="ScrollAreaViewport">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollAreaPrimitive.Scrollbar
      orientation="vertical"
      className="ScrollAreaScrollbar"
    >
      <ScrollAreaPrimitive.Thumb className="ScrollAreaThumb" />
    </ScrollAreaPrimitive.Scrollbar>
    <ScrollAreaPrimitive.Scrollbar
      orientation="horizontal"
      className="ScrollAreaScrollbar"
    >
      <ScrollAreaPrimitive.Thumb className="ScrollAreaThumb" />
    </ScrollAreaPrimitive.Scrollbar>
    <ScrollAreaPrimitive.Corner className="ScrollAreaCorner" />
  </ScrollAreaPrimitive.Root>
));

export default ScrollArea;
