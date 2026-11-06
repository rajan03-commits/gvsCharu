
import { CalendarDays, Download } from "lucide-react";
import { events } from "@/app/lib/events";
import type { Locale } from "@/app/lib/i18n/locale";

// DRAFT Hindi wording: the NGO must approve it.
const text = {
  en: {
    download: "Download PDF",
    soon: "PDF coming soon.",
    none: "There are no events or notices at the moment. Please check back soon.",
    noDate: "[Date]",
    dateLocale: "en-IN",
  },
  hi: {
    download: "PDF डाउनलोड करें",
    soon: "PDF जल्द उपलब्ध होगा।",
    none: "अभी कोई कार्यक्रम या सूचना नहीं है। कृपया कुछ समय बाद फिर देखें।",
    noDate: "[तिथि]",
    dateLocale: "hi-IN",
  },
};

function formatDate(date: string, locale: Locale) {
  return new Date(date).toLocaleDateString(text[locale].dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function EventsList({ locale }: { locale: Locale }) {
  const t = text[locale];

  if (events.length === 0) {
    return (
      <p className="mt-8 rounded-lg border border-border p-6 text-foreground">
        {t.none}
      </p>
    );
  }

  return (
    <ul className="mt-8 grid gap-6 md:grid-cols-2">
      {events.map((event) => (
        <li
          key={`${event.title.en}-${event.date}`}
          className="flex flex-col rounded-lg border border-border p-6"
        >
          <span
            aria-hidden="true"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-primary"
          >
            <CalendarDays size={24} />
          </span>
          <h2 className="mt-4 text-xl font-bold text-foreground">
            {event.title[locale]}
          </h2>
          <p className="mt-1 font-semibold text-primary">
            {event.date ? (
              <time dateTime={event.date}>{formatDate(event.date, locale)}</time>
            ) : (
              t.noDate
            )}
          </p>
          <p className="mt-3 text-foreground">{event.summary[locale]}</p>

          <div className="mt-auto pt-6">
            {event.file ? (
              <a
                href={event.file}
                download
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Download size={18} aria-hidden="true" />
                {t.download}
                <span className="sr-only">: {event.title[locale]}</span>
              </a>
            ) : (
              <p className="text-sm text-foreground">{t.soon}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}