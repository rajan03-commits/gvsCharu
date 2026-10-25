import ButtonLink from "@/components/ButtonLink";
import ChecklistCard from "@/components/ChecklistCard";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import {
  adoptionSteps,
  documents,
  eligibility,
  faqs,
  officialLink,
} from "@/app/lib/adoption";

export default function AdoptionPage() {
  return (
    <>
      <PageHeader
        title="Child Adoption Procedure in Gonda"
        crumb="Adoption Procedure"
      />

      {/* Introduction */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            How to Adopt
          </h2>
          <p className="mt-4 text-lg text-foreground">
            [Introduction: two or three sentences from the NGO.]
          </p>
          <p className="mt-4 text-foreground">
            [Note: the process must follow the official adoption
            authority&apos;s guidelines. Wording to be confirmed with the NGO.]
          </p>
          {officialLink.href ? (
            <a
              href={officialLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-semibold text-primary underline underline-offset-4 hover:text-primary-hover"
            >
              {officialLink.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <p className="mt-4 rounded-md border border-dashed border-muted p-4 text-foreground">
              [Link to the official adoption authority&apos;s page, to be sent
              by the NGO.]
            </p>
          )}
        </div>
      </Section>

      {/* The process */}
      <Section tone="surface">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          The Process, Step by Step
        </h2>
        <ol className="mt-8 space-y-6">
          {adoptionSteps.map((step, index) => (
            <li key={step.title} className="flex items-start gap-5">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white"
              >
                {index + 1}
              </span>
              <div className="flex-1 rounded-lg bg-background p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Eligibility and documents */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <ChecklistCard title="Who Can Adopt" items={eligibility} />
          <ChecklistCard title="Documents Needed" items={documents} />
        </div>
      </Section>

      {/* FAQs */}
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

      {/* Next step */}
      <Section tone="primary">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Ready to begin? Get in touch with us.
          </h2>
          <ButtonLink href="/contact" variant="light">
            Contact Us
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}