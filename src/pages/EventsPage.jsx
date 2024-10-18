import React from "react";
import "./EventsPage.css"; // Import the corresponding CSS file

const EventsPage = () => {
  return (
    <div className="events-page">
      {/* Cover Background Video Section */}
      <div className="cover-video-section">
        <video autoPlay muted loop className="background-video">
          <source src="/videos/money.webm" type="video/mp4" />
          {/* Update the video path as needed */}
          Your browser does not support the video tag.
        </video>
        <div className="cover-text">
          <h2 className="cover-heading">Join Our Community Gatherings</h2>
          <h1 className="cover-title">Upcoming Events</h1>
          <p className="cover-subtitle">
            Celebrating faith, fellowship, and service
          </p>
        </div>
      </div>

      {/* Events Section */}
      <div className="events-section">
        <div className="event-card">
          <img
            src="/images/land.jpg"
            alt="Land purchasing"
            className="event-image"
          />
          <h2 className="event-title">Land Purchasing</h2>
          <p className="event-date">On 11/20/2024</p>
          <p className="event-description">
            Join us in this vital mission of expanding the Kingdom of God
            through land purchasing. As Proverbs 3:9 says, "Honor the Lord with
            your wealth, with the firstfruits of all your crops," let's give
            generously for the work of the Lord and secure a place where the
            gospel can be shared for generations to come.
          </p>
        </div>

        <div className="event-card">
          <img
            src="/images/holy-communion.jpg"
            alt="Holy Communion Service"
            className="event-image"
          />
          <h2 className="event-title">Every Tuesday Holy Communion Service</h2>
          <p className="event-date">Every Tuesday from 6:00pm to 8:30pm</p>
          <p className="event-description">
            Come and experience the presence of God through the Holy Communion.
            Matthew 26:26 reminds us, "Take and eat; this is my body." Let’s
            gather as a community and partake in the blessings of the Lord,
            drawing closer to Him and to each other.
          </p>
        </div>

        <div className="event-card">
          <img
            src="/images/prayers.jpg"
            alt="Prayers Warfare"
            className="event-image"
          />
          <h2 className="event-title">Every Friday Prayers Warfare</h2>
          <p className="event-date">Every Friday from 6:00pm to 9:30pm</p>
          <p className="event-description">
            Strengthen your spirit in prayer! Join us as we battle in prayer for
            our lives, our families, and our communities. Ephesians 6:18 says,
            "And pray in the Spirit on all occasions with all kinds of prayers
            and requests." Let’s stand firm in faith, believing that God is able
            to do exceedingly and abundantly.
          </p>
        </div>

        <div className="event-card">
          <img
            src="/images/welcome-service.jpg"
            alt="Sunday Service"
            className="event-image"
          />
          <h2 className="event-title">Welcome to Our Sunday Service</h2>
          <p className="event-date">Every Sunday from 8:00am to 4:30pm</p>
          <p className="event-description">
            Don’t miss out on a powerful Sunday service filled with worship,
            teaching, and miracles of Christ! As Hebrews 10:25 encourages, "Let
            us not give up meeting together, but encourage one another." Join us
            in fellowship as we grow stronger in faith, love, and community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
