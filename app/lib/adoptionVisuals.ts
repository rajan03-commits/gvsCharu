import type { Photo } from "@/app/lib/aboutVisuals";

// Decorative, so alt is "".
// On desktop the box has the same tall shape as the picture, so position does nothing there.
// On phones the box is wider than the picture, so "center 80%" keeps the plant in view.
export const adoptionImage: Photo = {
  src: "/images/adoption-side.jpg",
  alt: "",
  position: "center 80%",
};