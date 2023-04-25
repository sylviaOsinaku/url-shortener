import React from "react";
import HeroImage from "../images/illustration-working.svg";
import classes from "./Hero.module.css";
const Hero = () => {
  return (
    <>
      <div className={classes["hero-wrapper"]}>
        <div>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed
            <br /> insights on how your links are performing.
          </p>
          <button>Get Started</button>
        </div>
        <div>
          <img src={HeroImage} alt="Hero illustration" />
        </div>
      </div>
    </>
  );
};

export default Hero;
