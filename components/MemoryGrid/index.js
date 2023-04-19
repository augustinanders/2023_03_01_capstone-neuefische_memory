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

function useMemoryGame({
  onFirstImageRevealed,
  onLastImageRevealed,
  onFailedAttempt,
}) {
  const [shuffledImages, setShuffledImages] = useState([]);
  const [compareImages, setCompareImages] = useState([]);

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
    const revealClickedImage = (image) => {
      return image.id === id ? { ...image, isRevealed: true } : image;
    };
    let newShuffledImages = shuffledImages.map(revealClickedImage);

    if (compareImages.length === 2) {
      if (compareImages[0].slug === compareImages[1].slug) {
        newShuffledImages = newShuffledImages.map((image) => {
          return image.slug === compareImages[0].slug
            ? { ...image, isSolved: true }
            : image;
        });
      } else {
        newShuffledImages = newShuffledImages.map((image) => {
          return image.id === compareImages[0].id ||
            image.id === compareImages[1].id
            ? { ...image, isRevealed: false }
            : image;
        });
        onFailedAttempt();
      }
      setCompareImages([{ slug: slug, id: id }]);
    } else {
      setCompareImages([...compareImages, { slug: slug, id: id }]);
    }

    const newNumRevealedImages = newShuffledImages.filter(
      (image) => image.isRevealed
    ).length;
    if (newNumRevealedImages === 1) {
      onFirstImageRevealed();
    }
    if (newNumRevealedImages === shuffledImages.length) {
      onLastImageRevealed();
      setTimeout(() => {
        newShuffledImages = newShuffledImages.map((image) => {
          return { ...image, isSolved: true };
        });
      }, 400);
    }
    setShuffledImages(newShuffledImages);
  };

  const handleConceal = () => {
    setCompareImages([]);
    setShuffledImages(
      shuffledImages.map((image) => {
        return !image.isSolved ? { ...image, isRevealed: false } : image;
      })
    );
    onFailedAttempt();
  };

  return { handleReveal, handleConceal, shuffledImages, compareImages };
}

export default function MemoryGrid() {
  const [isAbled, setIsAbled] = useState(true);
  const setIsVictory = store((state) => state.setIsVictory);
  const setTimerOn = store((state) => state.setTimerOn);
  const resetTimer = store((state) => state.resetTimer);
  const addOneFailedAttempt = store((state) => state.addOneFailedAttempt);
  const resetFailedAttempts = store((state) => state.resetFailedAttempts);

  const { handleReveal, handleConceal, shuffledImages, compareImages } =
    useMemoryGame({
      onFirstImageRevealed: () => {
        setTimerOn(true);
      },
      onLastImageRevealed: () => {
        setTimerOn(false);
        setTimeout(() => {
          setIsVictory(true);
        }, 800);
      },
      onFailedAttempt: () => {
        addOneFailedAttempt();
      },
    });

  useEffect(() => {
    setTimerOn(false);
    resetTimer();
    resetFailedAttempts();
  }, []);

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
