import React from "react";
import "./LiveWebCastPage.css";
import { Link } from "react-router-dom";

const LiveWebCastPage = () => {
  return (
    <div className="live-webcast-page">
      {/* Background Cover Image */}
      <div className="live-webcast-cover">
        <h1 className="live-webcast-title">Live WebCast</h1>
        <p className="live-webcast-subtitle">
          Tune in every Sunday from 9:00am to our live web cast
        </p>
      </div>

      {/* Live Stream Section */}
      <div className="live-stream-container">
        <iframe
          className="youtube-stream"
          src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Live WebCast"
        ></iframe>
      </div>

      {/* Donation Button */}
      <div className="donation-section">
        <Link to="/donate">
          <button className="donate-btn">Give To God</button>
        </Link>
      </div>
    </div>
  );
};

export default LiveWebCastPage;
