import create from "zustand";

const useTimerStatusStore = create((set) => {
  return {
    timerOn: false,
    startTimer: () => set(() => ({ timerOn: true })),
    stopTimer: () => set(() => ({ timerOn: false })),
  };
});

export default useTimerStatusStore;
