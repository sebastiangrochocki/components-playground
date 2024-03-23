import React, { forwardRef } from "react";
import "./Pill.scss";

const Pill = forwardRef(({ children, status }, ref) => {
  let statusClass = "";
  switch (status) {
    case "error":
      statusClass = "error";
      break;
    case "warning":
      statusClass = "warning";
      break;
    case "success":
      statusClass = "success";
      break;
    case "disabled":
      statusClass = "disabled";
      break;
    default:
      statusClass = "";
  }

  return (
    <div className={`Pill ${statusClass}`} ref={ref}>
      {children}
    </div>
  );
});

export default Pill;
