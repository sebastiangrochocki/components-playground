import React from "react";
import * as ToolbarPrimitive from "@radix-ui/react-toolbar";
import "./radix-styles/Toolbar.scss";

const Toolbar = React.forwardRef(
  ({ children, orientation, fluid, ...props }, ref) => {
    // Compute the class names, adding 'fluid' if the fluid prop is true
    const classNames = `ToolbarRoot${fluid ? " fluid" : ""}`;

    return (
      <ToolbarPrimitive.Root
        ref={ref}
        orientation={orientation}
        className={classNames}
        {...props}
      >
        {children}
      </ToolbarPrimitive.Root>
    );
  }
);

Toolbar.Link = React.forwardRef(
  ({ children, href, icon: Icon, ...props }, ref) => {
    return (
      <ToolbarPrimitive.Link
        ref={ref}
        href={href}
        className="ToolbarLink"
        {...props}
      >
        {Icon && <Icon />}
        {children}
      </ToolbarPrimitive.Link>
    );
  }
);

Toolbar.ToggleGroup = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <ToolbarPrimitive.ToggleGroup
      ref={ref}
      className="ToolbarToggleGroup"
      {...props}
    >
      {children}
    </ToolbarPrimitive.ToggleGroup>
  );
});

Toolbar.ToggleItem = React.forwardRef(
  ({ children, icon: Icon, value, ...props }, ref) => {
    return (
      <ToolbarPrimitive.ToggleItem
        ref={ref}
        value={value}
        className="ToolbarToggleItem"
        {...props}
      >
        {Icon && <Icon />}
        {children}
      </ToolbarPrimitive.ToggleItem>
    );
  }
);

Toolbar.Separator = () => {
  return <ToolbarPrimitive.Separator className="ToolbarSeparator" />;
};

export default Toolbar;
