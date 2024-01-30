import React from "react";
import "./Tag.scss";

const Tag = ({ text, variant = "Normal" }) => {
  // Class name based on the variant
  const className = `Tag Tag-${variant}`;

  return <span className={className}>{text}</span>;
};

export default Tag;
