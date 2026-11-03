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
import { hi } from "@/app/lib/i18n/hi";
import { hrefFor } from "@/app/lib/i18n/locale";
import {
  adoptionDescriptionHi,
  adoptionIntroHi,
  adoptionLabelsHi as t,
  adoptionStepsHi,
  beginJourneyHi,
  closingMessageHi,
  closingTaglineHi,
  commitmentsHi,
  commitmentsIntroHi,
  documentsHi,
  documentsNoteHi,
  eligibilityNoteHi,
  faqsHi,
  officialLinksHi,
} from "@/app/lib/hi/adoption";

export const metadata: Metadata = {
  title: hi.nav.adoption,
  description: adoptionDescriptionHi,
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

export default function HindiAdoptionPage() {
  return (
    <>
      <PageHeader
        title={t.pageTitle}
        crumb={hi.nav.adoption}
        homeLabel={hi.common.breadcrumbHome}
        homeHref="/hi"
        breadcrumbLabel={hi.a11y.breadcrumb}
      />

      {/* Introduction */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[3fr_2fr]">
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              {t.introHeading}
            </h2>
            {adoptionIntroHi.map((paragraph, index) => (
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
            {/* No uppercase or letter-spacing: they do nothing for Devanagari */}
            <p className="text-sm font-semibold text-primary">
              {t.processKicker}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              {t.processHeading}
            </h2>
            <p className="mt-3 text-foreground">{t.processText}</p>
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
          {adoptionStepsHi.map((step, index) => {
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
                            <span className="sr-only">
                              {" "}
                              {hi.a11y.opensInNewTab}
                            </span>
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
                  {t.whoCanAdopt}
                </h2>
                <p className="mt-4 text-foreground">{eligibilityNoteHi}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ChecklistCard
                title={t.documentsNeeded}
                note={documentsNoteHi}
                items={documentsHi}
              />
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:sticky lg:top-8">
            <PhotoSlot
              src={adoptionImage.src}
              alt={adoptionImage.alt}
              position={adoptionImage.position}
              placeholder="[Photo]"
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
              {t.commitmentHeading}
            </h2>
            {commitmentsIntroHi.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-foreground">
                {paragraph}
              </p>
            ))}
            <ul className="mt-6 space-y-3">
              {commitmentsHi.map((item) => (
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
            <CommitmentArt text={t.commitmentArt} />
          </Reveal>
        </div>
      </Section>

      {/* Begin your journey */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            {t.beginHeading}
          </h2>
          <p className="mt-4 text-lg text-foreground">{beginJourneyHi}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            {officialLinksHi.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {link.label}
                <span className="sr-only"> {hi.a11y.opensInNewTab}</span>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQs: hidden until the NGO sends questions */}
      {faqsHi.length > 0 && (
        <Section tone="surface">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            {t.faqHeading}
          </h2>
          <div className="mt-8 space-y-4">
            {faqsHi.map((faq) => (
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
              {closingTaglineHi}
            </h2>
            <p className="mt-4 text-white">{closingMessageHi}</p>
          </div>
          <ButtonLink href={hrefFor("/contact", "hi")} variant="light">
            {t.contactUs}
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}