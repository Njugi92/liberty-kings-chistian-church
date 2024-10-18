import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpened((prev) => !prev);
  };

  return (
    <div className="header">
      <OutsideClickHandler
        onOutsideClick={() => setMenuOpened(false)} // Close menu on outside click
      >
        <div className="nav-container">
          <div className="menu-icon" onClick={handleMenuToggle}>
            <BiMenuAltRight size={30} />
          </div>

          <ul className={`nav-list ${menuOpened ? "active" : ""}`}>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/events" className="nav-link">
                Events
              </Link>
            </li>
            <li>
              <Link to="/live-web-cast" className="nav-link">
                Live WebCast
              </Link>
            </li>
            <li>
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/donate" className="nav-link">
                Donate
              </Link>
            </li>
            <li>
              <Link to="/our-location" className="nav-link">
                Our Location
              </Link>
            </li>
            <div className="get-in-touch">
              <Link to="/get-in-touch" className="get-in-touch-btn">
                Get in Touch
              </Link>
            </div>
          </ul>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Header;
