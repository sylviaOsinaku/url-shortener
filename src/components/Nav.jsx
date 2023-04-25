import React, { useState } from "react";
import logo from "../images/logo.svg";
import "./Nav.css";
import menuIcon from "../images/icon-hamburger.svg";
const Nav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const showMobileNavHandler = () => {
    setShowMobileNav((prevState) => !prevState);
  };
  return (
    <nav className="nav bg-tertiary py-3 d-flex justify-content-between align-items-center position-relative">
      <div className="d-flex  align-items-center justify-content-between desktop-nav">
        <img src={logo} alt="logo" className="d-block" />
        <div className="d-none d-lg-block">
          <a href="#.">Features</a>
          <a href="#.">Pricing</a>
          <a href="#.">Resources</a>
        </div>
      </div>

      <img
        src={menuIcon}
        alt="menu icon"
        className="d-block d-lg-none menu-icon"
        onClick={showMobileNavHandler}
      />

      <div className="d-none d-lg-block desktop-nav">
        <a href="#.">Login</a>
        <a href="#.">Signup</a>
      </div>

      {showMobileNav && (
        <div className="position-absolute mobile-nav  d-lg-none">
          <a href="#." rel="noreferrer">
            Features
          </a>
          <a href="#." rel="noreferrer">
            Pricing
          </a>
          <a href="#." rel="noreferrer">
            Resources
          </a>
          <a href="#." rel="noreferrer">
            Login
          </a>
          <a href="#." rel="noreferrer">
            Signup
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
