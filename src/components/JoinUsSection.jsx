import React, { useEffect, useState } from "react";
import "./JoinUsSection.css";

const JoinUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Detect scrolling to trigger the appearance of the section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = 800; // Adjust the value based on where the section starts
      if (scrollPosition > triggerPoint) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`join-us-section ${isVisible ? "visible" : ""}`}>
      <h2 className="join-us-title">Join Our Church</h2>
      <p className="join-us-description">
        Experience the warmth of community, the comfort of shared faith, and the
        strength of togetherness. At Our Church, you'll find a welcoming embrace
        and a sense of belonging as we journey together in faith and fellowship.
        Join us in worship, prayers, and meaningful connection as we grow in our
        spiritual lives and support one another in love and compassion.
      </p>
      <button className="join-us-button">JOIN US NOW</button>
    </div>
  );
};

export default JoinUsSection;
