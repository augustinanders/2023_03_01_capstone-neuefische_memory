import Stopwatch from "../Stopwatch/Stopwatch";

import useFailStore from "../../zustand/useFailStore";
import StyledDoubleSection from "../StyledDoubleSection/StyledDoubleSection";
import StyledInfoSpan from "../StyledInfoSpan/StyledInfoSpan";

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
