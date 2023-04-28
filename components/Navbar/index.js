import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledNavbar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 4.5rem;
  background-color: var(--color-tertiary);
  padding: 0 10vw 0.4rem;
`;

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  width: 100vw;
  margin: 0;
  padding: 0;
  gap: 3vw;
`;

const StyledListItem = styled.li`
  margin: 0;
  border: 2px solid var(--color-primary);
  text-decoration: none;
  background-color: ${({ isActive }) =>
    isActive ? "var(--color-accent)" : "transparent"};
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.3rem;
  font-size: 1.5rem;
  padding-bottom: 0.05rem;

  &:active {
    background-color: var(--color-accent);
  }
`;

const NavLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Navbar() {
  const router = useRouter();

  return (
    <StyledNavbar>
      <StyledList role="list">
        <StyledListItem
          isActive={router.pathname === "/twoplayer"}
          role="listitem"
        >
          <NavLink href="/twoplayer">
            <span role="img" aria-label="controllers indicate TwoPlayer-Mode">
              🎮 🎮
            </span>
          </NavLink>
        </StyledListItem>

        <StyledListItem isActive={router.pathname === "/"} role="listitem">
          <NavLink href="/">
            <span
              role="img"
              aria-label="controller indicates Singleplayer-Mode"
            >
              🎮
            </span>
          </NavLink>
        </StyledListItem>

        <StyledListItem
          isActive={router.pathname === "/highscores"}
          role="listitem"
        >
          <NavLink href="/highscores">
            <span role="img" aria-label="rocket indicates Highscore-Page">
              🚀
            </span>
          </NavLink>
        </StyledListItem>
      </StyledList>
    </StyledNavbar>
  );
}
