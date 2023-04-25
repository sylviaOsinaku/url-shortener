import React, { useState } from "react";
import classes from "./DisplayShortening.module.css";
const DisplayShortening = (props) => {
  // loop through the links array for each of the link set the link code to false
  // i.e i am using the code as an id for each of the links passed
  // initiate the first call to an empty object
  const [linkStates, setLinkStates] = useState(
    props.links.reduce((acc, curLink) => {
      acc[curLink.code] = false;
      return acc;
    }, {})
  );
  async function copyTextToClipboard(text) {
    return await navigator.clipboard.writeText(text);
  }
  const handleCopyClick = (link) => {
    console.log(link);
    copyTextToClipboard(link.short_link)
      .then(() => {
        // If successful, update the linkStates  value
        setLinkStates({ ...linkStates, [link.code]: true });
        // setLinkStates(true);
        setTimeout(() => {
          setLinkStates({ ...linkStates, [link.code]: false });
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ul className={classes["link-wrapper"]}>
      {props.links.map((link) => {
        return (
          <li key={link.code} className={classes["short_link_wrapper"]}>
            <span className={classes["original_link"]}>
              {link.original_link}
            </span>
            <div className="d-flex justify-content-lg-between  gap-3 flex-column flex-lg-row align-items-lg-center">
              <span className={classes["short_link"]}>{link.short_link}</span>
              <button
                onClick={() => handleCopyClick(link)}
                className={
                  linkStates[link.code] ? classes["copied"] : classes["copy"]
                }
              >
                {linkStates[link.code] ? "copied!" : "copy"}
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default DisplayShortening;
