import StyledDoubleSection from "../../components/StyledDoubleSection/index.js";
import StyledInfoSpan from "../../components/StyledInfoSpan/index.js";
import useHighscoresStore from "../../zustand/useHighscoresStore.js";
import styled from "styled-components";
import { useState, useEffect } from "react";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100vh;
  width: 100vw;
  overflow-y: scroll;
`;

const StyledHighscoresList = styled.ol`
  max-width: 440px;
  width: 80vw;
  padding-left: 30px;
  font-size: 1.2rem;
`;

const StyledNameButton = styled.button`
  border: 2px solid black;
  padding: 7px 20px;
  margin: 10px 0 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  width: 100%;
  font-size: 1.2rem;
  color: black;
`;

const StyledToggleLabel = styled.div`
  background-color: transparent;
  border: none;
`;

const StyledHeading = styled.h2`
  background-color: white;
  position: sticky;
  margin: 1rem 0 0.5rem 0;
`;

export default function Highscores() {
  const highscores = useHighscoresStore((state) => state.highscores);
  const [expandedIds, setExpandedIds] = useState([]);

  const handleExpandToggle = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((expandedId) => expandedId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  return (
    <>
      <StyledHeading>Highscores</StyledHeading>
      <StyledContainer>
        <StyledHighscoresList role="list">
          {highscores.map((highscore) => {
            const isExpanded = expandedIds.includes(highscore.id);
            return (
              <li key={highscore.id}>
                <StyledNameButton
                  onClick={() => {
                    handleExpandToggle(highscore.id);
                  }}
                >
                  {highscore.name}
                  <StyledToggleLabel>
                    {isExpanded ? "▼" : "▶"}
                  </StyledToggleLabel>
                </StyledNameButton>
                {isExpanded && (
                  <StyledDoubleSection>
                    <StyledInfoSpan>
                      🤯 failed: {highscore.failed}x
                    </StyledInfoSpan>
                    <StyledInfoSpan>
                      ⏱️ {highscore.formattedTime}
                    </StyledInfoSpan>
                  </StyledDoubleSection>
                )}
              </li>
            );
          })}
        </StyledHighscoresList>
      </StyledContainer>
    </>
  );
}
