"use client";

import { useState } from "react";
import PhotoSlot from "@/components/PhotoSlot";
import type { GalleryPhoto } from "@/app/lib/gallery";

const ALL = "All";

export default function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  const [active, setActive] = useState(ALL);

  const categories = [ALL, ...new Set(photos.map((photo) => photo.category))];
  const visible =
    active === ALL ? photos : photos.filter((photo) => photo.category === active);

  return (
    <div>
      {/* Filter: hidden until there are at least two categories */}
      {categories.length > 2 && (
        <div
          role="group"
          aria-label="Filter photos by category"
          className="flex flex-wrap gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={active === category}
              onClick={() => setActive(category)}
              className={`rounded-full border px-5 py-2 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                active === category
                  ? "border-primary bg-primary text-white"
                  : "border-border text-foreground hover:bg-surface"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <ul
        className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${
          categories.length > 2 ? "mt-8" : ""
        }`}
      >
        {visible.map((photo) => (
          <li key={photo.src}>
            <figure>
              <PhotoSlot
                src={photo.src}
                alt={photo.alt}
                position={photo.position}
                placeholder="[Photo]"
                className="aspect-[4/3]"
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