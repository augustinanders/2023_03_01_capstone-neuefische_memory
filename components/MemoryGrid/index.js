import images from "../../lib/images";
import Image from "next/image";
import styled from "styled-components";

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

export default function MemoryGrid() {
  return (
    <GridContainer>
      {images.map((image) => {
        return (
          <GridImage
            src={image.src}
            alt={image.slug}
            width={100}
            height={100}
            slug={image.slug}
            key={image.slug}
          />
        );
      })}
    </GridContainer>
  );
}
