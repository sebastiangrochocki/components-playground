import React from "react";
import Flex from "./Flex";
import Paragraph from "./Paragraph";
// import BadgeImage from "./../assets/BadgeImageMini.svg";
import BadgeImageLeft from "./assets/BadgeImage-Left.svg";
import BadgeImageRight from "./assets/BadgeImage-Right.svg";

import "./BadgeLevel.scss";

const BadgeLevel = ({ badge }) => {
  const badgeNumber = badge || 1; // Default badge number to 1 if not provided

  return (
    <Flex customClass={"BadgeLevel"}>
      <Paragraph size="large" weight="bold">
        {badgeNumber}
      </Paragraph>
      <img className="BadgeImageLeft" src={BadgeImageLeft} alt="Badge level" />
      <img
        className="BadgeImageRight"
        src={BadgeImageRight}
        alt="Badge level"
      />
    </Flex>
  );
};

export default BadgeLevel;
