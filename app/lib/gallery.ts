import type { Photo } from "@/app/lib/aboutVisuals";

export type GalleryPhoto = Photo & {
  category: string;
  caption: string;
};

// Captions describe only what the photo shows. The NGO must approve them.
export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/images/gallery/building-entrance.jpg",
    alt: "The entrance gate of the care institution with its name boards.",
    caption: "The entrance",
    category: "Our premises",
  },
  {
    src: "/images/gallery/garden-trampoline.jpg",
    alt: "A mango tree and a trampoline with a safety net on the lawn.",
    caption: "Garden and play area",
    category: "Our premises",
  },
  {
    src: "/images/gallery/dormitory-1.jpg",
    alt: "A bright room with rows of beds covered in red printed sheets.",
    caption: "A dormitory",
    category: "Living spaces",
  },
  {
    src: "/images/gallery/dormitory-2.jpg",
    alt: "A long room with beds along the wall and windows on one side.",
    caption: "A dormitory",
    category: "Living spaces",
  },
  {
    src: "/images/gallery/play-room.jpg",
    alt: "A room with carrom boards and rugs on the floor.",
    caption: "Play room",
    category: "Living spaces",
  },
  {
    src: "/images/gallery/nursery-cots.jpg",
    alt: "Metal cots with a colourful bedsheet and soft toys on the wall.",
    caption: "Nursery",
    category: "Care and health",
  },
  {
    src: "/images/gallery/nursery-room.jpg",
    alt: "A baby warmer and a first-aid box in a care room.",
    caption: "Infant care room",
    category: "Care and health",
  },
  {
    src: "/images/gallery/health-room.jpg",
    alt: "A medical room with an examination bed and a first-aid box.",
    caption: "Health room",
    category: "Care and health",
  },
  {
    src: "/images/gallery/learning-hall-1.jpg",
    alt: "A hall with small desks and chairs and a row of computers.",
    caption: "Learning hall",
    category: "Learning and skills",
  },
  {
    src: "/images/gallery/learning-hall-2.jpg",
    alt: "A hall with desks, chairs and computers along the back wall.",
    caption: "Learning hall",
    category: "Learning and skills",
  },
  {
    src: "/images/gallery/vocational-sewing.jpg",
    alt: "Two sewing machines on tables in a workshop area.",
    caption: "Sewing and skills corner",
    category: "Learning and skills",
  },
  {
    src: "/images/gallery/dining-hall-1.jpg",
    alt: "A dining hall with long tables and black chairs.",
    caption: "Dining hall",
    category: "Dining",
  },
  {
    src: "/images/gallery/dining-hall-2.jpg",
    alt: "A long dining table with orange chairs under a metal roof.",
    caption: "Dining hall",
    category: "Dining",
  },
  {
    src: "/images/gallery/dining-hall-3.jpg",
    alt: "Orange chairs along a long dining table.",
    caption: "Dining hall",
    category: "Dining",
  },
];

// Shown under the grid. Leave empty until the NGO approves wording.
export const galleryNote = "";