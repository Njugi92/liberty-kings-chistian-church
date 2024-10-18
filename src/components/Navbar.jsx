import React from "react";
import "./Navbar.css";
import { FaFacebook, FaTwitter, FaYoutube, FaGoogle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">Welcome to our church website</div>
      <div className="navbar-right">
        <a
          href="https://web.facebook.com/search/top?q=liberty%20kings%20christian%20church%20lkcc%20the%20dominion%20assembly-thika"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon" />
        </a>
        <a
          href="https://twitter.com/YourChurchPage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="icon" />
        </a>
        <a
          href="https://meet.google.com/YourChurchMeetingLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGoogle className="icon" />
        </a>
        <a
          href="https://www.youtube.com/YourChurchChannel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
