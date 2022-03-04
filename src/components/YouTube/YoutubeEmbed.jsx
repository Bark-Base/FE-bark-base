import React from "react";
import ReactPlayer from "react-player/youtube";

export default function YoutubeEmbed({ embedId }) {
  return (
    <ReactPlayer
      width="100%"
      height="150px"
      url={`https://www.youtube.com/watch?v=${embedId}`}
      light={`https://img.youtube.com/vi/${embedId}/mqdefault.jpg`}
      controls
     
    />
  );
}
