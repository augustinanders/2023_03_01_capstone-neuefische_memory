import { create } from "zustand";
import { persist } from "zustand/middleware";

const useHighscoresStore = create(
  persist(
    (set) => ({
      highscores: [],
      addHighscore: (name, time, failed) =>
        set((state) => ({
          highscores: [
            ...state.highscores,
            { name: name, time: time, failed: failed },
          ],
        })),
    }),
    {
      name: "highscores",
    }
  )
);

export default useHighscoresStore;
