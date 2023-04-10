import MemoryGrid from "../src/components/MemoryGrid";
import styled from "styled-components";
import StyledPopUp from "../src/components/StyledPopUp/StyledPopUp";
import useIsVicoryStore from "../src/zustand/useIsVictoryStore";
import InfoSection from "../src/components/InfoSection/InfoSection";
import StyledInfoSpan from "../src/components/StyledInfoSpan/StyledInfoSpan";
import useHighscoresStore from "../src/zustand/useHighscoresStore";
import useTimeStore from "../src/zustand/useTimeStore";
import useFailStore from "../src/zustand/useFailStore";
import { useRouter } from "next/router";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  opacity: ${({ isVictory }) => (isVictory ? "0.2" : "1")};
  pointer-events: ${({ isVictory }) => (isVictory ? "none" : "auto")};
`;

const StyledButton = styled.button`
  border: 2px solid black;
  background-color: #fff;
  padding: 7px;
  width: 100%;

  &:active {
    background-color: orange;
  }
`;

const StyledForm = styled.form`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  align-items: center;
`;

const StyledInput = styled.input`
  border: 2px solid lightgray;
  width: 100%;
  margin: 3px;
  padding: 2px;
`;

const handleSubmit = (event, addHighscore, time, numFailedAttempts) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  addHighscore(data.name, time, numFailedAttempts);
  console.log(data.name);
};

export default function HomePage() {
  const { isVictory } = useIsVicoryStore();
  const { highscores, addHighscore } = useHighscoresStore();
  const { formattedTime } = useTimeStore();
  const { numFailedAttempts } = useFailStore();
  const router = useRouter();

  console.log(highscores);
  return (
    <>
      <StyledContainer isVictory={isVictory}>
        <MemoryGrid />
        <InfoSection />
      </StyledContainer>
      {isVictory && (
        <>
          <StyledPopUp>
            <p>🏆 Victory! 🏆</p>

            <StyledForm
              onSubmit={(event) => {
                handleSubmit(
                  event,
                  addHighscore,
                  formattedTime,
                  numFailedAttempts
                );
                router.push("/highscores");
              }}
            >
              <InfoSection />
              <StyledInfoSpan>
                <label htmlFor="name">Name:</label>
                <StyledInput type="text" id="name" name="name" />
              </StyledInfoSpan>

              <StyledButton type="submit">🚀 submit! 🚀</StyledButton>
            </StyledForm>
          </StyledPopUp>
        </>
      )}
    </>
  );
}
