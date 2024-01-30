import React from "react";
import "./Iframe.scss"; // You can create a corresponding SCSS file for styling
import Paragraph from "./Paragraph";
import Flex from "./Flex";
import figmaLogo from "./assets/figmaLogo.svg";

const IframeComponent = ({ url, title = "Iframe Title" }) => {
  if (!url) {
    return (
      <Flex direction={"column"} customClass={"FigmaIntegrationMessage"}>
        <Paragraph size="large" weight="bold">
          Figma integration
        </Paragraph>
        <img src={figmaLogo} className="UpdatesLogo" alt="Figma Logo" />
      </Flex>
    );
  }

  return (
    <iframe
      src={url}
      title={title}
      className="iframeComponent" // You can define styles in IframeComponent.scss
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
};

export default IframeComponent;
