import type { Photo } from "@/app/lib/aboutVisuals";

export const heroImage: Photo = {
  src: "/images/hero.jpg",
  alt: "Front of the Charu Niwas building in Gonda, under a blue sky.",
  position: "center",
};

// Stock photos shown on Home and in the green Donate strips.
export const homeImages: { about: Photo; strip: Photo } = {
  about: {
    src: "/images/home-about.jpg",
    alt: "Children drawing and painting together at a wooden table.",
    position: "center",
  },
  strip: {
    src: "/images/home-strip-1.jpg",
    alt: "",
    position: "center",
  },
};