import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "sebikostudio-icons";
import React from "react";
import "./radix-styles/Select.scss";

const Select = SelectPrimitive.Root;

Select.Trigger = React.forwardRef(
  ({ children, icon: Icon = ChevronDownIcon, ...props }, forwardedRef) => (
    <SelectPrimitive.Trigger
      className="SelectTrigger"
      {...props}
      ref={forwardedRef}
    >
      {children}
      <Select.Icon className="SelectIcon">
        <Icon />
      </Select.Icon>
    </SelectPrimitive.Trigger>
  )
);
Select.Value = SelectPrimitive.Value;
Select.Icon = SelectPrimitive.Icon;
Select.Portal = SelectPrimitive.Portal;
Select.Content = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className="SelectContent"
      {...props}
      ref={forwardedRef}
    >
      <Select.ScrollUpButton className="SelectScrollButton">
        <ChevronUpIcon />
      </Select.ScrollUpButton>
      <Select.Viewport>{children}</Select.Viewport>
      <Select.ScrollDownButton className="SelectScrollButton">
        <ChevronDownIcon />
      </Select.ScrollDownButton>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));

Select.ScrollUpButton = SelectPrimitive.ScrollUpButton;
Select.Viewport = SelectPrimitive.Viewport;
Select.ScrollDownButton = SelectPrimitive.ScrollDownButton;

Select.Item = React.forwardRef(({ children, ...props }, forwardedRef) => (
  <SelectPrimitive.Item className="SelectItem" {...props} ref={forwardedRef}>
    <>
      <SelectPrimitive.ItemText className="SelectItemText">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </SelectPrimitive.ItemIndicator>
    </>
  </SelectPrimitive.Item>
));

export default Select;
