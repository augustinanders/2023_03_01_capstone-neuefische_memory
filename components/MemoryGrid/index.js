import doubleImages from "../../lib/images";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import store from "../../zustand/store";
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
  const setIsVictory = store((state) => state.setIsVictory);
  const setTimerOn = store((state) => state.setTimerOn);
  const resetTimer = store((state) => state.resetTimer);
  const addOneFailedAttempt = store((state) => state.addOneFailedAttempt);
  const resetFailedAttempts = store((state) => state.resetFailedAttempts);

  useEffect(() => {
    setShuffledImages(
      doubleImages
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1])
        .map((image) => ({ ...image, id: uuidv4() }))
    );
    setTimerOn(false);
    resetTimer();
    resetFailedAttempts();
  }, []);

  const handleReveal = (slug, id) => {
    let newCompareImages = [...compareImages, { slug: slug, id: id }];
    setCompareImages(newCompareImages);

    const revealClickedImage = (image) => {
      return image.id === id ? { ...image, isRevealed: true } : image;
    };
    let newShuffledImages = shuffledImages.map(revealClickedImage);
    if (newCompareImages.length === 3) {
      if (newCompareImages[0].slug === newCompareImages[1].slug) {
        newShuffledImages = newShuffledImages.map((image) => {
          return image.slug === newCompareImages[0].slug
            ? { ...image, isSolved: true }
            : image;
        });
      } else {
        newShuffledImages = newShuffledImages.map((image) => {
          return (image.slug === newCompareImages[0].slug ||
            image.slug === newCompareImages[1].slug) &&
            image.id !== newCompareImages[2].id
            ? { ...image, isRevealed: false }
            : image;
        });
        addOneFailedAttempt();
      }
      setCompareImages([newCompareImages[2]]);
    }
    setShuffledImages(newShuffledImages);

    const newNumRevealedImages = newShuffledImages.filter(
      (image) => image.isRevealed
    ).length;
    if (newNumRevealedImages === 1) {
      setTimerOn(true);
    }
    if (newNumRevealedImages === shuffledImages.length) {
      setTimerOn(false);
    }
    setNumRevealedImages(newNumRevealedImages);
  };

  const handleLastClick = () => {
    setShuffledImages(
      shuffledImages.map((image) => {
        return { ...image, isSolved: true };
      })
    );
    setIsVictory(true);
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
    <>
      <GridContainer
        onClick={
          (numRevealedImages === shuffledImages.length && handleLastClick) ||
          null
        }
      >
        {shuffledImages.map((image) => {
          return (
            <GridImageContainer
              isRevealed={image.isRevealed}
              key={image.id}
              onDragStart={(e) => e.preventDefault()}
            >
              <GridImageFront
                slug={image.slug}
                onDragStart={(e) => e.preventDefault()}
              >
                {image.isSolved ? (
                  <GridImagePlaceholder
                    onDragStart={(e) => e.preventDefault()}
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
                    onDragStart={(e) => e.preventDefault()}
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
                onDragStart={(e) => e.preventDefault()}
                aria-label="conceiled card"
              />
            </GridImageContainer>
          );
        })}
      </GridContainer>
    </>
  );
}
