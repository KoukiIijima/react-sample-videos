import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  console.log(videos);
  const renderList = videos.map((video) => {
    return <VideoItem video={video} />;
  });

  return (
    <div>
      <p>I have {videos.length} videos.</p>
      {renderList}
    </div>
  );
};

export default VideoList;
