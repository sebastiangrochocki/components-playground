import React from "react";
import "./Flex.scss";

const Flex = React.forwardRef(
  (
    {
      children,
      direction,
      gap,
      style,
      align,
      justify,
      id,
      customClass,
      onClick,
    },
    ref
  ) => {
    const flexClass = `flex-${direction}`;
    const gapClass = `gap-${gap}`;
    const alignClass = `align-${align}`;
    const justifyClass = `justify-${justify}`;
    const combinedStyles = {
      ...style,
      // Add other default styles if needed
    };

    // Define a variable for id if provided
    const idAttribute = id ? { id } : {};

    return (
      <div
        {...idAttribute}
        className={`flex ${flexClass} ${customClass} ${alignClass} ${justifyClass} ${gapClass}`}
        style={combinedStyles}
        ref={ref}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
);

export default Flex;
