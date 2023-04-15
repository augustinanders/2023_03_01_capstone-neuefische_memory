import MemoryGrid from "../src/components/MemoryGrid";
import styled from "styled-components";
import useIsVicoryStore from "../src/zustand/useIsVictoryStore";
import InfoSection from "../src/components/InfoSection";
import VictoryPopUp from "../src/components/VictoryPopUp";
import { useEffect } from "react";
import useTimeStore from "../src/zustand/useTimeStore";
import useFailStore from "../src/zustand/useFailStore";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  opacity: ${({ isVictory }) => (isVictory ? "0.2" : "1")};
  pointer-events: ${({ isVictory }) => (isVictory ? "none" : "auto")};
`;

export default function HomePage() {
  const { isVictory } = useIsVicoryStore();
  const { resetTimer, stopTimer } = useTimeStore();
  const { resetFailedAttempts } = useFailStore();

  useEffect(() => {
    stopTimer();
    resetTimer();
    resetFailedAttempts();
  }, []);

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
