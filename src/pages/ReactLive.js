import React, { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Paragraph, Flex, IconButton, Toast, ScrollArea } from "../src/index";
import { SizeIcon, CopyIcon } from "@radix-ui/react-icons";

const ReactLive = ({ children, scope, vertical }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  const [showToast, setShowToast] = useState(false);

  const customTheme = {
    plain: {
      color: "var(--gray-100)",
      backgroundColor: "var(--black)",
    },
    styles: [
      {
        types: [
          "prolog",
          "comment",
          "block-comment",
          "doctype",
          "cdata",
          "class-name",
        ],
        style: {
          color: "var(--brand-1)", // Use --brand-1 color for specific types
        },
      },
      {
        types: ["attr-name"], // Targeting div elements
        style: {
          color: "var(--brand-2)", // Use --brand-2 color for div elements
        },
      },
      {
        types: ["punctuation"], // Targeting div elements
        style: {
          color: "var(--gray-100)", // Use --brand-2 color for div elements
        },
      },

      // Add more styles as needed...
    ],
  };
  const code = children;

  return (
    <>
      {showToast && (
        <Toast
          showToast={showToast}
          setShowToast={setShowToast} // Add this line
          text="Copied to clipboard 🚀"
          time={3000}
          simple
        />
      )}
      <LiveProvider code={code} scope={scope} theme={customTheme}>
        <Flex
          customClass={`ComponentPreviewCode ${
            vertical ? "verticalLayout" : ""
          } ${isExpanded ? "Expanded" : ""}`}
        >
          <LivePreview />
          <ScrollArea style={{ height: "100%" }}>
            <LiveEditor />
          </ScrollArea>
          <Paragraph customClass="Error">
            <LiveError />
          </Paragraph>
          <Flex customClass="actions" gap={100}>
            <IconButton size="medium" variant="ghost" onClick={copyToClipboard}>
              <CopyIcon />
            </IconButton>
            <IconButton variant="solid" size="medium" onClick={toggleExpand}>
              <SizeIcon />
            </IconButton>
          </Flex>
        </Flex>
      </LiveProvider>
    </>
  );
};

export default ReactLive;
