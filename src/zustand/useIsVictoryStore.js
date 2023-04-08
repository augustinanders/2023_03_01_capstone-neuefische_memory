import create from "zustand";

const useIsVicoryStore = create((set) => {
  return {
    isVictory: false,
    setIsVictory: () => set(() => ({ isVictory: true })),
  };
});

export default useIsVicoryStore;
