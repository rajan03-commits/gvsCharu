export type GalleryPhoto = {
  src: string; // e.g. "/images/gallery/annual-day.jpg"
  alt: string; // describes the photo for screen readers
  caption: string;
  category: string; // e.g. "Events", "Awards", "Activities"
  position?: string; // optional crop focus, e.g. "center 30%"
};

// Empty until the NGO sends approved photos. No identifiable children.
export const galleryPhotos: GalleryPhoto[] = [];


// Shown under the photos once the NGO approves the wording in writing.
// Leave "" to hide it.
export const galleryNote = "";
