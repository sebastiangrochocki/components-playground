import React, { forwardRef } from "react";
import "./Avatar.scss";
import Paragraph from "./Paragraph";
import Tooltip from "./Tooltip";
import AvatarDemo1 from "./assets/AvatarDemo1.svg";
import AvatarDemo2 from "./assets/AvatarDemo2.svg";
import AvatarDemo3 from "./assets/AvatarDemo3.svg";
import AvatarDemo4 from "./assets/AvatarDemo4.svg";

const Avatar = forwardRef(
  ({ avatar, altText, role, size = "large", text }, ref) => {
    // Function to randomly select an avatar
    const getRandomAvatar = () => {
      const avatars = [AvatarDemo1, AvatarDemo2, AvatarDemo3, AvatarDemo4];
      const randomIndex = Math.floor(Math.random() * avatars.length);
      return avatars[randomIndex];
    };

    // Set avatar to a random demo if not provided
    const avatarSrc = avatar || getRandomAvatar();

    // Determine the size class
    const sizeClass = `avatar-${size}`;

    return (
      <>
        <Tooltip delayDuration={200}>
          <Tooltip.Trigger asChild>
            <div className={`avatar ${sizeClass}`} ref={ref}>
              <img src={avatarSrc} alt={altText || "Avatar"} />
            </div>
          </Tooltip.Trigger>

          <Tooltip.Content>
            <Paragraph size="medium">
              {altText && altText} {role && role} {text && text}
            </Paragraph>
          </Tooltip.Content>
        </Tooltip>
      </>
    );
  }
);

export default Avatar;
