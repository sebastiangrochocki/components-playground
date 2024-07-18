import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./Input.scss";
import { MagnifyingGlassIcon } from "sebikostudio-icons";

const Input = ({
  pattern,
  label = "First name",
  placeholder = "Enter first name",
  errormsg = "Invalid format.",
  type = "text",
  value,
  onChange,
  className,
  disabled,
  onClick,
  onFocus,
  onBlur,
  icon: Icon,
  validation = false,
  name,
  fluid,
  ...props
}) => {
  const isSearchInput = type === "search";

  const inputClasses = classnames("inputfield", className, {
    inputSearch: isSearchInput,
    fluid: fluid,
    hasIcon: !!Icon,
  });

  return (
    <div className={inputClasses} disabled={disabled}>
      {isSearchInput && <MagnifyingGlassIcon />}
      {Icon && <Icon className="IconLeft" />}
      <input
        pattern={pattern}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
        name={name}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-invalid={validation && !pattern ? "true" : "false"}
        disabled={disabled}
        {...props}
      />
      {validation && <p className="error">{errormsg}</p>}
      {label && <label htmlFor={name}>{label}</label>}
    </div>
  );
};

Input.propTypes = {
  pattern: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  errormsg: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  icon: PropTypes.elementType,
  validation: PropTypes.bool,
  name: PropTypes.string,
  fluid: PropTypes.bool,
};

export default Input;
