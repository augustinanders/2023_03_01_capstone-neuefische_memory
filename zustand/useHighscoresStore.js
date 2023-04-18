import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

const useHighscoresStore = createLocalStorageStore(
  (set) => ({
    highscores: [],
    addHighscore: (name, time, failed) =>
      set((state) => ({
        highscores: [
          ...state.highscores,
          { name: name, time: time, failed: failed, id: nanoid() },
        ].sort((a, b) => a.failed - b.failed),
      })),
    sortByFailed: () => {
      set((state) => {
        return {
          highscores: state.highscores.sort((a, b) => a.failed - b.failed),
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
