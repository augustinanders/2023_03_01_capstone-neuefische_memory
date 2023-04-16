import styled from "styled-components";
import store from "../zustand/store";
import InfoSection from "../components/InfoSection";
import VictoryPopUp from "../components/VictoryPopUp";
import MemoryGrid from "../components/MemoryGrid";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  opacity: ${({ isVictory }) => (isVictory ? "0.2" : "1")};
  pointer-events: ${({ isVictory }) => (isVictory ? "none" : "auto")};
`;

export default function HomePage() {
  const isVictory = store((state) => state.isVictory);

  return (
    <>
      <StyledContainer isVictory={isVictory}>
        <MemoryGrid />
        <InfoSection />
      </StyledContainer>
      {isVictory && <VictoryPopUp />}
    </>
  );
}
