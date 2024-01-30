import React from "react";
import "./Paragraph.scss";

const Paragraph = React.forwardRef(
  (
    { customClass = "", size = "medium", weight = "regular", children },
    ref
  ) => {
    const sizeClass = `text-${size}`;
    const weightClass = `text-${weight}`;

    return (
      <p ref={ref} className={`${sizeClass} ${weightClass} ${customClass}`}>
        {children}
      </p>
    );
  }
);

export default Paragraph;
