import Navbar from "../Navbar";
import { useRouter } from "next/router";
import { StyledHeader, StyledTitle, StyledMain } from "./Layout.styled";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <StyledHeader>
        <StyledTitle>Memory Mastery</StyledTitle>
      </StyledHeader>
      <StyledMain
        noScroll={router.pathname === "/" || router.pathname === "/twoplayer"}
      >
        {children}
      </StyledMain>
      <Navbar />
    </>
  );
}
