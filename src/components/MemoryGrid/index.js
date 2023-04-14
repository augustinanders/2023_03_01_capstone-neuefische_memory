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

  const handleReveal = (slug, id) => {
    let newCompareImages = [...compareImages, { slug: slug, id: id }];
    setCompareImages(newCompareImages);
    //set clicked image to revealed
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
    //set shuffled images for next render
    setShuffledImages(newShuffledImages);
    //number revealed images is used to start and stop timer
    const newNumRevealedImages = newShuffledImages.filter(
      (image) => image.isRevealed
    ).length;
    if (newNumRevealedImages === 1) {
      startTimer();
    }
    if (newNumRevealedImages === shuffledImages.length) {
      stopTimer();
    }
    setNumRevealedImages(newNumRevealedImages);
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
    <>
      <GridContainer
        onClick={
          (numRevealedImages === shuffledImages.length && handleLastClick) ||
          null
        }
      >
        {shuffledImages.map((image) => {
          return (
            <GridImageContainer isRevealed={image.isRevealed} key={image.id}>
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
    </>
  );
}
