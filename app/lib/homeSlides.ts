import type { Photo } from "@/app/lib/aboutVisuals";

export type HeroSlide = {
  kicker: string; // small label above the headline
  title: string; // big headline
  buttons: { label: string; href: string; variant?: "outline" }[];
  image: Photo;
};

// The first slide's heading becomes the page's main heading (h1).
export const heroSlides: HeroSlide[] = [
  {
    kicker: "Child Adoption in Gonda",
    title: "Giving Every Child the Love of a Family",
    buttons: [
      { label: "Adoption Procedure", href: "/adoption" },
      { label: "Contact Us", href: "/contact", variant: "outline" },
    ],
    image: {
      src: "/images/home-slide-1.jpg",
      alt: "Children playing chess together at a table.",
      position: "38% center",
    },
  },
  {
    kicker: "Support Our Work",
    title: "Help a Child Find a Loving Home",
    buttons: [{ label: "Donate Now", href: "/donate" }],
    image: {
      src: "/images/home-slide-2.jpg",
      alt: "A child's hands holding a bunch of yellow dandelions in the grass.",
      position: "42% center",
    },
  },
];