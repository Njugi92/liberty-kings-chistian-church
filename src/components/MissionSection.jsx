import React, { useState } from "react";
import "./MissionSection.css";

const MissionSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  const handleExitClick = () => {
    setIsPlaying(false);
  };

  return (
    <div className="mission-section">
      <div className="left-column">
        <h2>Discover Our Mission</h2>
        <p className="mission-subtitle">
          Dive into the heart of who we are and what drives us.
        </p>
        <p className="mission-description">
          Our journey at LKCC church started with a divine inspiration to craft
          a sanctuary where faith, hope, and love flourish. We are a community
          united in our pursuit to embody the teachings of Christ in our daily
          lives. Join us in our mission to make a meaningful impact both in our
          local community and beyond as we navigate and grow in our spiritual
          journey together.
        </p>
        <button className="join-btn">Join Us</button>
      </div>

      <div className="right-column">
        {!isPlaying && (
          <div className="video-placeholder" onClick={handleVideoClick}>
            <div className="play-icon">&#9658;</div> {/* Play icon */}
          </div>
        )}
        {isPlaying && (
          <div className="video-container" onClick={handleExitClick}>
            <iframe
              className="video-frame"
              src="https://www.youtube.com/embed/sample-video-id"
              title="Church Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default MissionSection;
