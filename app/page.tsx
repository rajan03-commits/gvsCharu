import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";
import DonateBanner from "@/components/DonateBanner";
import MissionVision from "@/components/MissionVision";
import PhotoSlot from "@/components/PhotoSlot";
import Section from "@/components/Section";
import { impact } from "@/app/lib/home";
import { heroImage } from "@/app/lib/homeVisuals";
import { adoptionSteps } from "@/app/lib/adoption";
import { aboutStory } from "@/app/lib/about";

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
              Gramin Vikas Samiti Charu guides families through the adoption
              procedure, so that every child can grow up in a safe and loving
              home.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/adoption">Adoption Procedure</ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Contact Us
              </ButtonLink>
            </div>
          </div>
          <PhotoSlot
            src={heroImage.src}
            alt={heroImage.alt}
            position={heroImage.position}
            placeholder="[Photo]"
            preload
          />
        </div>
      </Section>

      {/* Short about */}
      <Section tone="surface">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            About Gramin Vikas Samiti Charu
          </h2>
          <p className="mt-4 text-lg text-foreground">{aboutStory[0]}</p>
          <Link
            href="/about"
            className="mt-6 inline-block font-semibold text-primary underline underline-offset-4 hover:text-primary-hover"
          >
            Learn more about us
          </Link>
        </div>
      </Section>

      <MissionVision />

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
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {adoptionSteps.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col gap-3 rounded-lg border border-border p-5"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white"
              >
                {index + 1}
              </span>
              <span className="font-semibold text-foreground">
                {step.title}
              </span>
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

      <DonateBanner />
    </>
  );
}