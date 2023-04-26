import styled from "styled-components";
import Navbar from "../Navbar";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* overflow-y: scroll; */
  overflow: scroll;
  width: 100vw;
  margin-top: 3.5rem;
  margin-bottom: 4.5rem;
`;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  padding: 0 30px;
  background-color: #f0f0f0;
`;

const StyledTitle = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export default function Layout({ children }) {
  return (
    <>
      <StyledHeader>
        <StyledTitle>Memory App</StyledTitle>
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
      <Navbar />
    </>
  );
}
