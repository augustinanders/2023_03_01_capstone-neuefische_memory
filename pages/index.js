import MemoryGrid from "../src/components/MemoryGrid";
import styled from "styled-components";
import store from "../src/zustand/store";
import InfoSection from "../src/components/InfoSection";
import VictoryPopUp from "../src/components/VictoryPopUp";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  opacity: ${({ isVictory }) => (isVictory ? "0.2" : "1")};
  pointer-events: ${({ isVictory }) => (isVictory ? "none" : "auto")};
`;

export default function HomePage() {
  const { isVictory } = store();

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
