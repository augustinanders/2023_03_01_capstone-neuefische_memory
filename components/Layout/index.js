import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export default function Layout({ children }) {
  return (
    <>
      <StyledMain>{children}</StyledMain>
    </>
  );
}
