import { render, screen } from "@testing-library/react";
import Navbar from "./index";

jest.mock("next/router", () => ({
  useRouter: () => ({
    pathname: "/twoplayer",
  }),
}));

test("renders Navbar with the correct active link highlighted", () => {
  const { getByText } = render(<Navbar />);
  const activeLink = getByText(/🎮 🎮/).closest("li");
  expect(activeLink).toHaveStyle("background-color: #rgb(255, 160, 0)");
});

test("Navbar component renders correct number of links", async () => {
  render(<Navbar />);
  const links = await screen.findAllByRole("link");
  expect(links).toHaveLength(3);
});
