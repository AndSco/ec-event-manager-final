import React from "react";
import ReactPlayer from 'react-player';
import ExpandingSection from "./UIcomponents/ExpadingSection";


const VideoPlayer = props => {
  return (
    <ExpandingSection title="Video">
      <div className="player-wrapper" style={{ margin: "0" }}>
        <ReactPlayer 
          className="video-player"
          url={props.videoUrl}
          width="100%"
          height="100%"
        />
      </div>
    </ExpandingSection>
  );
}

export default VideoPlayer;