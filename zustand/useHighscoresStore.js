import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

const useHighscoresStore = createLocalStorageStore(
  (set, get) => ({
    highscores: [],
    addHighscore: (name, time, formattedTime, failed) => {
      set((state) => ({
        highscores: [
          ...state.highscores,
          {
            name,
            time,
            formattedTime,
            failed,
            id: nanoid(),
          },
        ],
      }));
      get().sortByTime();
      get().sortByFailed();
    },
    sortByFailed: () => {
      set((state) => {
        return {
          highscores: state.highscores.sort((a, b) => a.failed - b.failed),
        };
      });
    },
    sortByTime: () => {
      set((state) => {
        return {
          highscores: state.highscores.sort((a, b) => a.time - b.time),
        };
      });
    },
  }),
  "higscores"
);

function createLocalStorageStore(initialStore, name) {
  const useServerStore = create(initialStore);
  const useClientStore = create(persist(initialStore, { name }));

  function useStore(selector, compare) {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
      setHydrated(true);
    }, []);

    const clientStore = useClientStore(selector, compare);
    const serverStore = useServerStore(selector, compare);

    return hydrated ? clientStore : serverStore;
  }

  return useStore;
}

export default useHighscoresStore;
