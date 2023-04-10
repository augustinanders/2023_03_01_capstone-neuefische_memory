import useHighscoresStore from "../../src/zustand/useHighscoresStore.js";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100vh;
  width: 100vw;
  overflow-y: scroll;
`;

const StyledHighscoresList = styled.ul`
  list-style: none;
  max-width: 440px;
  width: 80vw;
  padding: 0;
`;

const StyledListItem = styled.li`
  border: 2px solid black;
  padding: 7px 7px 7px 15px;
  margin: 10px 0;
`;

export default function Highscores() {
  const { highscores } = useHighscoresStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>isLoading</p>;
  }
  return (
    <StyledContainer>
      <h1>Highscores</h1>
      <StyledHighscoresList>
        {highscores.map((highscore) => {
          return (
            <StyledListItem key={nanoid()}>{highscore.name}</StyledListItem>
          );
        })}
      </StyledHighscoresList>
    </StyledContainer>
  );
}
