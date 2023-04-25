import { create } from "zustand";
import { formatTime } from "../lib/utils";

const store = create((set, get) => {
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
    setTimerOn: (boolean) => set(() => ({ timerOn: boolean })),
    resetTimer: () => set(() => ({ time: 0, formattedTime: "00:00" })),

    isVictory: false,
    setIsVictory: (boolean) => set(() => ({ isVictory: boolean })),

    player: 1,
    setPlayer: (number) => set(() => ({ player: number })),

    matchesPlayerOne: 0,
    matchesPlayerTwo: 0,
    setMatches: () => {
      const player = get().player;
      if (player === 1) {
        set((state) => ({ matchesPlayerOne: state.matchesPlayerOne + 1 }));
      } else {
        set((state) => ({ matchesPlayerTwo: state.matchesPlayerTwo + 1 }));
      }
    },
  };
});

export default store;
