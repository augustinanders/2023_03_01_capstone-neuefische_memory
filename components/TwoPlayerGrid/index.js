import store from "../../zustand/store";
import useMemoryGame from "../../lib/useMemoryGame";
import MemoryGrid from "../MemoryGrid";

export default function SinglePlayerGrid() {
  const setPlayer = store((state) => state.setPlayer);
  const player = store((state) => state.player);
  const setMatches = store((state) => state.setMatches);

  const { handleReveal, handleConceal, shuffledImages, compareImages } =
    useMemoryGame({
      onMatchSolved: () => {
        setMatches();
      },
      onSwitchPlayer: () => {
        if (player === 1) {
          setPlayer(2);
        } else {
          setPlayer(1);
        }
      },
    });

  return (
    <MemoryGrid
      handleReveal={handleReveal}
      handleConceal={handleConceal}
      shuffledImages={shuffledImages}
      compareImages={compareImages}
    />
  );
}
