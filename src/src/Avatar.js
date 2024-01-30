import React from "react";
import "./Avatar.scss";
import * as Tooltip from "@radix-ui/react-tooltip";
import Paragraph from "./Paragraph";
import AvatarDemo1 from "./assets/AvatarDemo1.svg";
import AvatarDemo2 from "./assets/AvatarDemo2.svg";
import AvatarDemo3 from "./assets/AvatarDemo3.svg";
import AvatarDemo4 from "./assets/AvatarDemo4.svg";

const Avatar = ({ avatar, altText, role }) => {
  // Function to randomly select an avatar
  const getRandomAvatar = () => {
    const avatars = [AvatarDemo1, AvatarDemo2, AvatarDemo3, AvatarDemo4];
    const randomIndex = Math.floor(Math.random() * avatars.length);
    return avatars[randomIndex];
  };

  // Set avatar to a random demo if not provided
  const avatarSrc = avatar || getRandomAvatar();

  return (
    <>
      <Tooltip.Provider delayDuration={200}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div className="avatar">
              <img src={avatarSrc} alt={altText || "Avatar"} />
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="TooltipContent" sideOffset={2}>
              <Paragraph size="medium">
                {altText} : {role}
              </Paragraph>
              <Tooltip.Arrow className="TooltipArrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </>
  );
};

export default Avatar;
