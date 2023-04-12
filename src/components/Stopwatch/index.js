import React, { useState, useEffect } from "react";
import useTimerStatusStore from "../../zustand/useTimerStatusStore";
import useTimeStore from "../../zustand/useTimeStore";

const Stopwatch = () => {
  const { time, addOneSecond, formattedTime } = useTimeStore();
  const { timerOn } = useTimerStatusStore();

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
