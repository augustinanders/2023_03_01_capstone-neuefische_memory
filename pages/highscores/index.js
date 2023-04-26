import StyledDoubleSection from "../../components/StyledDoubleSection/index.js";
import StyledInfoSpan from "../../components/StyledInfoSpan/index.js";
import useHighscoresStore from "../../zustand/useHighscoresStore.js";
import styled from "styled-components";
import { useState } from "react";

const StyledHighscoresList = styled.ul`
  max-width: 440px;
  width: 85vw;
  font-size: 1.2rem;
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
`;

const StyledNameButton = styled.button`
  border: 2px solid black;
  padding: 7px 10px;
  margin: 10px 0 5px 0;
  display: flex;
  align-items: center;
  background-color: transparent;
  width: 100%;
  font-size: 1.2rem;
  color: black;
  background-color: white;
`;

const StyledToggleLabel = styled.div`
  background-color: transparent;
  border: none;
`;

const StyledHeading = styled.h2`
  margin: 0.5rem 0;
  height: 3rem;
  position: sticky;
  top: 3.5rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const StyledSelectSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  font-size: 1.2rem;
  position: sticky;
  top: 6.5rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 0.5rem 0;
  padding: 0 0 0.5rem 0;

  label {
    background-color: white;
    margin-right: 0.5rem;
  }

  select {
    border: 2px solid black;
    padding: 7px 40px 7px 10px;
    background-color: transparent;
    font-size: 1.2rem;
    color: black;
    appearance: none;
  }
`;

const StyledArrow = styled.span`
  position: relative;
  left: -1.7rem;
`;

const StyledScore = styled.div`
  border: 2px solid gray;
  background-color: lightgray;
  padding: 0.1rem 0.5rem;
  margin: 0 0.5rem;
`;

const StyledName = styled.p`
  margin: 0;
  flex: 1;
  text-align: left;
  white-space: nowrap;
  overflow: scroll;
`;

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

  /*   const newHighscores = highscores.sort((a, b) => {
    if (sortingMethod === "score") {
      return sortByScore(a, b) || sortByFails(a, b) || sortByTime(a, b);
    } else if (sortingMethod === "fails") {
      return sortByFails(a, b) || sortByTime(a, b) || sortByScore(a, b);
    } else {
      return sortByTime(a, b) || sortByFails(a, b) || sortByScore(a, b);
    }
  }); */

  const newHighscores = [
    {
      name: "John",
      time: 24,
      formattedTime: "00:24",
      failed: 8,
      id: "5863l4cFUr65CgM67Pznm",
      score: 599,
    },
    {
      name: "Alice",
      time: 34,
      formattedTime: "00:34",
      failed: 5,
      id: "1234abcd",
      score: 765,
    },
    {
      name: "Bob",
      time: 45,
      formattedTime: "00:45",
      failed: 12,
      id: "5678efgh",
      score: 255,
    },
    {
      name: "Eve",
      time: 12,
      formattedTime: "00:12",
      failed: 2,
      id: "9012ijkl",
      score: 879,
    },
    {
      name: "Jane",
      time: 51,
      formattedTime: "00:51",
      failed: 17,
      id: "3456mnop",
      score: -16,
    },
    {
      name: "Frank",
      time: 15,
      formattedTime: "00:15",
      failed: 4,
      id: "7890qrst",
      score: 820,
    },
    {
      name: "Kate",
      time: 38,
      formattedTime: "00:38",
      failed: 9,
      id: "1111aaaa",
      score: 545,
    },
    {
      name: "Max",
      time: 19,
      formattedTime: "00:19",
      failed: 6,
      id: "2222bbbb",
      score: 770,
    },
    {
      name: "Nancy",
      time: 27,
      formattedTime: "00:27",
      failed: 10,
      id: "3333cccc",
      score: 649,
    },
    {
      name: "Oliver",
      time: 8,
      formattedTime: "00:08",
      failed: 1,
      id: "4444dddd",
      score: 959,
    },
    {
      name: "Pete",
      time: 29,
      formattedTime: "00:29",
      failed: 11,
      id: "5555eeee",
      score: 579,
    },
    {
      name: "Rachel",
      time: 43,
      formattedTime: "00:43",
      failed: 14,
      id: "6666ffff",
      score: 157,
    },
    {
      name: "Sam",
      time: 22,
      formattedTime: "00:22",
      failed: 7,
      id: "7777gggg",
      score: 801,
    },
    {
      name: "Tom",
      time: 30,
      formattedTime: "00:30",
      failed: 9,
      id: "8888hhhh",
      score: 599,
    },
    {
      name: "test",
      time: 16,
      formattedTime: "00:16",
      failed: 3,
      id: "9999iiii",
      score: 859,
    },
  ];

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
