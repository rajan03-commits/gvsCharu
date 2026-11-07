
"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pause, Play } from "lucide-react";
import { galleryPhotos } from "@/app/lib/gallery";
import { galleryPhotosHi } from "@/app/lib/hi/gallery";
import { hrefFor, type Locale } from "@/app/lib/i18n/locale";

// DRAFT Hindi wording: the NGO must approve it.
const text = {
  en: {
    heading: "A Look Inside",
    intro:
      "Take a look around our premises, where children are cared for, learn and play. These photos show rooms and facilities only.",
    viewAll: "View all photos",
    pause: "Pause the photo strip",
    play: "Play the photo strip",
  },
  hi: {
    heading: "हमारे परिसर की झलक",
    intro:
      "देखिए हमारा परिसर, जहाँ बच्चों की देखभाल होती है, वे पढ़ते और खेलते हैं। ये तस्वीरें केवल कमरों और सुविधाओं को दिखाती हैं।",
    viewAll: "सभी तस्वीरें देखें",
    pause: "तस्वीरों की पट्टी रोकें",
    play: "तस्वीरों की पट्टी चलाएँ",
  },
};

// True when the visitor has asked their device for less motion
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia("(prefers-reduced-motion: reduce)");
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

// A slowly sliding row of facility photos (rooms and spaces only, no children).
// It pauses when the mouse is over it and has a pause button. With reduced motion it
// does not move and can be scrolled by hand instead.
export default function PhotoStrip({ locale }: { locale: Locale }) {
  const t = text[locale];
  const photos = locale === "hi" ? galleryPhotosHi : galleryPhotos;
  const reducedMotion = usePrefersReducedMotion();
  const trackRef = useRef<HTMLUListElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const [paused, setPaused] = useState(false);

  // The track holds the photos twice, so sliding it by half loops with no jump
  useEffect(() => {
    const track = trackRef.current;
    if (!track || reducedMotion) return;

    const animation = track.animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(-50%)" }],
      { duration: photos.length * 6000, iterations: Infinity, easing: "linear" },
    );
    animationRef.current = animation;
    return () => {
      animation.cancel();
      animationRef.current = null;
    };
  }, [photos.length, reducedMotion]);

  useEffect(() => {
    const animation = animationRef.current;
    if (!animation) return;
    if (paused) animation.pause();
    else animation.play();
  }, [paused, reducedMotion]);

  const items = (copy: boolean) =>
    photos.map((photo) => (
      <li
        key={`${copy ? "copy-" : ""}${photo.src}`}
        aria-hidden={copy || undefined}
        className="mr-4 shrink-0"
      >
        <figure className="relative h-48 w-64 overflow-hidden rounded-lg border border-border bg-surface sm:h-56 sm:w-72">
          <Image
            src={photo.src}
            alt={copy ? "" : photo.alt}
            fill
            sizes="288px"
            className="object-cover"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black/55 px-3 py-1.5 text-sm text-white">
            {photo.caption}
          </figcaption>
        </figure>
      </li>
    ));

  return (
    <section
      aria-labelledby="photo-strip-heading"
      className="overflow-hidden bg-background py-12 md:py-16"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-4 px-6">
        <div className="max-w-2xl">
          <h2
            id="photo-strip-heading"
            className="text-2xl font-bold text-foreground md:text-3xl"
          >
            {t.heading}
          </h2>
          <p className="mt-3 text-foreground">{t.intro}</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={hrefFor("/gallery", locale)}
            className="font-semibold text-primary underline underline-offset-4 hover:text-primary-hover"
          >
            {t.viewAll}
          </Link>
          {!reducedMotion && (
            <button
              type="button"
              aria-pressed={paused}
              aria-label={paused ? t.play : t.pause}
              onClick={() => setPaused(!paused)}
              className="rounded-md border border-border p-2 text-foreground transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {paused ? (
                <Play size={16} aria-hidden="true" />
              ) : (
                <Pause size={16} aria-hidden="true" />
              )}
            </button>
          )}
        </div>
      </div>

      <div
        className={`mt-8 ${reducedMotion ? "overflow-x-auto px-6" : "overflow-hidden"}`}
        tabIndex={reducedMotion ? 0 : undefined}
        role={reducedMotion ? "region" : undefined}
        aria-label={reducedMotion ? t.heading : undefined}
        onMouseEnter={() => animationRef.current?.pause()}
        onMouseLeave={() => {
          if (!paused) animationRef.current?.play();
        }}
      >
        <ul ref={trackRef} className="flex w-max">
          {items(false)}
          {!reducedMotion && items(true)}
        </ul>
      </div>
    </section>
  );
}