import React from "react";
import "./TextArea.scss";

const TextArea = ({
  label = "Your Label",
  placeholder = "Enter your text",
  value,
  onChange,
  className,
  disabled,
}) => {
  return (
    <div className={`textareafield ${className || ""}`} disabled={disabled}>
      <textarea placeholder={placeholder} value={value} onChange={onChange} />
      <label>{label}</label>
    </div>
  );
};

export default TextArea;
