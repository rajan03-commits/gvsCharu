"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import PhotoSlot from "@/components/PhotoSlot";
import type { HeroSlide } from "@/app/lib/homeSlides";

// How long each slide stays, in milliseconds (5000 = 5 seconds)
const SLIDE_MS = 5000;

// A splash-shaped outline with a few small dots. The numbers are positions
// as a fraction (0 to 1) of the photo's width and height.
const SPLASH_PATH =
  "M0.9395,0.5664C0.9338,0.6054 0.9014,0.6419 0.8810,0.6773C0.8607,0.7128 0.8482,0.7567 0.8176,0.7793C0.7871,0.8018 0.7330,0.7971 0.6979,0.8128C0.6627,0.8285 0.6401,0.8621 0.6067,0.8733C0.5733,0.8844 0.5325,0.8840 0.4973,0.8796C0.4620,0.8752 0.4296,0.8572 0.3954,0.8471C0.3611,0.8370 0.3180,0.8396 0.2917,0.8191C0.2654,0.7986 0.2585,0.7523 0.2376,0.7240C0.2168,0.6958 0.1824,0.6786 0.1666,0.6494C0.1508,0.6201 0.1521,0.5834 0.1429,0.5487C0.1336,0.5140 0.1190,0.4807 0.1112,0.4412C0.1034,0.4018 0.0919,0.3555 0.0961,0.3120C0.1003,0.2686 0.1075,0.2097 0.1365,0.1804C0.1655,0.1512 0.2275,0.1464 0.2700,0.1364C0.3125,0.1265 0.3528,0.1215 0.3916,0.1208C0.4304,0.1200 0.4675,0.1252 0.5027,0.1319C0.5378,0.1385 0.5722,0.1461 0.6023,0.1607C0.6324,0.1753 0.6550,0.2015 0.6833,0.2193C0.7116,0.2371 0.7364,0.2505 0.7722,0.2676C0.8079,0.2846 0.8741,0.2924 0.8979,0.3217C0.9218,0.3510 0.9083,0.4026 0.9153,0.4433C0.9222,0.4841 0.9452,0.5274 0.9395,0.5664ZM0.9220,0.2000A0.022,0.022 0 1 0 0.8780,0.2000A0.022,0.022 0 1 0 0.9220,0.2000ZM0.9630,0.3400A0.013,0.013 0 1 0 0.9370,0.3400A0.013,0.013 0 1 0 0.9630,0.3400ZM0.8540,0.0900A0.014,0.014 0 1 0 0.8260,0.0900A0.014,0.014 0 1 0 0.8540,0.0900ZM0.1000,0.8000A0.02,0.02 0 1 0 0.0600,0.8000A0.02,0.02 0 1 0 0.1000,0.8000ZM0.1520,0.9100A0.012,0.012 0 1 0 0.1280,0.9100A0.012,0.012 0 1 0 0.1520,0.9100ZM0.9470,0.7800A0.017,0.017 0 1 0 0.9130,0.7800A0.017,0.017 0 1 0 0.9470,0.7800ZM0.7930,0.9300A0.013,0.013 0 1 0 0.7670,0.9300A0.013,0.013 0 1 0 0.7930,0.9300ZM0.0610,0.3000A0.011,0.011 0 1 0 0.0390,0.3000A0.011,0.011 0 1 0 0.0610,0.3000Z";

const splash = { clipPath: "url(#hero-splash)" };

// Round white arrow buttons that turn green on hover
const arrowClass =
  "absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-background text-primary shadow-lg ring-1 ring-border transition-colors hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

// Screen-reader labels. {n} and {total} are filled in below.
// Plain strings (not functions), so a server page can pass Hindi ones in.
const defaultLabels = {
  region: "Featured messages",
  previous: "Previous slide",
  next: "Next slide",
  goTo: "Go to slide {n}",
  slideOf: "{n} of {total}",
};

function fill(template: string, n: number, total?: number) {
  return template.replace("{n}", String(n)).replace("{total}", String(total));
}

export default function HeroSlider({
  slides,
  note,
  labels = defaultLabels,
}: {
  slides: HeroSlide[];
  note: string;
  labels?: typeof defaultLabels;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  // Keeps rotating. Stops while the visitor hovers or focuses inside the
  // banner, and for visitors who have "reduce motion" switched on.
  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), SLIDE_MS);
    return () => clearInterval(timer);
  }, [paused, count]);

  const go = (next: number) => setIndex((next + count) % count);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={labels.region}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* The splash outline, defined once and reused by every slide */}
      <svg
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
        className="absolute"
      >
        <defs>
          <clipPath id="hero-splash" clipPathUnits="objectBoundingBox">
            <path d={SPLASH_PATH} />
          </clipPath>
        </defs>
      </svg>

      {slides.map((slide, i) => {
        const Heading = i === 0 ? "h1" : "h2";
        return (
          <div
            key={slide.title}
            role="group"
            aria-roledescription="slide"
            aria-label={fill(labels.slideOf, i + 1, count)}
            aria-hidden={i !== index}
            className={
              i === index
                ? "grid items-center gap-10 lg:grid-cols-2"
                : "hidden"
            }
          >
            <div>
              <Heading>
                <span className="block text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  {slide.kicker}
                </span>
                <span className="sr-only">: </span>
                <span className="mt-3 block text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl">
                  {slide.title}
                </span>
              </Heading>
              <div className="mt-8 flex flex-wrap gap-4">
                {slide.buttons.map((button) => (
                  <ButtonLink
                    key={button.href}
                    href={button.href}
                    variant={button.variant}
                  >
                    {button.label}
                  </ButtonLink>
                ))}
              </div>
            </div>

            {/* Photo in a splash-shaped frame, with a peach copy behind it,
                and an arrow button on each side */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div
                aria-hidden="true"
                style={splash}
                className="absolute inset-0 translate-x-[3%] translate-y-[3%] bg-accent"
              />
              <div style={splash} className="relative">
                <PhotoSlot
                  src={slide.image.src}
                  alt={slide.image.alt}
                  position={slide.image.position}
                  placeholder="[Photo]"
                  className="aspect-square"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  preload={i === 0}
                />
              </div>

              {count > 1 && (
                <>
                  <button
                    type="button"
                    aria-label={labels.previous}
                    onClick={() => go(index - 1)}
                    className={`${arrowClass} left-0`}
                  >
                    <ChevronLeft size={24} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label={labels.next}
                    onClick={() => go(index + 1)}
                    className={`${arrowClass} right-0`}
                  >
                    <ChevronRight size={24} aria-hidden="true" />
                  </button>
                </>
              )}
            </div>
          </div>
        );
      })}

      {count > 1 && (
        <div className="mt-8 flex items-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              aria-label={fill(labels.goTo, i + 1)}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                i === index ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
      )}

      <p className="mt-4 text-sm text-foreground">{note}</p>
    </div>
  );
}