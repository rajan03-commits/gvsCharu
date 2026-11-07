
import Link from "next/link";
import { ArrowRight, BookHeart, HandHeart, HeartHandshake, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { hrefFor, type Locale } from "@/app/lib/i18n/locale";

// DRAFT Hindi wording: the NGO must approve it.
// "Visit us" is used instead of "Volunteer" until the NGO confirms it accepts volunteers.
const content = {
  en: {
    heading: "How You Can Help",
    intro: "There are several ways to stand with the children in our care.",
    cards: [
      { icon: HandHeart, title: "Donate", text: "Help cover food, education and care for the children.", cta: "Donate now", path: "/donate" },
      { icon: HeartHandshake, title: "Adopt", text: "Learn how legal adoption works through CARA.", cta: "How adoption works", path: "/adoption" },
      { icon: MapPin, title: "Visit us", text: "Get in touch to know more about our work and our units.", cta: "Contact us", path: "/contact" },
      { icon: BookHeart, title: "Spread the word", text: "Read the stories of hope and share them with friends and family.", cta: "Read the stories", path: "/stories" },
    ],
  },
  hi: {
    heading: "आप कैसे मदद कर सकते हैं",
    intro: "हमारी देखरेख में रह रहे बच्चों के साथ खड़े होने के कई तरीके हैं।",
    cards: [
      { icon: HandHeart, title: "दान करें", text: "बच्चों के भोजन, शिक्षा और देखभाल में सहयोग करें।", cta: "अभी दान करें", path: "/donate" },
      { icon: HeartHandshake, title: "गोद लें", text: "जानिए CARA के माध्यम से विधिसम्मत दत्तक ग्रहण कैसे होता है।", cta: "दत्तक ग्रहण कैसे होता है", path: "/adoption" },
      { icon: MapPin, title: "हमसे मिलें", text: "हमारे कार्य और इकाइयों के बारे में अधिक जानने के लिए संपर्क करें।", cta: "संपर्क करें", path: "/contact" },
      { icon: BookHeart, title: "बात फैलाएँ", text: "आशा की कहानियाँ पढ़ें और मित्रों व परिवार के साथ साझा करें।", cta: "कहानियाँ पढ़ें", path: "/stories" },
    ],
  },
};

export default function HelpCards({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <Section>
      <h2 className="text-2xl font-bold text-foreground md:text-3xl">{t.heading}</h2>
      <p className="mt-3 max-w-2xl text-foreground">{t.intro}</p>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <li key={card.path}>
              <Reveal delay={index * 0.1} className="h-full">
                <Link
                  href={hrefFor(card.path, locale)}
                  className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-lg border border-border bg-background p-6 transition duration-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-safe:hover:-translate-y-1"
                >
                  {/* Accent line that grows across the top on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-left bg-primary transition-transform duration-500 motion-safe:scale-x-0 motion-safe:group-hover:scale-x-100 motion-safe:group-focus-visible:scale-x-100"
                  />
                  {/* Soft shape in the corner that grows on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-surface transition-transform duration-500 motion-safe:group-hover:scale-150"
                  />
                  <span
                    aria-hidden="true"
                    className="relative flex h-14 w-14 items-center justify-center rounded-full bg-surface text-primary ring-4 ring-background transition duration-300 group-hover:bg-primary group-hover:text-white motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-110"
                  >
                    <Icon size={28} />
                  </span>
                  <span className="relative text-lg font-semibold text-foreground">{card.title}</span>
                  <span className="relative text-foreground">{card.text}</span>
                  <span className="relative mt-auto flex items-center gap-2 font-semibold text-primary">
                    {card.cta}
                    <ArrowRight
                      size={18}
                      aria-hidden="true"
                      className="transition-transform duration-300 motion-safe:group-hover:translate-x-1.5"
                    />
                  </span>
                </Link>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}