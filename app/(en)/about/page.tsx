import type { Metadata } from "next";
import Image from "next/image";
import DonateBanner from "@/components/DonateBanner";
import MissionVision from "@/components/MissionVision";
import PageHeader from "@/components/PageHeader";
import PhotoSlot from "@/components/PhotoSlot";
import PromiseBanner from "@/components/PromiseBanner";
import ReadMore from "@/components/ReadMore";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import {
  aboutLead,
  aboutStory,
  approach,
  approachClosing,
  awards,
  certificates,
  facilities,
  manager,
  ourPromise,
  registration,
  values,
  workIntro,
} from "@/app/lib/about";
import {
  aboutImages,
  approachIcons,
  facilityIcons,
  fallbackIcon,
  valueIcons,
} from "@/app/lib/aboutVisuals";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Gramin Vikas Samiti Charu, serving Gonda district in Uttar Pradesh since 1998: our story, mission, vision, approach and values.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Gramin Vikas Samiti Charu" crumb="About Us" />

      {/* Who we are */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Protecting Childhood, Empowering Futures
            </h2>
            <p className="mt-4 text-lg font-semibold text-primary">
              {aboutLead}
            </p>
            {aboutStory.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`mt-4 text-foreground ${index === 0 ? "text-lg" : ""}`}
              >
                {paragraph}
              </p>
            ))}
            <p className="mt-6 text-foreground">
              <span className="font-semibold">{manager.role}:</span>{" "}
              {manager.name}
            </p>
          </div>
          <Reveal>
            <PhotoSlot
              src={aboutImages.who.src}
              alt={aboutImages.who.alt}
              position={aboutImages.who.position}
              placeholder="[Photo: the building or signboard. No identifiable children.]"
              className="aspect-[4/5]"
            />
          </Reveal>
        </div>
      </Section>

      <PromiseBanner text={ourPromise} image={aboutImages.promise} />

      {/* What we run */}
      <Section tone="surface">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          What We Run
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-foreground">{workIntro}</p>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {facilities.map((facility, index) => {
            const Icon = facilityIcons[index] ?? fallbackIcon;
            return (
              <li key={facility.name} className="sm:odd:last:col-span-2">
                <Reveal delay={(index % 2) * 0.1} className="h-full">
                  <div className="group flex h-full flex-col gap-4 rounded-lg border border-transparent bg-background p-6 transition duration-300 focus-within:border-border focus-within:shadow-lg hover:border-border hover:shadow-lg motion-safe:hover:-translate-y-1">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white"
                    >
                      <Icon size={24} />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {facility.name}
                      </h3>
                      <ReadMore
                        text={facility.text}
                        className="mt-2 text-foreground"
                      />
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Registration and certificates */}
      <Section>
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Registration and Certificates
        </h2>

        <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {registration.map((item, index) => (
            <Reveal
              key={item.label}
              delay={(index % 3) * 0.1}
              className="rounded-lg border border-border p-6"
            >
              <dt className="text-sm font-semibold text-foreground">
                {item.label}
              </dt>
              <dd className="mt-1 text-lg text-foreground">{item.value}</dd>
            </Reveal>
          ))}
        </dl>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <li key={certificate.title}>
              <Reveal delay={(index % 3) * 0.1} className="flex flex-col gap-3">
                {certificate.image ? (
                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block aspect-[4/3] overflow-hidden rounded-lg border border-border bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <Image
                      src={certificate.image}
                      alt={`Scanned copy of ${certificate.title}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain"
                    />
                    <span className="sr-only">
                      (opens the full image in a new tab)
                    </span>
                  </a>
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-muted bg-surface text-foreground"
                  >
                    [Certificate scan]
                  </div>
                )}
                <p className="font-semibold text-foreground">
                  {certificate.title}
                </p>
                <p className="text-sm text-foreground">{certificate.issuer}</p>
                <p className="text-sm text-foreground">{certificate.number}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* Mission and vision: first paragraph visible, the rest opens on click */}
      <MissionVision detailed tone="surface" />

      {/* Our approach */}
      <Section>
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Our Approach to Child Development
        </h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-8">
            <PhotoSlot
              src={aboutImages.approach.src}
              alt={aboutImages.approach.alt}
              position={aboutImages.approach.position}
              placeholder="[Photo: books, a classroom or a garden. No people.]"
              className="aspect-[4/3] lg:aspect-[3/4]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
          <ul className="space-y-6">
            {approach.map((item, index) => {
              const Icon = approachIcons[index] ?? fallbackIcon;
              return (
                <li key={item.title} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface text-primary"
                  >
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-foreground">{item.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="mt-10 max-w-3xl text-lg text-foreground">
          {approachClosing}
        </p>
      </Section>

      {/* Core values */}
      <Section tone="surface">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Our Core Values and Guiding Principles
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {values.map((value, index) => {
            const Icon = valueIcons[index] ?? fallbackIcon;
            return (
              <li key={value.title} className="md:odd:last:col-span-2">
                <Reveal delay={(index % 2) * 0.1} className="h-full">
                  <div className="flex h-full gap-4 rounded-lg bg-background p-6">
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface text-primary"
                    >
                      <Icon size={22} />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <ReadMore
                        text={value.text}
                        className="mt-2 text-foreground"
                      />
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Awards and recognition */}
      <Section>
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Awards and Recognition
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, index) => (
            <li key={award.name}>
              <Reveal delay={(index % 3) * 0.1} className="flex flex-col gap-3">
                <div
                  aria-hidden="true"
                  className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-muted bg-surface text-foreground"
                >
                  [Award photo or certificate]
                </div>
                <p className="font-semibold text-foreground">{award.name}</p>
                <p className="text-sm text-foreground">{award.detail}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <DonateBanner />
    </>
  );
}