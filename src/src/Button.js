import React, { useState, useEffect } from "react";
import "./Button.scss";
import Badge from "./Badge";
import Spinner from "./Spinner";

const Button = React.forwardRef(
  (
    {
      disabled,
      showBadge,
      badgeLabel,
      size = "medium",
      variant = "solid",
      onClick,
      onDrop,
      children,
      fluid,
      isLoading,
      ...props
    },
    forwardedRef
  ) => {
    const [buttonWidth, setButtonWidth] = useState();
    const internalRef = React.useRef(null);
    const ref = forwardedRef || internalRef;

    useEffect(() => {
      if (ref.current && !fluid) {
        setButtonWidth(ref.current.offsetWidth); // Store the initial width
      }
    }, [children, fluid, ref]);
    const fixedWidthStyle = buttonWidth ? { width: `${buttonWidth}px` } : {};

    const sizeClass = `button-${size}`;
    const styleClass = `button-${variant}`;
    const fluidClass = fluid ? "button-fluid" : "";

    return (
      <button
        ref={ref}
        {...props}
        className={`button ${sizeClass} ${styleClass} ${fluidClass}`}
        onClick={onClick}
        onDrop={onDrop}
        disabled={disabled || isLoading}
        style={isLoading ? fixedWidthStyle : {}}
      >
        {isLoading ? <Spinner /> : children}
        {showBadge && <Badge label={badgeLabel} />}
      </button>
    );
  }
);

export default Button;
