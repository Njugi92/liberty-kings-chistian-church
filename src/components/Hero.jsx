import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Liberty Kings Christian Church</h1>
        <p className="hero-description">
          Where Faith comes alive and community thrives. Join us Every Sunday
          Morning for a Live WebCast at 9.00am.
        </p>
        <button className="hero-btn">Watch Us Now</button>
      </div>
    </div>
  );
};

export default Hero;
