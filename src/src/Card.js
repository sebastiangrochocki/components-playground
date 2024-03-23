import React from "react";
import Flex from "./Flex";
import "./Card.scss";

const Card = ({ children, noPadding, variant, ...props }) => {
  let cardClassName = "Card";
  if (noPadding) {
    cardClassName += " noPadding";
  }
  if (variant === "outline") {
    cardClassName += " Card-outline";
  } else if (variant === "ghost") {
    cardClassName += " Card-ghost";
  }

  return (
    <Flex customClass={cardClassName} {...props}>
      {children}
    </Flex>
  );
};

export default Card;
