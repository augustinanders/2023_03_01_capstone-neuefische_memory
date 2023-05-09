import styled from "styled-components";

export const StyledHighscoresList = styled.ul`
  max-width: 440px;
  width: 85vw;
  font-size: 1.2rem;
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
`;

export const StyledNameButton = styled.button`
  border: 2px solid var(--color-primary);
  padding: 7px 10px;
  margin: 10px 0 5px 0;
  display: flex;
  align-items: center;
  background-color: transparent;
  width: 100%;
  font-size: 1.2rem;
  color: var(--color-primary);
  background-color: var(--color-secondary);
`;

export const StyledToggleLabel = styled.div`
  background-color: transparent;
  border: none;
`;

export const StyledHeading = styled.h2`
  margin: 0.5rem 0;
  height: 3rem;
  position: sticky;
  top: 3.5rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-secondary);
`;

export const StyledSelectSection = styled.div`
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
  background-color: var(--color-secondary);
  margin: 0.5rem 0;
  padding: 0 0 0.5rem 0;

  label {
    background-color: var(--color-secondary);
    margin-right: 0.5rem;
  }

  select {
    border: 2px solid var(--color-primary);
    padding: 7px 40px 7px 10px;
    background-color: transparent;
    font-size: 1.2rem;
    color: var(--color-primary);
    appearance: none;
  }
`;

export const StyledArrow = styled.span`
  position: relative;
  left: -1.7rem;
`;

export const StyledScore = styled.div`
  border: 2px solid var(--color-dark);
  background-color: var(--color-light);
  padding: 0.1rem 0.5rem;
  margin: 0 0.5rem;
`;

export const StyledName = styled.p`
  margin: 0;
  flex: 1;
  text-align: left;
  white-space: nowrap;
  overflow: scroll;
`;
