import React, { useState, useEffect } from "react";
import useTimerStore from "../../zustand/useTimerStore";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const { timerOn } = useTimerStore();

  useEffect(() => {
    let interval;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
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
