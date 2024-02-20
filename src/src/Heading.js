import React from "react";
import "./Heading.scss"; // Assuming you have a corresponding stylesheet

const Heading = ({ level = 1, weight = "regular", style, children }) => {
  const HeadingTag = `h${level}`;
  const weightClass = `heading-${weight}`;

  return (
    <HeadingTag className={weightClass} style={style}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
