import React from "react";
import "./CodeHighlight.scss";

const CodeHighlight = ({ text }) => {
  return (
    <pre className="CodeHighlight">
      <code>{text}</code>
    </pre>
  );
};

export default CodeHighlight;
