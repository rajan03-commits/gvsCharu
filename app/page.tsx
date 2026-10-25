import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import Section from "@/components/Section";
import { impact, steps } from "@/app/lib/home";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-balance text-3xl font-bold leading-tight text-foreground md:text-5xl">
              Child Adoption in Gonda, with Care and Trust
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-foreground">
              GVS Charu Gonda guides families through the adoption procedure, so
              that every child can grow up in a safe and loving home.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/adoption">Adoption Procedure</ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Contact Us
              </ButtonLink>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="flex aspect-[4/3] items-center justify-center rounded-lg bg-surface text-foreground"
          >
            [Photo]
          </div>
        </div>
      </Section>

      {/* Short about */}
      <Section tone="surface">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            About Gramin Vikas Samiti Charu
          </h2>
          <p className="mt-4 text-lg text-foreground">
            Since 1998, Gramin Vikas Samiti Charu has worked for children in
            need of care, protection and welfare, across
            Devipatan Mandal, with its headquarters in Gonda, Uttar Pradesh.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block font-semibold text-primary underline underline-offset-4 hover:text-primary-hover"
          >
            Learn more about us
          </Link>
        </div>
      </Section>

      {/* Mission and vision */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="mt-4 text-foreground">[Mission statement from the NGO]</p>
          </div>
          <div className="rounded-lg border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
            <p className="mt-4 text-foreground">[Vision statement from the NGO]</p>
          </div>
        </div>
      </Section>

      {/* Impact */}
      <Section tone="surface">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Our Impact
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-3">
          {impact.map((item) => (
            <li
              key={item.label}
              className="rounded-lg bg-background p-6 text-center"
            >
              <p className="text-4xl font-bold text-primary">{item.value}</p>
              <p className="mt-2 text-foreground">{item.label}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* How adoption works */}
      <Section>
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          How Adoption Works
        </h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-lg border border-border p-6"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white"
              >
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <ButtonLink href="/adoption" variant="outline">
            See the full procedure
          </ButtonLink>
        </div>
      </Section>

      {/* Success stories teaser */}
      <Section tone="surface">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Stories of Hope
          </h2>
          <blockquote className="mt-6 border-l-4 border-accent pl-6 text-lg text-foreground">
            [One short story excerpt, approved by the NGO and the family. No
            names, photos or details that could identify a child.]
          </blockquote>
          <Link
            href="/stories"
            className="mt-6 inline-block font-semibold text-primary underline underline-offset-4 hover:text-primary-hover"
          >
            Read more stories
          </Link>
        </div>
      </Section>

      {/* Donate banner */}
      <Section tone="primary">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Help a child find a loving home
            </h2>
            <p className="mt-2 max-w-xl text-white">
              Every contribution supports the care and protection of children in
              need.
            </p>
          </div>
          <ButtonLink href="/donate" variant="light">
            Donate Now
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}