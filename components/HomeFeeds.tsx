import { Play } from "lucide-react";
import Section from "@/components/Section";
import { reviews, updates, videos } from "@/app/lib/homeFeeds";
import type { Locale } from "@/app/lib/i18n/locale";

// DRAFT Hindi wording: the NGO must approve it.
const text = {
  en: {
    updates: "Latest Updates",
    readMore: "Read more",
    videos: "Watch Our Videos",
    watch: "Watch on YouTube",
    reviews: "Public Reviews",
    newTab: "(opens in a new tab)",
    date: "en-IN",
  },
  hi: {
    updates: "ताज़ा समाचार",
    readMore: "और पढ़ें",
    videos: "हमारे वीडियो",
    watch: "YouTube पर देखें",
    reviews: "जन प्रतिक्रियाएँ",
    newTab: "(नए टैब में खुलता है)",
    date: "hi-IN",
  },
};

const headingClass = "text-2xl font-bold text-foreground md:text-3xl";

function formatDate(date: string, locale: Locale) {
  return new Date(date).toLocaleDateString(text[locale].date, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function LatestUpdates({ locale }: { locale: Locale }) {
  if (updates.length === 0) return null;
  const t = text[locale];

  return (
    <Section tone="surface">
      <h2 className={headingClass}>{t.updates}</h2>
      <ul className="mt-8 grid gap-6 md:grid-cols-3">
        {updates.map((item) => (
          <li
            key={`${item.date}-${item.title.en}`}
            className="rounded-lg bg-background p-6"
          >
            <time dateTime={item.date} className="text-sm font-semibold text-primary">
              {formatDate(item.date, locale)}
            </time>
            <h3 className="mt-2 text-lg font-semibold text-foreground">
              {item.title[locale]}
            </h3>
            <p className="mt-2 text-foreground">{item.text[locale]}</p>
            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-semibold text-primary underline underline-offset-4 hover:text-primary-hover"
              >
                {t.readMore}
                <span className="sr-only">
                  {" "}
                  {item.title[locale]} {t.newTab}
                </span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function VideoLinks({ locale }: { locale: Locale }) {
  if (videos.length === 0) return null;
  const t = text[locale];

  return (
    <Section>
      <h2 className={headingClass}>{t.videos}</h2>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <li key={video.id}>
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span className="relative block aspect-video overflow-hidden rounded-lg border border-border bg-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/70 text-white transition-transform motion-safe:group-hover:scale-110">
                    <Play size={24} fill="currentColor" />
                  </span>
                </span>
              </span>
              <span className="mt-3 block font-semibold text-foreground">
                {video.title[locale]}
              </span>
              <span className="block text-sm text-primary">
                {t.watch}
                <span className="sr-only"> {t.newTab}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Reviews({ locale }: { locale: Locale }) {
  if (reviews.length === 0) return null;
  const t = text[locale];

  return (
    <Section>
      <h2 className={headingClass}>{t.reviews}</h2>
      <ul className="mt-8 grid gap-6 md:grid-cols-3">
        {reviews.map((review) => (
          <li
            key={`${review.name}-${review.quote.en}`}
            className="rounded-lg border border-border p-6"
          >
            <figure>
              <blockquote className="text-foreground">
                “{review.quote[locale]}”
              </blockquote>
              <figcaption className="mt-4 font-semibold text-foreground">
                {review.name}
                {review.role && (
                  <span className="block text-sm font-normal">
                    {review.role[locale]}
                  </span>
                )}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}