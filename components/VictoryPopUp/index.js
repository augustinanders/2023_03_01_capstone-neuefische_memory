import { useRouter } from "next/router";
import StyledInfoSpan from "../StyledInfoSpan";
import StyledPopUp from "../StyledPopUp";
import InfoSection from "../InfoSection";
import useHighscoresStore from "../../zustand/useHighscoresStore";
import styled from "styled-components";
import store from "../../zustand/store";

const StyledButton = styled.button`
  border: 2px solid black;
  background-color: #fff;
  padding: 7px;
  width: 100%;
  color: black;

  &:active {
    background-color: orange;
    color: white;
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

export default function VictoryPopUp() {
  const router = useRouter();
  const { addHighscore } = useHighscoresStore();
  const numFailedAttempts = store((state) => state.numFailedAttempts);
  const resetFailedAttempts = store((state) => state.resetFailedAttempts);
  const formattedTime = store((state) => state.formattedTime);
  const time = store((state) => state.time);
  const resetTimer = store((state) => state.resetTimer);
  const setIsVictory = store((state) => state.setIsVictory);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    addHighscore(data.name, time, formattedTime, numFailedAttempts);
    router.push("/highscores");
    setIsVictory(false);
    resetTimer();
    resetFailedAttempts();
  };

  return (
    <StyledPopUp>
      <p>🏆 Victory! 🏆</p>

      <StyledForm
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <InfoSection />
        <StyledInfoSpan>
          <label htmlFor="name">Name:</label>
          <StyledInput type="text" id="name" name="name" required />
        </StyledInfoSpan>
        <StyledButton type="submit">🚀 submit! 🚀</StyledButton>
      </StyledForm>
    </StyledPopUp>
  );
}
