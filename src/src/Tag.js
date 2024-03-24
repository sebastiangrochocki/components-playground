import React from "react";
import "./Tag.scss";

const Tag = ({ text, variant = "Normal", color, ...props }) => {
  // Class name based on the variant
  const className = `Tag Tag-${variant}`;

  // Inline style for color
  const tagStyle = color ? { backgroundColor: color } : {};

  return (
    <span
      className={className}
      {...props}
      style={{ ...tagStyle, ...props.style }}
    >
      {text}
    </span>
  );
};

export default Tag;
