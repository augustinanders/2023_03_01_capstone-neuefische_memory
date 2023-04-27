import store from "../zustand/store";
import InfoSection from "../components/InfoSection";
import VictoryPopUp from "../components/VictoryPopUp";
import SinglePlayerGrid from "../components/SinglePlayerGrid";
import StyledContainer from "../components/StyledContainer";

export default function HomePage() {
  const isVictory = store((state) => state.isVictory);

  return (
    <>
      <StyledContainer isVictory={isVictory}>
        <InfoSection />
        <SinglePlayerGrid />
      </StyledContainer>
      {isVictory && <VictoryPopUp />}
    </>
  );
}
