import StyledContainer from "../../components/StyledContainer";
import StyledInfoSpan from "../../components/StyledInfoSpan";
import TwoPlayerGrid from "../../components/TwoPlayerGrid";
import StyledDoubleSection from "../../components/StyledDoubleSection";
import store from "../../zustand/store";

export default function TwoPlayerPage() {
  const player = store((state) => state.player);
  const matchesPlayerOne = store((state) => state.matchesPlayerOne);
  const matchesPlayerTwo = store((state) => state.matchesPlayerTwo);

  console.log(matchesPlayerOne, matchesPlayerTwo);

  return (
    <StyledContainer>
      <StyledDoubleSection>
        <StyledInfoSpan active={player === 1}>Player One</StyledInfoSpan>
        <StyledInfoSpan>🔥 matches: {matchesPlayerOne}x</StyledInfoSpan>
      </StyledDoubleSection>

      <StyledDoubleSection>
        <StyledInfoSpan active={player === 2}>Player Two</StyledInfoSpan>
        <StyledInfoSpan>🔥 matches: {matchesPlayerTwo}x</StyledInfoSpan>
      </StyledDoubleSection>

      <TwoPlayerGrid />
    </StyledContainer>
  );
}
