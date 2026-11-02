import type { Metadata } from "next";
import {
  BadgeCheck,
  Check,
  ClipboardCheck,
  HeartHandshake,
  House,
  IdCard,
  Scale,
  UserRoundSearch,
} from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import ChecklistCard from "@/components/ChecklistCard";
import CommitmentArt from "@/components/CommitmentArt";
import FamilyHomeArt from "@/components/FamilyHomeArt";
import PageHeader from "@/components/PageHeader";
import PhotoSlot from "@/components/PhotoSlot";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { adoptionImage } from "@/app/lib/adoptionVisuals";
import {
  adoptionIntro,
  adoptionSteps,
  beginJourney,
  closingMessage,
  closingTagline,
  commitments,
  commitmentsIntro,
  documents,
  documentsNote,
  eligibilityNote,
  faqs,
  officialLinks,
} from "@/app/lib/adoption";

export const metadata: Metadata = {
  title: "Adoption Procedure",
  description:
    "Learn the step-by-step adoption procedure in Gonda, the documents needed, and how to begin your journey through the official CARINGS and CARA portals.",
};

const stepIcons = [
  IdCard,
  ClipboardCheck,
  UserRoundSearch,
  HeartHandshake,
  House,
  Scale,
  BadgeCheck,
];

export default function AdoptionPage() {
  return (
    <>
      <PageHeader
        title="Child Adoption Procedure in Gonda"
        crumb="Adoption Procedure"
      />

      {/* Introduction */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[3fr_2fr]">
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Giving Every Child the Love of a Family
            </h2>
            {adoptionIntro.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`mt-4 text-foreground ${index === 0 ? "text-lg" : ""}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <Reveal>
            <FamilyHomeArt className="mx-auto h-auto w-full max-w-xs lg:max-w-none" />
          </Reveal>
        </div>
      </Section>

      {/* The process */}
      <Section tone="surface">
        <div className="flex flex-col gap-8 rounded-2xl border border-primary/10 bg-background p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              A guided, child-centred process
            </p>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              Step-by-Step Adoption Procedure
            </h2>
            <p className="mt-3 text-foreground">
              Each step follows the official process and keeps the child’s safety and well-being at the centre.
            </p>
          </div>
          <div
            aria-hidden="true"
            className="flex items-center gap-2 self-start md:self-auto"
          >
            {[IdCard, ClipboardCheck, HeartHandshake, Scale].map((Icon, index) => (
              <span
                key={index}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-primary ring-1 ring-primary/10 md:h-14 md:w-14"
              >
                <Icon size={22} strokeWidth={1.8} />
              </span>
            ))}
          </div>
        </div>
        <ol className="mt-8 space-y-6">
          {adoptionSteps.map((step, index) => {
            const Icon = stepIcons[index];

            return (
              <li key={step.title}>
                <Reveal className="flex items-start gap-5">
                  <span
                    aria-hidden="true"
                    className="mt-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white"
                  >
                    {index + 1}
                  </span>
                  <div className="flex-1 rounded-lg bg-background p-6 shadow-sm ring-1 ring-foreground/5">
                    <div className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-primary"
                      >
                        <Icon size={21} strokeWidth={1.8} />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-foreground">{step.text}</p>
                        {step.link && (
                          <a
                            href={step.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-block font-semibold text-primary underline underline-offset-4 hover:text-primary-hover"
                          >
                            {step.link.label}
                            <span className="sr-only"> (opens in a new tab)</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* Eligibility and documents */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start">
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-lg border border-border p-8">
                <h2 className="text-2xl font-bold text-foreground">
                  Who Can Adopt
                </h2>
                <p className="mt-4 text-foreground">{eligibilityNote}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ChecklistCard
                title="Documents Needed"
                note={documentsNote}
                items={documents}
              />
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:sticky lg:top-8">
            <PhotoSlot
              src={adoptionImage.src}
              alt={adoptionImage.alt}
              position={adoptionImage.position}
              placeholder="[Photo: a calm, welcoming home scene. No people.]"
              className="aspect-[4/3] lg:aspect-[3/4]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
        </div>
      </Section>

      {/* Ethical and legal adoption */}
      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Our Commitment to Ethical and Legal Adoption
            </h2>
            {commitmentsIntro.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-foreground">
                {paragraph}
              </p>
            ))}
            <ul className="mt-6 space-y-3">
              {commitments.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-foreground"
                >
                  <Check
                    size={18}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-primary"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal>
            <CommitmentArt />
          </Reveal>
        </div>
      </Section>

      {/* Begin your journey */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Begin Your Adoption Journey
          </h2>
          <p className="mt-4 text-lg text-foreground">{beginJourney}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            {officialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {link.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQs: hidden until the NGO sends questions */}
      {faqs.length > 0 && (
        <Section tone="surface">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-lg border border-border bg-background p-5"
              >
                <summary className="cursor-pointer font-semibold text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  {faq.question}
                </summary>
                <p className="mt-3 text-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Section>
      )}

      {/* Our message and next step */}
      <Section tone="primary">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              {closingTagline}
            </h2>
            <p className="mt-4 text-white">{closingMessage}</p>
          </div>
          <ButtonLink href="/contact" variant="light">
            Contact Us
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
