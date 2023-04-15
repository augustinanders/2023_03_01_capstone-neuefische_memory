import { useEffect } from "react";
import store from "../../zustand/store";

const Stopwatch = () => {
  const { addOneSecond, formattedTime, timerOn } = store();

  useEffect(() => {
    let interval;

    if (timerOn) {
      interval = setInterval(() => {
        addOneSecond();
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return <span>⏱️ {formattedTime}</span>;
};

export default Stopwatch;
