import React, { forwardRef } from "react";
import "./Badge.scss";

const Badge = forwardRef(({ label }, ref) => {
  return (
    <span ref={ref} className="Badge" aria-label={label}>
      {label}
    </span>
  );
});

export default Badge;
