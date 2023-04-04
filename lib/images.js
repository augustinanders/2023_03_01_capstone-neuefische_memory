const images_a = [
  { slug_a: "1", src: "https://picsum.photos/id/0/100/100" },
  { slug_a: "2", src: "https://picsum.photos/id/50/100/100" },
  { slug_a: "3", src: "https://picsum.photos/id/100/100/100" },
  { slug_a: "4", src: "https://picsum.photos/id/151/100/100" },
  { slug_a: "5", src: "https://picsum.photos/id/200/100/100" },
  { slug_a: "6", src: "https://picsum.photos/id/250/100/100" },
  { slug_a: "7", src: "https://picsum.photos/id/300/100/100" },
  { slug_a: "8", src: "https://picsum.photos/id/350/100/100" },
];

/* const doubleImages = [...images, ...images]; */

const images_b = images_a.map((image) => {
  return { slug_b: image.slug_a, src: image.src };
});

const doubleImages = [...images_a, ...images_b];

export default doubleImages;
