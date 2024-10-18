import React from "react";
import "./ContactRow.css";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // Phone and location icons

const ContactRow = () => {
  return (
    <div className="contact-row">
      <div className="contact-left">
        <img
          src="/images/church-logo2.png"
          alt="Church Logo"
          className="church-logo"
        />
      </div>
      <div className="contact-right">
        <FaPhoneAlt className="icon" />
        <span>Call Us: 0727202551</span>
        <span className="spacer"></span>
        <FaMapMarkerAlt className="icon" />
        <span>Address: Kyanjau building 1st floor</span>
      </div>
    </div>
  );
};

export default ContactRow;
