import React, { useEffect, useState } from "react";
import "./KeyActivitiesSection.css";

const KeyActivitiesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Detect scrolling to trigger the animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = 500; // Adjust the value to control when animation starts
      if (scrollPosition > triggerPoint) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="activities-section">
      <h2 className="activities-intro">Discover what Drives us Everyday</h2>
      <h3 className="activities-heading">Our Key Activities</h3>

      <div className="activities-cards">
        <div className={`card ${isVisible ? "animate" : ""}`}>
          <div className="card-image card1-image"></div>
          <h4 className="card-title">Community Prayer</h4>
          <p className="card-description">
            Join us in the power of community prayer as we come together to seek
            guidance and strength in our shared faith.
          </p>
        </div>

        <div className={`card ${isVisible ? "animate" : ""}`}>
          <div className="card-image card2-image"></div>
          <h4 className="card-title">Devotional Reflection</h4>
          <p className="card-description">
            Find solace and wisdom through personal devotion and reflection of
            the teachings of the Bible.
          </p>
        </div>

        <div className={`card ${isVisible ? "animate" : ""}`}>
          <div className="card-image card3-image"></div>
          <h4 className="card-title">Personal Connection</h4>
          <p className="card-description">
            Experience the intimacy of personal prayer as we seek individual
            connection and good moments of personal devotion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyActivitiesSection;
