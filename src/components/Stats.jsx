import React from "react";
import classes from "./Stats.module.css";
import brands from "../images/icon-brand-recognition.svg";
import records from "../images/icon-detailed-records.svg";
import custom from "../images/icon-fully-customizable.svg";
const Stats = () => {
  return (
    <div className="position-relative ">
      <div className="text-center my-5">
        <h1 className="fs-4 fw-bold">Advanced Statistics</h1>
        <p className="fs-6">
          Track how your links are performing across the web with
          <br /> our advanced statistics dashboard.
        </p>
      </div>

      <section
        className={`d-flex flex-md-row flex-column gap-3  ${classes["stats-wrapper"]} `}
      >
        <div className="bg-white shadow px-3 rounded">
          <img
            src={brands}
            alt="brands"
            className={`translate-middle-y ${classes["stats-img"]} p-2 rounded-5`}
          />
          <h2 className="fs-5 fw-bold">Brand Recognition</h2>
          <p className={classes["stats-text"]}>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div
          className={`bg-white shadow px-3 rounded ${classes["stat-sub-container"]}`}
        >
          <img
            src={records}
            alt="records"
            className={`translate-middle-y ${classes["stats-img"]} p-2 rounded-5`}
          />
          <h2 className="fs-5 fw-bold">Detailed Records</h2>
          <p className={classes["stats-text"]}>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div
          className={`bg-white shadow px-3 rounded ${classes["stat-sub-container-2"]}`}
        >
          <img
            src={custom}
            alt="custom"
            className={`translate-middle-y ${classes["stats-img"]} p-2 rounded-5`}
          />

          <h2 className="fs-5 fw-bold"> Fully Customizable</h2>
          <p className={classes["stats-text"]}>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </section>
      <div className={classes["horizontal-line"]}></div>

      <section className={classes["boost-wrapper"]}>
        <h2> Boost your links today</h2>
        <button>Get Started</button>
      </section>
    </div>
  );
};

export default Stats;
