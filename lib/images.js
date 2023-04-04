import { nanoid } from "nanoid";

const images = [
  { slug: 1, src: "https://picsum.photos/id/0/100/100" },
  { slug: 2, src: "https://picsum.photos/id/50/100/100" },
  { slug: 3, src: "https://picsum.photos/id/100/100/100" },
  { slug: 4, src: "https://picsum.photos/id/151/100/100" },
  { slug: 5, src: "https://picsum.photos/id/200/100/100" },
  { slug: 6, src: "https://picsum.photos/id/250/100/100" },
  { slug: 7, src: "https://picsum.photos/id/300/100/100" },
  { slug: 8, src: "https://picsum.photos/id/350/100/100" },
];

const doubleImages = [...images, ...images];

const shuffledImages = doubleImages
  .map((a) => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map((a) => a[1])
  .map((image) => ({ ...image, id: nanoid() }));

export default shuffledImages;
