import create from "zustand";

const useIsVicoryStore = create((set) => {
  return {
    isVictory: false,
    setIsVictory: () => set(() => ({ isVictory: true })),
    closeIsVictory: () => set(() => ({ isVictory: false })),
  };
});

export default useIsVicoryStore;
