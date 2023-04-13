import React, { useState, useEffect } from "react";
import useTimeStore from "../../zustand/useTimeStore";

const Stopwatch = () => {
  const { addOneSecond, formattedTime, timerOn } = useTimeStore();

  useEffect(() => {
    let interval;

    if (timerOn) {
      interval = setInterval(() => {
        addOneSecond();
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return <span>⏱️ {formattedTime}</span>;
};

export default Stopwatch;
