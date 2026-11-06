// FILE PATH: components/NoticeBar.tsx  (new file)
"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Bell, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { courtUpdates } from "@/app/lib/homeFeeds";
import type { Locale } from "@/app/lib/i18n/locale";

// DRAFT Hindi wording: the NGO must approve it.
const text = {
  en: {
    region: "Latest update",
    label: "Latest Update",
    more: "Read more",
    previous: "Previous update",
    next: "Next update",
    pause: "Pause automatic changes",
    play: "Resume automatic changes",
    newTab: "(opens in a new tab)",
    dateLocale: "en-IN",
  },
  hi: {
    region: "ताज़ा सूचना",
    label: "ताज़ा सूचना",
    more: "और पढ़ें",
    previous: "पिछली सूचना",
    next: "अगली सूचना",
    pause: "अपने-आप बदलना रोकें",
    play: "अपने-आप बदलना फिर शुरू करें",
    newTab: "(नए टैब में खुलता है)",
    dateLocale: "hi-IN",
  },
};

const buttonClass =
  "rounded-md border border-border p-2 text-foreground transition-colors hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

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

// A thin bar at the top of the Home page. With several items it changes every
// few seconds, with arrows and a pause button. It is hidden when there are no items.
export default function NoticeBar({ locale }: { locale: Locale }) {
  const t = text[locale];
  const items = courtUpdates;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const rotating = items.length > 1 && !paused && !reducedMotion;

  useEffect(() => {
    if (!rotating) return;
    const timer = setInterval(
      () => setIndex((current) => (current + 1) % items.length),
      7000,
    );
    return () => clearInterval(timer);
  }, [rotating, items.length]);

  if (items.length === 0) return null;

  const item = items[index % items.length];
  const date = item.date
    ? new Date(item.date).toLocaleDateString(t.dateLocale, {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      })
    : "";

  return (
    <section aria-label={t.region} className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 sm:px-6">
        <span className="inline-flex items-center gap-2 rounded bg-primary px-3 py-1 text-sm font-semibold text-white">
          <Bell size={16} aria-hidden="true" />
          {t.label}
        </span>

        <p
          aria-live={rotating ? "off" : "polite"}
          className="min-w-0 flex-1 basis-60 text-foreground"
        >
          {date && (
            <time dateTime={item.date} className="font-semibold">
              {date}:{" "}
            </time>
          )}
          {item.text[locale]}
          {item.href && (
            <>
              {" "}
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline underline-offset-4 hover:text-primary-hover"
              >
                {t.more}
                <span className="sr-only"> {t.newTab}</span>
              </a>
            </>
          )}
        </p>

        {items.length > 1 && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={t.previous}
              onClick={() =>
                setIndex((current) => (current + items.length - 1) % items.length)
              }
              className={buttonClass}
            >
              <ChevronLeft size={16} aria-hidden="true" />
            </button>
            <span className="text-sm text-foreground">
              {(index % items.length) + 1}/{items.length}
            </span>
            <button
              type="button"
              aria-label={t.next}
              onClick={() => setIndex((current) => (current + 1) % items.length)}
              className={buttonClass}
            >
              <ChevronRight size={16} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={paused ? t.play : t.pause}
              aria-pressed={paused}
              onClick={() => setPaused(!paused)}
              className={buttonClass}
            >
              {paused ? (
                <Play size={16} aria-hidden="true" />
              ) : (
                <Pause size={16} aria-hidden="true" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}