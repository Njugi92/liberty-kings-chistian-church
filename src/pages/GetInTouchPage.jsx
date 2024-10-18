import React from "react";
import "./GetInTouchPage.css";

const GetInTouchPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Name: ${e.target.name.value}, Email: ${e.target.email.value}, Phone: ${e.target.phone.value}, Message: ${e.target.message.value}`;
    window.location.href = `mailto:kenkaruma.kk@gmail.com?subject=Contact%20Us&body=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <div className="get-in-touch-page">
      {/* Background Cover Image Section */}
      <div className="cover-section">
        <div className="cover-text">
          <h1 className="cover-title">Kindly Get in Touch With Us</h1>
          <p className="cover-subtitle">We are Here To Listen and Help</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="content">
        <div className="left-column">
          <h2 className="commitment-title">
            Our <span className="highlight">Commitment</span> to You
          </h2>
          <ul className="commitment-list">
            <li>
              <span className="highlight">Warmth and Welcoming:</span> Every
              interaction with us is met with the warmth and kindness that
              embodies our community spirit.
            </li>
            <li>
              <span className="highlight">Support and Guidance:</span> Whether
              you are going through challenges or seeking spiritual guidance, we
              are here to support you on your journey.
            </li>
            <li>
              <span className="highlight">Community Connection:</span> Engaging
              with us means becoming part of a supportive and caring community
              that values each individual.
            </li>
          </ul>
          <div className="social-icons">
            <a
              href="https://facebook.com/yourchurch"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-facebook" />
            </a>
            <a
              href="https://youtube.com/yourchurch"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              href="https://twitter.com/yourchurch"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>

        <div className="right-column">
          <h2 className="talk-title">Let's Talk!</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <label>Name</label>
            <input type="text" name="name" required />

            <label>Email</label>
            <input type="email" name="email" required />

            <label>Phone</label>
            <input type="tel" name="phone" required />

            <label>Message</label>
            <textarea name="message" maxLength="300" required></textarea>

            <button type="submit" className="contact-btn">
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchPage;
