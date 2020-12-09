import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [timeRemaining, setTimeRemaining] = useState(0);
  const onKeyP = (event) => {
    if (event.keyCode === 13) {
      if (isNaN(event.target.value / 1)) {
        setTimeRemaining(0);
      } else {
        setTimeRemaining(Math.floor(event.target.value));
      }
    }
  };

  useEffect(() => {
    let timer = null;
    if (timeRemaining !== 0) {
      console.log(timeRemaining - 1);
      timer = setInterval(() => {
        setTimeRemaining((timeRemaining) => timeRemaining - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [timeRemaining]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={onKeyP} /> sec.
        </h1>
      </div>
      <div id="current-time">{timeRemaining}</div>
    </div>
  );
};

export default App;
