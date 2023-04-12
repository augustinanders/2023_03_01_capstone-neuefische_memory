import create from "zustand";

const useTimerStatusStore = create((set) => {
  return {
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
  };
});

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

export default useTimerStatusStore;
