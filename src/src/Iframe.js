import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import "./Iframe.scss";
import Paragraph from "./Paragraph";
import Flex from "./Flex";
import figmaLogo from "./assets/figmaLogo.svg";

const IframeComponent = forwardRef(
  ({ url, title = "Iframe Title", style, ...props }, ref) => {
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
        ref={ref}
        src={url}
        title={title}
        className="iframeComponent"
        frameBorder="0"
        allowFullScreen
        style={style}
        {...props}
      ></iframe>
    );
  }
);

IframeComponent.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  style: PropTypes.object,
};

IframeComponent.defaultProps = {
  title: "Iframe Title",
  style: {},
};

export default IframeComponent;
