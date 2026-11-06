import { socials } from "@/app/lib/socials";
import type { Locale } from "@/app/lib/i18n/locale";

const text = {
  en: {
    group: "Follow us on social media",
    newTab: "(opens in a new tab)",
    soon: "link coming soon",
  },
  hi: {
    group: "सोशल मीडिया पर हमसे जुड़ें",
    newTab: "(नए टैब में खुलता है)",
    soon: "लिंक जल्द उपलब्ध होगा",
  },
};

function Icon({ name }: { name: string }) {
  if (name === "x") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
      {name === "instagram" ? (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </>
      ) : (
        <>
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </>
      )}
    </svg>
  );
}

const boxClass = "flex h-10 w-10 items-center justify-center rounded-md";

export default function SocialLinks({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const t = text[locale];

  return (
    <ul aria-label={t.group} className={`flex items-center gap-1 ${className}`}>
      {socials.map((item) =>
        item.href ? (
          <li key={item.key}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.label} ${t.newTab}`}
              className={`${boxClass} text-foreground transition-colors hover:bg-surface hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
            >
              <Icon name={item.key} />
            </a>
          </li>
        ) : (
          // Placeholder: shown but not clickable until the link is added in app/lib/socials.ts
          <li key={item.key} aria-hidden="true">
            <span
              title={`${item.label}: ${t.soon}`}
              className={`${boxClass} text-foreground opacity-50`}
            >
              <Icon name={item.key} />
            </span>
          </li>
        ),
      )}
    </ul>
  );
}