// FILE PATH: app/hi/about/projects/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { projectsHi } from "@/app/lib/hi/about";
import { projectDetailsHi, projectsPageHi as t } from "@/app/lib/hi/projects";
import { hi } from "@/app/lib/i18n/hi";
import { hrefFor } from "@/app/lib/i18n/locale";
import { projects } from "@/app/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const text = projectsHi[slug];
  if (!text) return {};
  return {
    title: text.name,
    description: text.summary,
  };
}

export default async function HindiProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const text = projectsHi[slug];
  const details = projectDetailsHi[slug];
  const Icon = project.icon;
  const previous = projects[(index + projects.length - 1) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const hasPhotos = project.photos.length > 0;

  return (
    <>
      <PageHeader
        title={text.name}
        crumb={text.name}
        homeLabel={hi.common.breadcrumbHome}
        homeHref="/hi"
        breadcrumbLabel={hi.a11y.breadcrumb}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
          <div>
            <div className="flex items-center gap-4">
            {project.logo ? (
              <Image
                src={project.logo}
                alt=""
                width={80}
                height={80}
                className="h-20 w-20 shrink-0"
              />
            ) : (
              <span
                aria-hidden="true"
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-surface text-primary"
              >
                <Icon size={28} />
              </span>
            )}
            <div>
              <p className="text-sm font-semibold text-primary">
                {text.kind}
              </p>
              <p className="text-xl font-bold text-foreground">
                {text.name}
              </p>
            </div>
            </div>
            <h2 className="mt-8 text-2xl font-bold text-foreground md:text-3xl">
              {t.whatWeDo}
            </h2>
            <p className="mt-4 text-lg text-foreground">{details.text}</p>
          </div>

          <div className="h-fit rounded-lg border border-border p-6">
            <h2 className="text-lg font-semibold text-foreground">
              {t.atAGlance}
            </h2>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-sm text-foreground">
                  {project.countKind === "students"
                    ? t.studentsCount
                    : t.childrenCount}
                </dt>
                <dd className="font-semibold text-foreground">
                  {project.count}
                </dd>
              </div>
              {details.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-sm text-foreground">{fact.label}</dt>
                  <dd className="font-semibold text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* Staff: names and roles only */}
      <Section tone="surface">
        <h2 className="text-2xl font-bold text-foreground">{t.staffHeading}</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {details.staff.map((person, personIndex) => (
            <li
              key={`${person.name}-${personIndex}`}
              className="rounded-lg border border-border bg-background p-5"
            >
              <p className="font-semibold text-foreground">{person.name}</p>
              <p className="text-sm text-foreground">{person.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Photos of the unit: shown only when there are some */}
      {hasPhotos && (
        <Section>
          <h2 className="text-2xl font-bold text-foreground">{t.photos}</h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {project.photos.map((photo, photoIndex) => (
              <li key={photo.src}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-background">
                  <Image
                    src={photo.src}
                    alt={details.photoAlts[photoIndex] ?? ""}
                    fill
                    sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section tone={hasPhotos ? "surface" : "plain"}>
        <nav
          aria-label={t.otherProjects}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <Link
            href={hrefFor(`/about/projects/${previous.slug}`, "hi")}
            className="font-semibold text-primary"
          >
            <span aria-hidden="true">← </span>
            {projectsHi[previous.slug].name}
          </Link>
          <Link
            href={hrefFor(`/about/projects/${next.slug}`, "hi")}
            className="font-semibold text-primary"
          >
            {projectsHi[next.slug].name}
            <span aria-hidden="true"> →</span>
          </Link>
        </nav>

        <div className="mt-10 rounded-lg bg-primary p-8 text-center text-white">
          <p className="text-xl font-bold">{t.question}</p>
          <Link
            href={hrefFor("/contact", "hi")}
            className="mt-4 inline-block rounded bg-white px-6 py-3 font-semibold text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {hi.common.contactUs}
          </Link>
        </div>
      </Section>
    </>
  );
}