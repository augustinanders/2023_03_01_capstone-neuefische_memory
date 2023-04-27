import Image from "next/image";
import styled from "styled-components";

export const GridContainer = styled.section`
  max-width: 440px;
  max-height: 440px;
  width: 80vw;
  height: 80vw;
  display: grid;
  grid-gap: 7px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

export const GridImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
  transform: ${({ isRevealed }) =>
    isRevealed ? "rotateY(180deg)" : "rotateY(0)"};
  cursor: pointer;
`;
export const GridImageFront = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
export const GridImageBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  background-color: var(--color-primary);
`;

export const GridImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const GridImagePlaceholder = styled.div``;
