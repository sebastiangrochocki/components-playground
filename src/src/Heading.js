import React, { forwardRef } from "react";
import "./Heading.scss";

const Heading = forwardRef(
  ({ level = 1, weight = "regular", style, children, ...props }, ref) => {
    const HeadingTag = `h${level}`;
    const weightClass = `heading-${weight}`;

    return (
      <HeadingTag ref={ref} className={weightClass} style={style} {...props}>
        {children}
      </HeadingTag>
    );
  }
);

export default Heading;
