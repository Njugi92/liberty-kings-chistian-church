import React, { useState } from "react";
import "./DonatePage.css";
import { FaCreditCard, FaArrowUp, FaArrowDown, FaRedo } from "react-icons/fa";

const DonatePage = () => {
  const [amount, setAmount] = useState(0);

  const incrementAmount = () => {
    setAmount(amount + 1);
  };

  const decrementAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className="donate-page">
      {/* Cover Background */}
      <div className="donate-cover">
        {/* Left Column */}
        <div className="left-column">
          <h1 className="title">Support Our Mission</h1>
          <p className="description">
            Empowering change, One Donation at a time
          </p>
          <ul className="donation-benefits">
            <li>
              <span className="dot">•</span> <strong>Community impact:</strong>{" "}
              Your contribution directly supports our initiative to improve the
              local community, bringing tangible changes to the lives of those
              in need.
            </li>
            <li>
              <span className="dot">•</span>{" "}
              <strong>Sustainable Development:</strong> We focus on sustainable
              solutions that create lasting benefits, ensuring your generosity
              fosters long-term positive change.
            </li>
            <li>
              <span className="dot">•</span>{" "}
              <strong>Transparency and Accountability:</strong> Every donation
              is a trust placed in us, and we honor that with complete
              transparency and accountability in how funds are utilized.
            </li>
          </ul>

          <h2 className="more-title">More About Our Cause</h2>
          <p>
            Our cause is dedicated to making a meaningful difference in the
            world. We believe in the power of collective action to address some
            of the most pressing challenges of our times. Whether it is
            supporting education, alleviating poverty, or protecting the
            environment, our mission is to create a better future for all.
          </p>
          <p>
            Our approach is grounded in compassion, innovation, and
            effectiveness. We work tirelessly to ensure that every shilling
            donated goes as far as possible in making a real impact. With your
            support, we can continue to work toward a world where everyone has
            the opportunity to thrive and succeed.
          </p>
          <p>
            Join us in this journey of transformation and hope. Your donation,
            no matter the size, is a powerful act of kindness that can change
            lives.
          </p>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <div className="impact-section">
            <p className="impact-title">YOUR IMPACT</p>
            <h2 className="contribution-title">
              Every Contribution Makes A Difference
            </h2>

            <form className="donation-form">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
              />

              <label htmlFor="amount">Amount (Ksh)</label>
              <div className="amount-input">
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  min="0"
                />
                <FaArrowUp className="arrow-icon" onClick={incrementAmount} />
                <FaArrowDown className="arrow-icon" onClick={decrementAmount} />
              </div>

              <label htmlFor="credit-card">Credit Card Number</label>
              <div className="credit-card-input">
                <FaCreditCard className="credit-card-icon" />
                <input
                  type="text"
                  id="credit-card"
                  name="credit-card"
                  placeholder="XXXX XXXX XXXX XXXX"
                />
                <div className="expiry-input">
                  <input type="text" placeholder="MM/YY CVC" />
                </div>
              </div>

              <div className="robot-verification">
                <input type="checkbox" id="not-a-robot" />
                <label htmlFor="not-a-robot">I'm not a robot</label>
                <FaRedo className="recap-icon" />
              </div>

              <button type="submit" className="donate-button">
                Make A Donation
              </button>

              <p className="shilling-help">Every Shilling Helps Our Cause!</p>
            </form>
          </div>
        </div>
      </div>

      {/* Ensures footer does not overlap */}
      <div className="donate-page-footer-spacer"></div>
    </div>
  );
};

export default DonatePage;
