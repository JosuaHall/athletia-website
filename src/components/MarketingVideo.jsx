import React from "react";
import myVideo from "../pictures/video.mp4";

function MarketingVideo() {
  return (
    <div style={{ display: "block" }}>
      <div className="marketing-video-area">
        {/* Adjust the width here */}
        <video controls playsInline className="marketing-video">
          {/* Apply width: 100% to make the video responsive */}
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default MarketingVideo;
