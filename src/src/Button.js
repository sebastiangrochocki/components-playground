import React, { useState, useEffect, createElement } from "react";
import "./Button.scss";
import Badge from "./Badge";
import Flex from "./Flex";
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
      helper,
      iconLeft,
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
        {isLoading ? (
          <Spinner />
        ) : (
          helper && (
            <Flex gap={100} align="center">
              {iconLeft && createElement(iconLeft)}
              <Flex
                direction="column"
                customClass="buttonHelper"
                justify="center"
              >
                {children}
                <span>{helper}</span>
              </Flex>
            </Flex>
          )
        )}
        {!isLoading && !helper && children}
        {showBadge && <Badge label={badgeLabel} />}
      </button>
    );
  }
);

export default Button;
