import create from "zustand";

const useTimerStatusStore = create((set) => {
  return {
    time: 0,
    addOneSecond: () => set((state) => ({ time: state.time + 1 })),
  };
});

export default useTimerStatusStore;
