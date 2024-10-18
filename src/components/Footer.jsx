import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <hr className="footer-divider" />
      <footer className="footer-section">
        <div className="footer-content">
          {/* First Column */}
          <div className="footer-column">
            <img
              src="/images/church-logo2.png"
              alt="Church Logo"
              className="footer-logo"
            />
            <div className="footer-icons">
              <a
                href="https://web.facebook.com/search/top?q=liberty%20kings%20christian%20church%20lkcc%20the%20dominion%20assembly-thika"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="social-icon" />
              </a>
              <a
                href="https://www.youtube.com/church"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="social-icon" />
              </a>
            </div>
          </div>

          {/* Second Column */}
          <div className="footer-column footer-links">
            <a href="/" className="footer-link">
              Home
            </a>
            <a href="/events" className="footer-link">
              Events
            </a>
            <a href="/location" className="footer-link">
              Our Location
            </a>
          </div>

          {/* Third Column */}
          <div className="footer-column footer-links">
            <a href="/contact" className="footer-link">
              Get in Touch
            </a>
            <a href="/donate" className="footer-link">
              Donate
            </a>
          </div>

          {/* Fourth Column */}
          <div className="footer-column">
            <h3 className="footer-title">ABOUT US</h3>
            <p>
              <FaEnvelope className="icon" /> libertykingschurch@gmail.com
            </p>
            <p>
              <FaPhone className="icon" /> 0727202551
            </p>
            <p>
              <FaMapMarkerAlt className="icon" /> Kyanjau building 1st floor
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
