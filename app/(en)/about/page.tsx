import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  manager,
  ourPromise,
  registration,
  values,
  workIntro,
} from "@/app/lib/about";
import { annualReports, board, projects } from "@/app/lib/projects";
import {
  aboutImages,
  approachIcons,
  fallbackIcon,
  valueIcons,
} from "@/app/lib/aboutVisuals";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Gramin Vikas Samiti Charu, serving Gonda district in Uttar Pradesh since 2012: our story, mission, vision, projects, approach and values.",
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

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

      {/* Our projects: a short version, each card opens its own page */}
      <Section tone="surface">
        <div id="projects" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Our Projects
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-foreground">{workIntro}</p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <li key={project.slug}>
                  <Reveal delay={(index % 3) * 0.1} className="h-full">
                    <Link
                      href={`/about/projects/${project.slug}`}
                      className="group flex h-full flex-col gap-4 rounded-lg border border-transparent bg-background p-6 transition duration-300 hover:border-border hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-safe:hover:-translate-y-1"
                    >
                      <span
                        aria-hidden="true"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white"
                      >
                        <Icon size={24} />
                      </span>
                      <span>
                        <span className="block text-lg font-semibold text-foreground">
                          {project.name}
                        </span>
                        <span className="mt-2 block text-foreground">
                          {project.summary}
                        </span>
                      </span>
                      <span className="mt-auto font-semibold text-primary">
                        Learn more
                      </span>
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      <PromiseBanner text={ourPromise} image={aboutImages.promise} />

      {/* Mission and vision: first paragraph visible, the rest opens on click */}
      <div id="mission" className="scroll-mt-24">
        <span id="vision" />
        <MissionVision detailed />
      </div>

      {/* Our approach */}
      <Section tone="surface">
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
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background text-primary"
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
      <Section>
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Our Core Values and Guiding Principles
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {values.map((value, index) => {
            const Icon = valueIcons[index] ?? fallbackIcon;
            return (
              <li key={value.title} className="md:odd:last:col-span-2">
                <Reveal delay={(index % 2) * 0.1} className="h-full">
                  <div className="flex h-full gap-4 rounded-lg bg-surface p-6">
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-background text-primary"
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

      {/* Our board: hidden until the list is filled in app/lib/projects.ts */}
      {board.length > 0 && (
        <Section tone="surface">
          <div id="board" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Our Board
            </h2>
            <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {board.map((member, index) => (
                <li key={member.name}>
                  <Reveal
                    delay={(index % 4) * 0.1}
                    className="flex flex-col items-center text-center"
                  >
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={`Photo of ${member.name}`}
                        width={120}
                        height={120}
                        className="h-30 w-30 rounded-full object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex h-30 w-30 items-center justify-center rounded-full bg-background text-2xl font-bold text-primary"
                      >
                        {initials(member.name)}
                      </span>
                    )}
                    <p className="mt-4 font-semibold text-foreground">
                      {member.name}
                    </p>
                    <p className="text-sm text-foreground">{member.role}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {/* Registration and certificates */}
      <Section>
        <div id="certificates" className="scroll-mt-24">
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
                <Reveal
                  delay={(index % 3) * 0.1}
                  className="flex flex-col gap-3"
                >
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
                  <p className="text-sm text-foreground">
                    {certificate.issuer}
                  </p>
                  <p className="text-sm text-foreground">
                    {certificate.number}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Awards and recognition */}
      <Section tone="surface">
        <div id="awards" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Awards and Recognition
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((award, index) => (
              <li key={award.name}>
                <Reveal
                  delay={(index % 3) * 0.1}
                  className="flex flex-col gap-3"
                >
                  <div
                    aria-hidden="true"
                    className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-muted bg-background text-foreground"
                  >
                    [Award photo or certificate]
                  </div>
                  <p className="font-semibold text-foreground">{award.name}</p>
                  <p className="text-sm text-foreground">{award.detail}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Annual reports: hidden until the list is filled in app/lib/projects.ts */}
      {annualReports.length > 0 && (
        <Section>
          <div id="reports" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Annual Reports
            </h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {annualReports.map((report) => (
                <li
                  key={report.year}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <span className="font-semibold text-foreground">
                    Annual Report {report.year}
                  </span>
                  <a
                    href={report.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded border border-border px-4 py-2 text-sm font-semibold text-primary hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Download PDF
                    <span className="sr-only"> for {report.year}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      <DonateBanner />
    </>
  );
}