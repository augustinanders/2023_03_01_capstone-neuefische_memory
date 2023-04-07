import create from "zustand";

const useFailStore = create((set) => {
  return {
    numFailedAttempts: 0,
    addOneFailedAttempt: () =>
      set((state) => ({ numFailedAttempts: state.numFailedAttempts + 1 })),
  };
});

export default useFailStore;
