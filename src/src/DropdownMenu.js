import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import "./radix-styles/DropdownMenu.scss";
import { CheckIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const DropdownMenu = DropdownMenuPrimitive.Root;

DropdownMenu.Trigger = ({ children, ...props }) => {
  return (
    <DropdownMenuPrimitive.Trigger asChild {...props}>
      {children}
    </DropdownMenuPrimitive.Trigger>
  );
};

DropdownMenu.Content = ({ children, ...props }) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={8}
        className="DropdownMenuContent"
        {...props}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
};

DropdownMenu.Item = ({ children, icon: Icon, ...props }) => {
  return (
    <DropdownMenuPrimitive.Item className="DropdownMenuItem" {...props}>
      <>
        <div className="LeftSlot">{Icon && <Icon />}</div>

        {children}
      </>
    </DropdownMenuPrimitive.Item>
  );
};

DropdownMenu.CheckboxItem = ({ children, icon: Icon, ...props }) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      className="DropdownMenuCheckboxItem"
      {...props}
    >
      <>
        <div className="LeftSlot">{Icon && <Icon />}</div>

        {children}
        <div className="RightSlot">
          <CheckIcon />
        </div>
      </>
    </DropdownMenuPrimitive.CheckboxItem>
  );
};

DropdownMenu.RadioGroup = ({ children, ...props }) => {
  return (
    <DropdownMenuPrimitive.RadioGroup {...props}>
      {children}
    </DropdownMenuPrimitive.RadioGroup>
  );
};

DropdownMenu.RadioItem = ({ children, icon: Icon, ...props }) => {
  return (
    <DropdownMenuPrimitive.RadioItem
      className="DropdownMenuRadioItem"
      {...props}
    >
      <>
        <div className="LeftSlot">{Icon && <Icon />}</div>

        {children}
        <div className="RightSlot">
          <div className="RadioButton">
            <span></span>
          </div>
        </div>
      </>
    </DropdownMenuPrimitive.RadioItem>
  );
};

DropdownMenu.Separator = () => {
  return <DropdownMenuPrimitive.Separator />;
};

DropdownMenu.Sub = ({ children, ...props }) => {
  return (
    <DropdownMenuPrimitive.Sub {...props}>{children}</DropdownMenuPrimitive.Sub>
  );
};

DropdownMenu.SubTrigger = ({ children, icon: Icon, ...props }) => {
  return (
    <DropdownMenuPrimitive.SubTrigger
      className="DropdownMenuSubTrigger"
      asChild
      {...props}
    >
      <DropdownMenuPrimitive.Item>
        <div className="LeftSlot">{Icon && <Icon />}</div>

        {children}
        <div className="RightSlot">
          <ChevronRightIcon />
        </div>
      </DropdownMenuPrimitive.Item>
    </DropdownMenuPrimitive.SubTrigger>
  );
};

DropdownMenu.SubContent = ({ children, ...props }) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.SubContent
        sideOffset={12}
        className="DropdownMenuSubContent"
        {...props}
      >
        {children}
      </DropdownMenuPrimitive.SubContent>
    </DropdownMenuPrimitive.Portal>
  );
};

export default DropdownMenu;
