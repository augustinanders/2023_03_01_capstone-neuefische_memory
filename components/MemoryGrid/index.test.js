import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MemoryGrid from "./index.js";

test("renders the correct number of images", () => {
  render(<MemoryGrid />);
  const images = screen.getAllByLabelText("conceiled card");
  expect(images).toHaveLength(16);
});

//180 is open, 0 is closed

test("all images are concealed by default", () => {
  render(<MemoryGrid />);
  const imageCards = screen.getAllByLabelText("conceiled card");

  imageCards.forEach((card) => {
    expect(card.parentElement).toHaveStyle("transform: rotateY(0)");
  });
});

test("clicking on a concealed card reveals the image", async () => {
  render(<MemoryGrid />);
  const firstCard = screen.getAllByLabelText("conceiled card")[0];
  await userEvent.click(firstCard);
  expect(firstCard.parentElement).toHaveStyle("transform: rotateY(180deg)");
  const firstImage = screen.getAllByRole("img")[0];
  expect(firstImage).toBeInTheDocument();
});
