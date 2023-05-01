import Link from "next/link";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
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

export const StyledList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  width: 100vw;
  margin: 0;
  padding: 0;
  gap: 3vw;
`;

export const StyledListItem = styled.li`
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

export const NavLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
