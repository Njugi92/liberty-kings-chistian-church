import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ContributionSection.css";

const ContributionSection = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleDonateClick = () => {
    navigate("/donate"); // Navigate to the /donate page
  };

  return (
    <div className="contribution-section">
      <h2 className="contribution-title">
        Make A <span className="highlight-text">Contribution</span>
      </h2>
      <p className="contribution-subtitle">
        Your Support enables us to make a positive impact in our community and
        beyond. Thank you for being part of our journey.
      </p>
      <div className="contribution-content">
        <div className="contribution-left">
          <img
            src="/images/image8.jpg"
            alt="Church"
            className="contribution-image"
          />
        </div>
        <div className="contribution-right">
          <h3 className="contribution-heading">
            Empower <span className="highlight-text">Change Today</span>
          </h3>
          <ul className="contribution-list">
            <li>
              <span className="dot"></span> Your contributions{" "}
              <span className="highlight-text">support our ongoing</span>{" "}
              community outreach program and initiatives.
            </li>
            <li>
              <span className="dot"></span> By donating,{" "}
              <span className="highlight-text">
                you become an integral part of spreading hope
              </span>{" "}
              and positive change in our community.
            </li>
            <li>
              <span className="dot"></span> Your generosity{" "}
              <span className="highlight-text">
                helps us continue our mission
              </span>{" "}
              to make a meaningful impact in the lives of those in need.
            </li>
            <li>
              <span className="dot"></span> Join us in{" "}
              <span className="highlight-text">sowing the seed of hope</span>,
              love, and compassion in our community.
            </li>
          </ul>
          <button className="donate-button" onClick={handleDonateClick}>
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContributionSection;
