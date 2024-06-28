import React, { forwardRef } from "react";
import Select, { components } from "react-select";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import "./radix-styles/ComboBox.scss";

const ComboBox = forwardRef(
  (
    {
      options,
      value,
      onChange,
      placeholder,
      isMulti,
      fluid,
      onInputChange,
      isClearable,
      menuPlacement,
    },
    ref
  ) => {
    const CustomDropdownIndicator = (props) => (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </components.DropdownIndicator>
    );

    const CustomMultiValueRemove = (props) => (
      <components.MultiValueRemove {...props}>
        <Cross2Icon />
      </components.MultiValueRemove>
    );

    const CustomClearIndicator = (props) => (
      <components.ClearIndicator {...props}>
        <Cross2Icon />
      </components.ClearIndicator>
    );

    const CustomOption = (props) => (
      <components.Option {...props}>
        {props.data.avatar && (
          <div className="SelectAvatar">
            <img src={props.data.avatar} alt="" />
          </div>
        )}
        {props.children}
      </components.Option>
    );

    const CustomMultiValueLabel = (props) => (
      <components.MultiValueLabel {...props}>
        {props.data.avatar && (
          <div className="SelectAvatar">
            <img src={props.data.avatar} alt="" />
          </div>
        )}
        {props.children}
      </components.MultiValueLabel>
    );

    return (
      <Select
        isMulti={isMulti}
        fluid={fluid}
        options={options}
        value={value}
        onInputChange={onInputChange}
        isClearable={isClearable}
        onChange={onChange}
        menuPlacement={menuPlacement}
        placeholder={placeholder}
        classNamePrefix="ComboBoxTrigger"
        className={`ComboBox ${fluid ? "fluid" : ""}`}
        components={{
          DropdownIndicator: CustomDropdownIndicator,
          MultiValueRemove: CustomMultiValueRemove,
          Option: CustomOption,
          MultiValueLabel: CustomMultiValueLabel,
          ClearIndicator: CustomClearIndicator,
        }}
        ref={ref}
      />
    );
  }
);

export default ComboBox;
