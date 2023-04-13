import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";

const useHighscoresStore = create(
  persist(
    (set) => ({
      highscores: [],
      addHighscore: (name, time, failed) =>
        set((state) => ({
          highscores: [
            ...state.highscores,
            { name: name, time: time, failed: failed, id: nanoid() },
          ],
        })),
    }),
    {
      name: "highscores",
    }
  )
);

export default useHighscoresStore;
