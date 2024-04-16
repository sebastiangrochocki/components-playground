import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  html as beautifyHtml,
  css as beautifyCss,
  js as beautifyJavascript,
  html as beautifyJson,
} from "js-beautify";

const customStyle = {
  ...dark,
  'code[class*="language-"]': {
    ...dark['code[class*="language-"]'],
    fontSize: "14px",
    background: "var(--black)",
  },
  'pre[class*="language-"]': {
    ...dark['pre[class*="language-"]'],
    background: "var(--black)",
    border: "none",
    borderRadius: "var(--size-100)",
    padding: "var(--size-100) var(--size-300)",
    boxShadow: "none",
    textShadow: "none",
  },
  tag: {
    color: "var(--brand-2)",
  },
  "attr-name": {
    color: "var(--brand-1)",
  },
  "attr-value": {
    color: "var(--brand-2)",
  },
  module: {
    color: "var(--brand-2)",
  },
  token: {
    color: "var(--brand-2)",
  },
  selector: {
    color: "var(--brand-2)",
  },
  keyword: {
    color: "var(--brand-1)",
  },
  property: {
    color: "var(--brand-1)",
  },
  value: {
    color: "var(--brand-2)",
  },
  unit: {
    color: "var(--brand-2)",
  },
  number: {
    color: "var(--brand-2)",
  },
  variable: {
    color: "var(--brand-2)",
  },
  function: {
    color: "var(--brand-2)",
  },
  string: {
    color: "var(--brand-2)",
  },
  punctuation: {
    color: "white",
  },
  comment: {
    color: "var(--gray-400)",
  },
  operator: {
    color: "var(--gray-200)",
  },
};

const CodeFormatter = ({ codeString, language }) => {
  let formattedCode;
  if (language === "html") {
    formattedCode = beautifyHtml(codeString, {
      indent_size: 2,
      space_in_empty_paren: true,
    });
  } else if (language === "css") {
    formattedCode = beautifyCss(codeString, {
      indent_size: 2,
      space_in_empty_paren: true,
    });
  } else if (language === "js") {
    formattedCode = beautifyJavascript(codeString, {
      indent_size: 2,
      space_in_empty_paren: true,
    });
  } else if (language === "json") {
    formattedCode = beautifyJson(codeString, {
      indent_size: 2,
    });
  } else if (language === "jsx") {
    formattedCode = beautifyJavascript(codeString, {
      indent_size: 2,
      space_in_empty_paren: true,
      e4x: true,
      // end_with_newline: true,
      // preserve_newlines: true,
    });
  } else {
    formattedCode = codeString; // No formatting for other languages
  }

  return (
    <div className="CodeFormatter">
      <SyntaxHighlighter language={language} style={customStyle}>
        {formattedCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeFormatter;
