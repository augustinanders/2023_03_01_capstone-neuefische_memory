import { useRouter } from "next/router";
import {
  StyledNavbar,
  StyledList,
  StyledListItem,
  NavLink,
} from "./Navbar.styled";

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
