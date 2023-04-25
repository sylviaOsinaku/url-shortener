import React from "react";
import logo from "../images/logo.svg";
import faceBook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinInterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <h4> Features</h4>
          <a href="#.">Link Shortening</a>
          <a href="#>"> Branded Links</a>
          <a href="#."> Analytics</a>
        </div>

        <div>
          <h4>Resources</h4>
          <a href="#.">Blog</a>
          <a href="#."> Support</a>
        </div>

        <div>
          <h4>Company</h4>
          <a href="#.">About</a>
          <a href="#."> Our Team</a>
          <a href="#."> Careers</a>
          <a href="#."> Contact</a>
        </div>

        <div className={classes["footer-img-wrapper"]}>
          <img src={faceBook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
          <img src={pinInterest} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
