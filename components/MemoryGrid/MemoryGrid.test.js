/* import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MemoryGrid from "./index.js";
import useMemoryGame from "../../lib/useMemoryGame.js";

function WrapperComponent() {
  const { handleConceal, handleReveal, shuffledImages, compareImages } =
    useMemoryGame({});
  return (
    <MemoryGrid
      handleReveal={handleReveal}
      handleConceal={handleConceal}
      shuffledImages={shuffledImages}
      compareImages={compareImages}
    />
  );
}

test("renders the correct number of images", () => {
  render(<WrapperComponent />);

  const images = screen.getAllByLabelText("concealed card");
  expect(images).toHaveLength(16);
});

//180 is open, 0 is closed

test("all images are concealed by default", () => {
  render(<WrapperComponent />);
  const imageCards = screen.getAllByLabelText("concealed card");

  imageCards.forEach((card) => {
    expect(card.parentElement).toHaveStyle("transform: rotateY(0)");
  });
});

test("clicking on a concealed card reveals the image", async () => {
  render(<WrapperComponent />);
  const firstCard = screen.getAllByLabelText("concealed card")[0];
  await userEvent.click(firstCard);
  expect(firstCard.parentElement).toHaveStyle("transform: rotateY(180deg)");
  const firstImage = screen.getAllByRole("img")[0];
  expect(firstImage).toBeInTheDocument();
});
 */
