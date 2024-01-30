import React from "react";
import "./Youtube.scss"; // Make sure to create this CSS file
import Flex from "./Flex";

function YoutubeVideo({ videoId }) {
  const youtubeEmbedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0&autoplay=0&controls=1&disablekb=1&fs=1&noCookie=true`;

  return (
    <Flex customClass="YoutubeVideo-Container">
      <Flex customClass="YoutubeVideo">
        <iframe
          src={youtubeEmbedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        ></iframe>
      </Flex>
    </Flex>
  );
}

export default YoutubeVideo;
