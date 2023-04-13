import doubleImages from "../../lib/images";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useFailStore from "../../zustand/useFailStore";
import useTimeStore from "../../zustand/useTimeStore";
import useIsVictoryStore from "../../zustand/useIsVictoryStore";
import {
  GridContainer,
  GridImageContainer,
  GridImageFront,
  GridImageBack,
  GridImage,
  GridImagePlaceholder,
} from "./MemoryGrid.styled";

export default function MemoryGrid() {
  const [shuffledImages, setShuffledImages] = useState([]);
  const [compareImages, setCompareImages] = useState([]);
  const [numRevealedImages, setNumRevealedImages] = useState(0);
  const [isAbled, setIsAbled] = useState(true);
  const { addOneFailedAttempt } = useFailStore();
  const { startTimer, stopTimer } = useTimeStore();
  const { setIsVictory } = useIsVictoryStore();

  useEffect(() => {
    setShuffledImages(
      doubleImages
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1])
        .map((image) => ({ ...image, id: uuidv4() }))
    );
  }, []);

  useEffect(() => {
    if (compareImages.length === 3) {
      if (compareImages[0].slug === compareImages[1].slug) {
        setShuffledImages(
          shuffledImages.map((image) => {
            return image.slug === compareImages[0].slug
              ? { ...image, isSolved: true }
              : image;
          })
        );
      } else {
        setShuffledImages(
          shuffledImages.map((image) => {
            return (image.slug === compareImages[0].slug ||
              image.slug === compareImages[1].slug) &&
              image.id !== compareImages[2].id
              ? { ...image, isRevealed: false }
              : image;
          })
        );
        addOneFailedAttempt();
      }
      setCompareImages([compareImages[2]]);
    }

    setNumRevealedImages(
      shuffledImages.filter((image) => image.isRevealed).length
    );
  }, [compareImages]);

  const handleReveal = (slug, id) => {
    setCompareImages((compareImages) => [
      ...compareImages,
      { slug: slug, id: id },
    ]);
    console.log("compareImages", compareImages);
    setShuffledImages(
      shuffledImages.map((image) => {
        return image.id === id ? { ...image, isRevealed: true } : image;
      })
    );
    if (numRevealedImages === shuffledImages.length - 1) {
      stopTimer();
    }
  };

  const handleLastClick = () => {
    setShuffledImages(
      shuffledImages.map((image) => {
        return { ...image, isSolved: true };
      })
    );
    setIsVictory();
  };

  const handleConceal = () => {
    setCompareImages([]);
    setShuffledImages(
      shuffledImages.map((image) => {
        return !image.isSolved ? { ...image, isRevealed: false } : image;
      })
    );
    addOneFailedAttempt();
  };

  return (
    <GridContainer>
      {shuffledImages.map((image) => {
        return (
          <GridImageContainer
            isRevealed={image.isRevealed}
            key={image.id}
            onClick={
              (numRevealedImages === shuffledImages.length &&
                handleLastClick) ||
              null
            }
          >
            <GridImageFront slug={image.slug}>
              {image.isSolved ? (
                <GridImagePlaceholder />
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
                />
              )}
            </GridImageFront>
            <GridImageBack
              onClick={() => {
                isAbled && handleReveal(image.slug, image.id);
                numRevealedImages === 0 ? startTimer() : null;
                setIsAbled(false);
                setTimeout(() => {
                  setIsAbled(true);
                }, 600);
              }}
              aria-label="conceiled card"
            />
          </GridImageContainer>
        );
      })}
    </GridContainer>
  );
}
