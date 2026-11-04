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
import { certificates } from "@/app/lib/about";
import {
  aboutImages,
  approachIcons,
  fallbackIcon,
  valueIcons,
} from "@/app/lib/aboutVisuals";
import { hi } from "@/app/lib/i18n/hi";
import { hrefFor } from "@/app/lib/i18n/locale";
import {
  aboutLabelsHi as t,
  aboutLeadHi,
  aboutStoryHi,
  approachClosingHi,
  approachHi,
  awardsHi,
  certificatesHi,
  managerHi,
  missionHi,
  projectsHi,
  registrationHi,
  valuesHi,
  visionHi,
  workIntroHi,
} from "@/app/lib/hi/about";
import { ourPromiseHi } from "@/app/lib/hi/home";
import { annualReports, board, projects } from "@/app/lib/projects";

export const metadata: Metadata = {
  title: hi.nav.about,
  description: t.pageDescription,
};

// Same labels the English page uses, in Hindi
const missionVisionLabels = {
  ourMission: hi.home.ourMission,
  ourVision: hi.home.ourVision,
  readFullMission: hi.home.readFullMission,
  readFullVision: hi.home.readFullVision,
  showLess: hi.common.showLess,
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

export default function HindiAboutPage() {
  return (
    <>
      <PageHeader
        title={t.pageTitle}
        crumb={hi.nav.about}
        homeLabel={hi.common.breadcrumbHome}
        homeHref="/hi"
        breadcrumbLabel={hi.a11y.breadcrumb}
      />

      {/* Who we are */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              {t.whoHeading}
            </h2>
            <p className="mt-4 text-lg font-semibold text-primary">
              {aboutLeadHi}
            </p>
            {aboutStoryHi.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`mt-4 text-foreground ${index === 0 ? "text-lg" : ""}`}
              >
                {paragraph}
              </p>
            ))}
            <p className="mt-6 text-foreground">
              <span className="font-semibold">{managerHi.role}:</span>{" "}
              {managerHi.name}
            </p>
          </div>
          <Reveal>
            <PhotoSlot
              src={aboutImages.who.src}
              alt={t.whoAlt}
              position={aboutImages.who.position}
              placeholder={t.whoPhotoPlaceholder}
              className="aspect-[4/5]"
            />
          </Reveal>
        </div>
      </Section>

      {/* Our projects */}
      <Section tone="surface">
        <div id="projects" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            {t.projectsHeading}
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-foreground">
            {workIntroHi}
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const text = projectsHi[project.slug];
              return (
                <li key={project.slug}>
                  <Reveal delay={(index % 3) * 0.1} className="h-full">
                    <Link
                      href={hrefFor(`/about/projects/${project.slug}`, "hi")}
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
                          {text.name}
                        </span>
                        <span className="mt-2 block text-foreground">
                          {text.summary}
                        </span>
                      </span>
                      <span className="mt-auto font-semibold text-primary">
                        {t.learnMore}
                      </span>
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      <PromiseBanner
        text={ourPromiseHi}
        image={{ ...aboutImages.promise, alt: t.promiseAlt }}
        heading={hi.home.ourPromise}
      />

      {/* Mission and vision */}
      <div id="mission" className="scroll-mt-24">
        <span id="vision" />
        <MissionVision
          detailed
          labels={missionVisionLabels}
          missionContent={missionHi}
          visionContent={visionHi}
        />
      </div>

      {/* Our approach */}
      <Section tone="surface">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          {t.approachHeading}
        </h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-8">
            <PhotoSlot
              src={aboutImages.approach.src}
              alt={t.approachAlt}
              position={aboutImages.approach.position}
              placeholder={t.approachPhotoPlaceholder}
              className="aspect-[4/3] lg:aspect-[3/4]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
          <ul className="space-y-6">
            {approachHi.map((item, index) => {
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
          {approachClosingHi}
        </p>
      </Section>

      {/* Core values */}
      <Section>
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          {t.valuesHeading}
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {valuesHi.map((value, index) => {
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
                        moreLabel={t.readMore}
                        lessLabel={hi.common.showLess}
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
              {t.boardHeading}
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
                        alt={`${t.boardPhotoAlt} ${member.name}`}
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
            {t.certsHeading}
          </h2>

          <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {registrationHi.map((item, index) => (
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
            {certificatesHi.map((certificate, index) => {
              const image = certificates[index]?.image;
              return (
                <li key={certificate.title}>
                  <Reveal
                    delay={(index % 3) * 0.1}
                    className="flex flex-col gap-3"
                  >
                    {image ? (
                      <a
                        href={image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block aspect-[4/3] overflow-hidden rounded-lg border border-border bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        <Image
                          src={image}
                          alt={`${certificate.title} ${t.certAlt}`}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-contain"
                        />
                        <span className="sr-only">
                          {hi.a11y.opensInNewTab}
                        </span>
                      </a>
                    ) : (
                      <div
                        aria-hidden="true"
                        className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-muted bg-surface text-foreground"
                      >
                        {t.certScan}
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
              );
            })}
          </ul>
        </div>
      </Section>

      {/* Awards and recognition */}
      <Section tone="surface">
        <div id="awards" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            {t.awardsHeading}
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {awardsHi.map((award, index) => (
              <li key={award.name}>
                <Reveal
                  delay={(index % 3) * 0.1}
                  className="flex flex-col gap-3"
                >
                  <div
                    aria-hidden="true"
                    className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-muted bg-background text-foreground"
                  >
                    {t.awardPlaceholder}
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
              {t.reportsHeading}
            </h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {annualReports.map((report) => (
                <li
                  key={report.year}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <span className="font-semibold text-foreground">
                    {t.reportRow} {report.year}
                  </span>
                  <a
                    href={report.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded border border-border px-4 py-2 text-sm font-semibold text-primary hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {t.download}
                    <span className="sr-only"> {report.year}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      <DonateBanner
        title={hi.donateBanner.title}
        text={hi.donateBanner.text}
        buttonLabel={hi.nav.donate}
        href={hrefFor("/donate", "hi")}
      />
    </>
  );
}