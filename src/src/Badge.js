// Badge.js
import React from "react";
import "./Badge.scss"; // Create a separate SCSS file for Badge styling

const Badge = ({ label }) => {
  return <span className="Badge">{label}</span>;
};

export default Badge;
