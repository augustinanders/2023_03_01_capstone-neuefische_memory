import Image from "next/image";
import styled from "styled-components";
import doubleImages from "../../lib/images";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const GridContainer = styled.section`
  max-width: 440px;
  max-height: 440px;
  width: 80vw;
  height: 80vw;
  border: 2px solid black;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

const GridImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
  transform: ${({ isRevealed }) =>
    isRevealed ? "rotateY(180deg)" : "rotateY(0)"};
  cursor: pointer;
`;
const GridImageFront = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
const GridImageBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  background-color: black;
`;

const GridImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const GridImagePlaceholder = styled.div``;

export default function MemoryGrid() {
  const [shuffledImages, setShuffledImages] = useState([]);
  const [compareImages, setCompareImages] = useState([]);
  const [numRevealedImages, setNumRevealedImages] = useState(0);

  useEffect(() => {
    setShuffledImages(
      doubleImages
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1])
        .map((image) => ({ ...image, id: nanoid() }))
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
      }
      setCompareImages([compareImages[2]]);
    }

    setNumRevealedImages(
      shuffledImages.filter((image) => image.isRevealed).length
    );
  }, [compareImages]);

  const handleClick = (slug, id) => {
    setCompareImages([...compareImages, { slug: slug, id: id }]);
    setShuffledImages(
      shuffledImages.map((image) => {
        return image.id === id ? { ...image, isRevealed: true } : image;
      })
    );
  };

  const handleLastClick = () => {
    setShuffledImages(
      shuffledImages.map((image) => {
        return { ...image, isSolved: true };
      })
    );
  };

  return (
    <GridContainer>
      {shuffledImages.map((image) => {
        return (
          <GridImageContainer
            isRevealed={image.isRevealed}
            key={image.id}
            onClick={(numRevealedImages === 16 && handleLastClick) || null}
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
                />
              )}
            </GridImageFront>
            <GridImageBack onClick={() => handleClick(image.slug, image.id)} />
          </GridImageContainer>
        );
      })}
    </GridContainer>
  );
}
