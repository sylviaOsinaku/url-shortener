import React, { useState, useEffect } from "react";
import classes from "./Shortening.module.css";
import DisplayShortening from "./DisplayShortening";
const Shortening = () => {
  const [shortentedLinks, setShortenedLinks] = useState(() => {
    const savedLinks = localStorage.getItem("shortentedLinks");
    if (savedLinks) {
      return JSON.parse(savedLinks);
    } else {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("shortentedLinks", JSON.stringify(shortentedLinks));
  }, [shortentedLinks]);
  const [processed, setProcessed] = useState(false);
  const [error, setError] = useState(false);
  const [link, setLink] = useState("");

  const inputHandler = (e) => {
    setLink(e.target.value);
    setError(false);
  };

  const fetchData = async function () {
    setProcessed(true);
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      if (!response.ok) {
        throw new Error("Please enter a valid url");
      }
      const data = await response.json();
      const { result } = data;
      setShortenedLinks((prevState) => [...prevState, result]);
      setProcessed(false);
    } catch (error) {
      console.log(error);
    }
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (link.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    fetchData();
    setLink("");
  };

  return (
    <>
      <div className={classes["shortening-container"]}>
        <form onSubmit={submitFormHandler}>
          <div>
            <input
              type="text"
              placeholder="shorten a link here..."
              onChange={inputHandler}
              value={link}
            />
            <button type="submit">{processed ? "Processing" : "Submit"}</button>
          </div>
          {error && <p>Please add a link</p>}
        </form>
      </div>
      {shortentedLinks.length > 0 && (
        <DisplayShortening links={shortentedLinks} />
      )}
    </>
  );
};

export default Shortening;
