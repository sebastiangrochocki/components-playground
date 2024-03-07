import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import "./radix-styles/DropdownMenu.scss";
import { CheckIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const DropdownMenu = DropdownMenuPrimitive.Root;

DropdownMenu.Trigger = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Trigger asChild ref={ref} {...props}>
      {children}
    </DropdownMenuPrimitive.Trigger>
  );
});

DropdownMenu.Content = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={8}
        className="DropdownMenuContent"
        {...props}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
});

DropdownMenu.Item = React.forwardRef(
  ({ children, icon: Icon, ...props }, ref) => {
    return (
      <DropdownMenuPrimitive.Item
        ref={ref}
        className="DropdownMenuItem"
        {...props}
      >
        <div className="LeftSlot">{Icon && <Icon />}</div>
        {children}
      </DropdownMenuPrimitive.Item>
    );
  }
);

DropdownMenu.CheckboxItem = React.forwardRef(
  ({ children, icon: Icon, ...props }, ref) => {
    return (
      <DropdownMenuPrimitive.CheckboxItem
        ref={ref}
        className="DropdownMenuCheckboxItem"
        {...props}
      >
        <div className="LeftSlot">{Icon && <Icon />}</div>
        {children}
        <div className="RightSlot">
          <CheckIcon />
        </div>
      </DropdownMenuPrimitive.CheckboxItem>
    );
  }
);

DropdownMenu.RadioGroup = ({ children, ...props }) => {
  return (
    <DropdownMenuPrimitive.RadioGroup {...props}>
      {children}
    </DropdownMenuPrimitive.RadioGroup>
  );
};

DropdownMenu.RadioItem = React.forwardRef(
  ({ children, icon: Icon, ...props }, ref) => {
    return (
      <DropdownMenuPrimitive.RadioItem
        ref={ref}
        className="DropdownMenuRadioItem"
        {...props}
      >
        <div className="LeftSlot">{Icon && <Icon />}</div>
        {children}
        <div className="RightSlot">
          <div className="RadioButton">
            <span></span>
          </div>
        </div>
      </DropdownMenuPrimitive.RadioItem>
    );
  }
);

DropdownMenu.Separator = () => {
  return <DropdownMenuPrimitive.Separator />;
};

DropdownMenu.Sub = ({ children, ...props }) => {
  return (
    <DropdownMenuPrimitive.Sub {...props}>{children}</DropdownMenuPrimitive.Sub>
  );
};

DropdownMenu.SubTrigger = React.forwardRef(
  ({ children, icon: Icon, ...props }, ref) => {
    return (
      <DropdownMenuPrimitive.SubTrigger
        ref={ref}
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
  }
);

DropdownMenu.SubContent = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.SubContent
        ref={ref}
        sideOffset={12}
        className="DropdownMenuSubContent"
        {...props}
      >
        {children}
      </DropdownMenuPrimitive.SubContent>
    </DropdownMenuPrimitive.Portal>
  );
});

export default DropdownMenu;
