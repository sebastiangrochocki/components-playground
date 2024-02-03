import React from "react";
import "./Separator.scss";

const Separator = ({ vertical = false }) => {
  const separatorClass = vertical ? "Separator vertical" : "Separator";

  return <div className={separatorClass}></div>;
};

export default Separator;
