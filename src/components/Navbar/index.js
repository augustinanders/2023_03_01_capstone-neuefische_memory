import Link from "next/link";
import styled from "styled-components";

export default function Navbar() {
  const StyledNavbar = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3.5rem;
    padding: 0 30px;
    background-color: #f0f0f0;
  `;

  const StyledList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  `;

  const StyledListItem = styled.li`
    margin: 0 10px;
    border: 2px solid black;
    padding: 5px 40px;
    text-decoration: none;

    &:active {
      background-color: orange;
    }
  `;
  return (
    <StyledNavbar>
      <StyledList>
        <Link href="/">
          <StyledListItem>🎮</StyledListItem>
        </Link>
        <Link href="/highscores">
          <StyledListItem>🚀</StyledListItem>
        </Link>
      </StyledList>
    </StyledNavbar>
  );
}
