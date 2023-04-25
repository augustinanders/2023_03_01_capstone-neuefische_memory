import { useState } from "react";
import {
  GridContainer,
  GridImageContainer,
  GridImageFront,
  GridImageBack,
  GridImage,
  GridImagePlaceholder,
} from "./MemoryGrid.styled";

export default function MemoryGrid({
  handleReveal,
  handleConceal,
  shuffledImages,
  compareImages,
}) {
  const [isAbled, setIsAbled] = useState(true);

  return (
    <GridContainer>
      {shuffledImages.map((image) => {
        return (
          <GridImageContainer
            isRevealed={image.isRevealed}
            key={image.id}
            onDragStart={(event) => event.preventDefault()}
          >
            <GridImageFront
              slug={image.slug}
              onDragStart={(event) => event.preventDefault()}
            >
              {image.isSolved ? (
                <GridImagePlaceholder
                  onDragStart={(event) => event.preventDefault()}
                />
              ) : (
                <GridImage
                  src={image.src}
                  alt={image.slug}
                  width={100}
                  height={100}
                  id={image.id}
                  onClick={
                    (compareImages.length === 2 &&
                      compareImages[0].slug !== compareImages[1].slug &&
                      handleConceal) ||
                    null
                  }
                  onDragStart={(event) => event.preventDefault()}
                />
              )}
            </GridImageFront>
            <GridImageBack
              onClick={() => {
                isAbled && handleReveal(image.slug, image.id);
                setIsAbled(false);
                setTimeout(() => {
                  setIsAbled(true);
                }, 600);
              }}
              onDragStart={(event) => event.preventDefault()}
              aria-label="conceiled card"
            />
          </GridImageContainer>
        );
      })}
    </GridContainer>
  );
}
