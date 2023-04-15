import Stopwatch from "../Stopwatch";
import store from "../../zustand/store";
import StyledDoubleSection from "../StyledDoubleSection";
import StyledInfoSpan from "../StyledInfoSpan";

export default function InfoSection() {
  const { numFailedAttempts } = store();
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
