import useTimeStore from "../../zustand/useTimeStore";
import useFailStore from "../../zustand/useFailStore";
import { useRouter } from "next/router";
import StyledInfoSpan from "../StyledInfoSpan";
import StyledPopUp from "../StyledPopUp";
import InfoSection from "../InfoSection";
import useHighscoresStore from "../../zustand/useHighscoresStore";
import styled from "styled-components";
import useIsVicoryStore from "../../zustand/useIsVictoryStore";

export default function VictoryPopUp() {
  const { formattedTime, resetTimer } = useTimeStore();
  const { numFailedAttempts, resetFailedAttempts } = useFailStore();
  const router = useRouter();
  const { addHighscore } = useHighscoresStore();
  const { closeIsVictory } = useIsVicoryStore();

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    addHighscore(data.name, formattedTime, numFailedAttempts);
    router.push("/highscores");
    closeIsVictory();
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
          <StyledInput type="text" id="name" name="name" />
        </StyledInfoSpan>
        <StyledButton type="submit">🚀 submit! 🚀</StyledButton>
      </StyledForm>
    </StyledPopUp>
  );
}
