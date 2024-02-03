import React from "react";
import "./IconButton.scss";
import Badge from "./Badge";
import Spinner from "./Spinner";
// Forward refs and props
const IconButton = React.forwardRef(
  (
    {
      disabled,
      size = "medium",
      variant = "solid",
      onClick,
      children,
      showBadge,
      badgeLabel,
      isLoading,
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
        disabled={disabled || isLoading}
      >
        {isLoading ? <Spinner /> : children}
        {showBadge && <Badge label={badgeLabel} />}
      </button>
    );
  }
);

export default IconButton;
