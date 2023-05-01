import StyledDoubleSection from "../../components/StyledDoubleSection/index.js";
import StyledInfoSpan from "../../components/StyledInfoSpan/index.js";
import useHighscoresStore from "../../zustand/useHighscoresStore.js";
import { useState } from "react";
import {
  StyledHeading,
  StyledSelectSection,
  StyledArrow,
  StyledHighscoresList,
  StyledToggleLabel,
  StyledScore,
  StyledName,
  StyledNameButton,
} from "./highscores.styled.js";

export default function Highscores() {
  const highscores = useHighscoresStore((state) => state.highscores);
  const [sortingMethod, setSortingMethod] = useState("score");

  const [expandedIds, setExpandedIds] = useState([]);

  const handleExpandToggle = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((expandedId) => expandedId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  function sortByTime(a, b) {
    if (a.time < b.time) return -1;
    if (a.time > b.time) return 1;
    return 0;
  }

  function sortByFails(a, b) {
    if (a.failed < b.failed) return -1;
    if (a.failed > b.failed) return 1;
    return 0;
  }

  function sortByScore(a, b) {
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
    return 0;
  }

  const newHighscores = highscores.sort((a, b) => {
    if (sortingMethod === "score") {
      return sortByScore(a, b) || sortByFails(a, b) || sortByTime(a, b);
    } else if (sortingMethod === "fails") {
      return sortByFails(a, b) || sortByTime(a, b) || sortByScore(a, b);
    } else {
      return sortByTime(a, b) || sortByFails(a, b) || sortByScore(a, b);
    }
  });

  const handleSortingMethod = (event) => {
    const currentSortingMethod = event.target.value;
    if (currentSortingMethod === "score") {
      setSortingMethod("score");
    } else if (currentSortingMethod === "time") {
      setSortingMethod("time");
    } else {
      setSortingMethod("fails");
    }
  };

  if (newHighscores.length === 0) {
    return <h2>-- no highscores yet --</h2>;
  } else {
    return (
      <>
        <StyledHeading>Highscores</StyledHeading>
        <StyledSelectSection>
          <label htmlFor="sorting-method">Sort by:</label>
          <select
            name="sorting-method"
            id="sorting-method"
            onChange={(event) => {
              handleSortingMethod(event);
            }}
          >
            <option value="score">score 🚀</option>
            <option value="fails">fails 🤯</option>
            <option value="time">time ⏱️</option>
          </select>
          <StyledArrow>▼</StyledArrow>
        </StyledSelectSection>

        <StyledHighscoresList role="list">
          {newHighscores.map((highscore, index) => {
            const isExpanded = expandedIds.includes(highscore.id);
            return (
              <li key={highscore.id}>
                <StyledNameButton
                  onClick={() => {
                    handleExpandToggle(highscore.id);
                  }}
                >
                  <StyledName>
                    {index + 1}. {highscore.name}
                  </StyledName>
                  <StyledScore>
                    🚀 {highscore.score > 0 ? highscore.score : "0"}
                  </StyledScore>

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
      </>
    );
  }
}
