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

export default function MemoryGrid() {
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    setShuffledImages(
      doubleImages
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1])
        .map((image) => ({ ...image, id: nanoid() }))
    );
  }, []);

  const handleClick = (event) => {
    setShuffledImages(
      shuffledImages.map((image) => {
        return image.id === event.target.id
          ? { ...image, isRevealed: true }
          : image;
      })
    );
  };

  return (
    <GridContainer>
      {shuffledImages.map((image) => {
        return (
          <GridImageContainer isRevealed={image.isRevealed} key={image.id}>
            <GridImageFront onClick={handleClick}>
              <GridImage
                src={image.src}
                alt={image.slug}
                width={100}
                height={100}
                slug={image.slug}
                id={image.id}
              />
            </GridImageFront>
            <GridImageBack onClick={handleClick} id={image.id} />
          </GridImageContainer>
        );
      })}
    </GridContainer>
  );
}
