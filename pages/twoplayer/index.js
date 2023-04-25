import StyledContainer from "../../components/StyledContainer";
import StyledInfoSpan from "../../components/StyledInfoSpan";
import TwoPlayerGrid from "../../components/TwoPlayerGrid";
import store from "../../zustand/store";

export default function TwoPlayerPage() {
  const player = store((state) => state.player);
  return (
    <StyledContainer>
      <StyledInfoSpan active={player === 1}>Player One</StyledInfoSpan>
      <StyledInfoSpan active={player === 2}>Player Two</StyledInfoSpan>
      <TwoPlayerGrid />
    </StyledContainer>
  );
}
