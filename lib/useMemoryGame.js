import doubleImages from "./images";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

export default function useMemoryGame({
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
        setShuffledImages(newShuffledImages);
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
