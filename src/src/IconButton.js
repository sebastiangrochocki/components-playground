import React from "react";
import "./IconButton.scss";
import Badge from "./Badge";

// Forward refs and props
const IconButton = React.forwardRef(
  (
    {
      size = "medium",
      variant = "solid",
      onClick,
      children,
      showBadge,
      badgeLabel,
      ...props
    },
    ref
  ) => {
    const sizeClass = `icon-button-${size}`;
    const styleClass = `icon-button-${variant}`;

    return (
      <button
        ref={ref}
        {...props}
        className={`icon-button ${sizeClass} ${styleClass}`}
        onClick={onClick}
      >
        {children}
        {showBadge && <Badge label={badgeLabel} />}
      </button>
    );
  }
);

export default IconButton;
