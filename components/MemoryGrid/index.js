import shuffledImages from "../../lib/images";
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
const GridImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
console.log(shuffledImages);

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
        console.log(event.target.id);
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
          <GridImage
            src={image.src}
            alt={image.slug}
            width={100}
            height={100}
            slug={image.slug}
            key={image.id}
            id={image.id}
            style={{ opacity: image.isRevealed ? 1 : 0 }}
            onClick={handleClick}
          />
        );
      })}
    </GridContainer>
  );
}
