import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./radix-styles/Calendar.scss";

const Calendar = ({ children, selectedDate, onChange, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const CustomInput = React.cloneElement(children, {
    onClick: () => setIsOpen(!isOpen),
    value: selectedDate ? selectedDate.toLocaleDateString() : "",
  });

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => {
        onChange(date);
        setIsOpen(false);
      }}
      onClickOutside={() => setIsOpen(false)}
      customInput={CustomInput}
      {...props}
    />
  );
};

export default Calendar;
