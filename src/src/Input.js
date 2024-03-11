import React from "react";
import "./Input.scss";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

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
  validation,
  name,
  fluid,
  // hideLabel = false,
}) => {
  const isSearchInput = type === "search";
  return (
    <div
      className={`inputfield ${isSearchInput ? "inputSearch" : ""} ${
        fluid ? "fluid" : ""
      } ${className || ""}`}
      disabled={disabled}
    >
      {isSearchInput && <MagnifyingGlassIcon />}
      <input
        pattern={pattern}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
        name={name}
      />
      {type !== "number" && <label>{label}</label>}
      {errormsg !== false && <p>{errormsg}</p>}

      {type !== "number" && type !== "date" && validation !== false && (
        <span></span>
      )}
    </div>
  );
};

export default Input;
