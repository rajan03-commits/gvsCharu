"use client";

import { useState } from "react";
import PhotoSlot from "@/components/PhotoSlot";
import type { GalleryPhoto } from "@/app/lib/gallery";

export default function GalleryGrid({
  photos,
  allLabel = "All",
  filterLabel = "Filter photos by category",
}: {
  photos: GalleryPhoto[];
  allLabel?: string;
  filterLabel?: string;
}) {
  const categories = Array.from(new Set(photos.map((p) => p.category)));
  const [active, setActive] = useState<string | null>(null);
  const shown = active ? photos.filter((p) => p.category === active) : photos;

  const pill = (selected: boolean) =>
    `rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
      selected
        ? "border-primary bg-primary text-white"
        : "border-border text-foreground hover:border-primary hover:text-primary"
    }`;

  return (
    <div>
      {categories.length > 1 && (
        <div
          role="group"
          aria-label={filterLabel}
          className="mb-8 flex flex-wrap gap-2"
        >
          <button
            type="button"
            aria-pressed={active === null}
            onClick={() => setActive(null)}
            className={pill(active === null)}
          >
            {allLabel}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={active === category}
              onClick={() => setActive(category)}
              className={pill(active === category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((photo) => (
          <li key={photo.src}>
            <figure>
              <PhotoSlot
                src={photo.src}
                alt={photo.alt}
                position={photo.position}
                placeholder="[Photo]"
                className="aspect-4/3 rounded-lg"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <figcaption className="mt-2 text-sm text-foreground">
                {photo.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}