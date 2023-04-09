import React, { useState, useEffect } from "react";
import useTimerStatusStore from "../../zustand/useTimerStatusStore";
import useTimeStore from "../../zustand/useTimeStore";

const Stopwatch = () => {
  const { time, addOneSecond } = useTimeStore();
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

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  return <span>⏱️ {formatTime(time)}</span>;
};

export default Stopwatch;
