import React from "react";
import "./OurLocationPage.css";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

const OurLocationPage = () => {
  return (
    <div className="our-location-page">
      {/* Cover Background */}
      <div className="cover-background">
        <h1 className="cover-title">Our Location</h1>
      </div>

      <div className="content">
        <div className="left-column">
          <h2 className="find-us">Where to find us</h2>
          <h3 className="location-title">Our Location</h3>
          <p className="description">
            LKCC Church is nested at the heart of our community, easily
            accessible and welcoming to all who seek a place of peace,
            fellowship, and spiritual growth. Whether you are joining us for a
            service, event, or simply seeking a quiet space for reflection, we
            are here for you.
          </p>

          <div className="location-section">
            <FaMapMarkerAlt className="icon" />
            <h4 className="sub-title">Location</h4>
            <p className="description">
              Our primary location is Kyanjau building, first floor. Here you
              will find a welcoming atmosphere, ample parking, and facilities
              that cater to all ages and needs. Whether it's your first visit or
              one of many, you'll always be greeted with a smile and a spirit of
              community.
            </p>
          </div>

          <div className="service-time-section">
            <FaClock className="icon" />
            <h4 className="sub-title">Service Time</h4>
            <p className="description">
              Join us for our service on Sunday at 9:00 am. Our service offers a
              unique experience of worship and community connection, uplifting
              your spirit and strengthening your faith.
            </p>
          </div>
        </div>

        <div className="right-column">
          <img
            src="/images/jesus.jpg" // Update with actual image path
            alt="LKCC Church"
            className="church-image"
          />
        </div>
      </div>

      {/* Google Map Section */}
      <div className="map-section">
        <div className="map-input">
          <input type="text" placeholder="Enter your location" />
          <button type="button">Search</button>
        </div>
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.16847075764!2d37.072119674130924!3d-1.0341258354007523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e84ff241215%3A0xa97f6dbace2abee1!2sKyanjau%20House%2C%20Ground%20Floor%20Kwame%20Nkruma%20Rd%2C%20Thika!5e0!3m2!1sen!2ske!4v1728762013769!5m2!1sen!2ske" // Update with actual Google Maps embed link
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <button className="view-map-button">View Large Map</button>
      </div>
    </div>
  );
};

export default OurLocationPage;
