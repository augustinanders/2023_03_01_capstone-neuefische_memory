import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  margin-top: 3.5rem;
  margin-bottom: 4.5rem;

  ${({ noScroll }) =>
    noScroll &&
    ` position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    `}
`;

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  padding: 0 30px;
  background-color: var(--color-tertiary);
`;

export const StyledTitle = styled.h1`
  font-size: 24px;
  margin: 0;
`;
