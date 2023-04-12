import Stopwatch from "../Stopwatch";
import useFailStore from "../../zustand/useFailStore";
import StyledDoubleSection from "../StyledDoubleSection";
import StyledInfoSpan from "../StyledInfoSpan";

export default function InfoSection() {
  const { numFailedAttempts } = useFailStore();
  return (
    <>
      <StyledDoubleSection>
        <StyledInfoSpan>🤯 failed: {numFailedAttempts}x</StyledInfoSpan>
        <StyledInfoSpan>
          <Stopwatch />
        </StyledInfoSpan>
      </StyledDoubleSection>
    </>
  );
}
