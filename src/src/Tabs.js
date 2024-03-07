import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import "./radix-styles/Tabs.scss";

const Tabs = ({ children, defaultValue, fluid, ...props }) => {
  return (
    <TabsPrimitive.Root
      className={`TabsRoot ${fluid ? "fluid" : ""}`}
      defaultValue={defaultValue}
      {...props}
    >
      {children}
    </TabsPrimitive.Root>
  );
};

Tabs.List = ({ children, ...props }) => {
  return (
    <TabsPrimitive.List className="TabsList" {...props}>
      {children}
    </TabsPrimitive.List>
  );
};

Tabs.Trigger = React.forwardRef(({ children, value, ...props }, ref) => {
  return (
    <TabsPrimitive.Trigger
      className="TabsTrigger"
      value={value}
      ref={ref}
      {...props}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
});

Tabs.Content = React.forwardRef(({ children, value, ...props }, ref) => {
  return (
    <TabsPrimitive.Content
      className="TabsContent"
      value={value}
      ref={ref}
      {...props}
    >
      {children}
    </TabsPrimitive.Content>
  );
});

export default Tabs;
