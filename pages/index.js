import InfoButton from "../src/components/InfoButton/InfoButton";
import MemoryGrid from "../src/components/MemoryGrid";
import useFailStore from "../src/zustand/useFailStore";
import styled from "styled-components";
import Stopwatch from "../src/components/Stopwatch/Stopwatch";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledSection = styled.section`
  display: flex;
  width: 80vw;
  gap: 0.4rem;
  justify-content: center;
`;

export default function HomePage() {
  const { numFailedAttempts } = useFailStore();
  return (
    <StyledContainer>
      <MemoryGrid />
      <StyledSection>
        <InfoButton>🤯 failed: {numFailedAttempts}x</InfoButton>
        <InfoButton>
          <Stopwatch />
        </InfoButton>
      </StyledSection>
    </StyledContainer>
  );
}
