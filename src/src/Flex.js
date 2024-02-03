import React from "react";
import "./Flex.scss";

const Flex = React.forwardRef(
  (
    {
      children,
      direction = "",
      gap = "",
      wrap = "",
      style,
      align = "",
      justify = "",
      id,
      customClass = "",
      onClick,
      fluid,
    },
    ref
  ) => {
    // Only add class if the prop is provided
    const flexClass = direction ? `flex-${direction}` : "";
    const gapClass = gap ? `gap-${gap}` : "";
    const alignClass = align ? `align-${align}` : "";
    const justifyClass = justify ? `justify-${justify}` : "";
    const wrapClass = wrap ? `wrap-${wrap}` : "";
    const fluidClass = fluid ? "fluid" : "";
    const combinedStyles = {
      ...style,
    };

    // Construct className string, filtering out empty segments
    const className = [
      "flex",
      flexClass,
      customClass,
      alignClass,
      justifyClass,
      gapClass,
      wrapClass,
      fluidClass,
    ]
      .filter(Boolean)
      .join(" ");

    const idAttribute = id ? { id } : {};

    return (
      <div
        {...idAttribute}
        className={className}
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
