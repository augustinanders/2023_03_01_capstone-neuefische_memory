import { useEffect } from "react";
import store from "../../zustand/store";

const Stopwatch = () => {
  const addOneSecond = store((state) => state.addOneSecond);
  const formattedTime = store((state) => state.formattedTime);
  const timerOn = store((state) => state.timerOn);

  useEffect(() => {
    let interval;

    if (timerOn) {
      interval = setInterval(() => {
        addOneSecond();
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [addOneSecond, timerOn]);

  return <span>⏱️ {formattedTime}</span>;
};

export default Stopwatch;
