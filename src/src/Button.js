import React, { useState, useRef, useEffect } from "react";
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
    ref
  ) => {
    const buttonRef = useRef(null); // Create a ref for the button
    const [buttonWidth, setButtonWidth] = useState();

    useEffect(() => {
      if (buttonRef.current && !fluid) {
        setButtonWidth(buttonRef.current.offsetWidth); // Store the initial width
      }
    }, [children, fluid]);

    // Style to maintain the width of the button
    const fixedWidthStyle = buttonWidth ? { width: `${buttonWidth}px` } : {};

    const sizeClass = `button-${size}`;
    const styleClass = `button-${variant}`;
    const fluidClass = fluid ? "button-fluid" : "";

    return (
      <button
        ref={buttonRef}
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
