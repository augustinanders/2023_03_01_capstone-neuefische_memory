import { create } from "zustand";

const store = create((set) => {
  return {
    numFailedAttempts: 0,
    addOneFailedAttempt: () =>
      set((state) => ({ numFailedAttempts: state.numFailedAttempts + 1 })),
    resetFailedAttempts: () => set(() => ({ numFailedAttempts: 0 })),

    time: 0,
    formattedTime: "00:00",
    timerOn: false,
    addOneSecond: () =>
      set((state) => ({
        time: state.time + 1,
        formattedTime: formatTime(state.time + 1),
      })),
    startTimer: () => set(() => ({ timerOn: true })),
    stopTimer: () => set(() => ({ timerOn: false })),
    resetTimer: () => set(() => ({ time: 0, formattedTime: "00:00" })),

    isVictory: false,
    setIsVictory: () => set(() => ({ isVictory: true })),
    closeIsVictory: () => set(() => ({ isVictory: false })),
  };
});

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

export default store;
