import React from "react";
import classes from "./MainPage.module.css";
import Shortening from "./Shortening";
import Stats from "./Stats";
import Footer from "./Footer";
const MainPage = () => {
  return (
    <div className={classes["mainPage-wrapper"]}>
      <Shortening />
      <Stats />
      <Footer />
    </div>
  );
};

export default MainPage;
