import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 7vh;
  opacity: ${({ isVictory }) => (isVictory ? "0.2" : "1")};
  pointer-events: ${({ isVictory }) => (isVictory ? "none" : "auto")};
  height: calc(100vh - 8rem);
`;

export default StyledContainer;
