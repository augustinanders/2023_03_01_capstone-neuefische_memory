import { useEffect } from "react";
import store from "../../zustand/store";
import useMemoryGame from "../../lib/useMemoryGame";
import MemoryGrid from "../MemoryGrid";

export default function SinglePlayerGrid() {
  const setIsVictory = store((state) => state.setIsVictory);
  const setTimerOn = store((state) => state.setTimerOn);
  const resetTimer = store((state) => state.resetTimer);
  const addOneFailedAttempt = store((state) => state.addOneFailedAttempt);
  const resetFailedAttempts = store((state) => state.resetFailedAttempts);

  const { handleReveal, handleConceal, shuffledImages, compareImages } =
    useMemoryGame({
      onFirstImageRevealed: () => {
        setTimerOn(true);
      },
      onLastImageRevealed: () => {
        setTimerOn(false);
        setTimeout(() => {
          setIsVictory(true);
        }, 800);
      },
      onFailedAttempt: () => {
        addOneFailedAttempt();
      },
    });

  useEffect(() => {
    setTimerOn(false);
    resetTimer();
    resetFailedAttempts();
  }, []);

  return (
    <MemoryGrid
      handleReveal={handleReveal}
      handleConceal={handleConceal}
      shuffledImages={shuffledImages}
      compareImages={compareImages}
    />
  );
}
