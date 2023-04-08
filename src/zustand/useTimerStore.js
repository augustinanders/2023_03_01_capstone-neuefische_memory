import create from "zustand";

const useTimerStore = create((set) => {
  return {
    timerOn: false,
    startTimer: () => set(() => ({ timerOn: true })),
    stopTimer: () => set(() => ({ timerOn: false })),
  };
});

export default useTimerStore;
