import MemoryGrid from "../src/components/MemoryGrid";
import styled from "styled-components";
import StyledPopUp from "../src/components/StyledPopUp/StyledPopUp";
import useIsVicoryStore from "../src/zustand/useIsVictoryStore";
import InfoSection from "../src/components/InfoSection/InfoSection";

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
  return (
    <>
      <StyledContainer isVictory={isVictory}>
        <MemoryGrid />
        <InfoSection />
      </StyledContainer>
      {isVictory && (
        <>
          <StyledPopUp>
            <p>🏆 Victory! 🏆</p>
            <InfoSection />
          </StyledPopUp>
        </>
      )}
    </>
  );
}
