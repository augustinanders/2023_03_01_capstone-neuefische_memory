import Stopwatch from "../Stopwatch/Stopwatch";
import StyledInfoButton from "../StyledInfoButton/StyledInfoButton";
import useFailStore from "../../zustand/useFailStore";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  width: 80vw;
  gap: 0.4rem;
  justify-content: center;
  max-width: 440px;
`;

export default function InfoSection() {
  const { numFailedAttempts } = useFailStore();
  return (
    <>
      <StyledSection>
        <StyledInfoButton>🤯 failed: {numFailedAttempts}x</StyledInfoButton>
        <StyledInfoButton>
          <Stopwatch />
        </StyledInfoButton>
      </StyledSection>
    </>
  );
}
