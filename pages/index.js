import InfoButton from "../src/components/InfoButton/InfoButton";
import MemoryGrid from "../src/components/MemoryGrid";
import useFailStore from "../src/zustand/useFailStore";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export default function HomePage() {
  const { numFailedAttempts } = useFailStore();
  return (
    <StyledContainer>
      <MemoryGrid />
      <InfoButton>🤯 failed: {numFailedAttempts}x</InfoButton>
    </StyledContainer>
  );
}
