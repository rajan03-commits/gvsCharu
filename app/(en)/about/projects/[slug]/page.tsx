// FILE PATH: app/(en)/about/projects/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { projects } from "@/app/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const Icon = project.icon;
  const previous = projects[(index + projects.length - 1) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const hasPhotos = project.photos.length > 0;

  return (
    <>
      <PageHeader title={project.name} crumb={project.name} />

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
                {project.kind}
              </p>
              <p className="text-xl font-bold text-foreground">
                {project.name}
              </p>
            </div>
            </div>
            <h2 className="mt-8 text-2xl font-bold text-foreground md:text-3xl">
              What we do here
            </h2>
            <p className="mt-4 text-lg text-foreground">{project.text}</p>
          </div>

          <div className="h-fit rounded-lg border border-border p-6">
            <h2 className="text-lg font-semibold text-foreground">
              At a glance
            </h2>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-sm text-foreground">
                  {project.countKind === "students"
                    ? "Students currently enrolled"
                    : "Children currently in the home"}
                </dt>
                <dd className="font-semibold text-foreground">
                  {project.count}
                </dd>
              </div>
              {project.facts.map((fact) => (
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
        <h2 className="text-2xl font-bold text-foreground">Our Helping Hands</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.staff.map((person, personIndex) => (
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
          <h2 className="text-2xl font-bold text-foreground">Photos</h2>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {project.photos.map((photo) => (
              <li key={photo.src}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-background">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
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
          aria-label="Other projects"
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <Link
            href={`/about/projects/${previous.slug}`}
            className="font-semibold text-primary"
          >
            <span aria-hidden="true">← </span>
            {previous.name}
          </Link>
          <Link
            href={`/about/projects/${next.slug}`}
            className="font-semibold text-primary"
          >
            {next.name}
            <span aria-hidden="true"> →</span>
          </Link>
        </nav>

        <div className="mt-10 rounded-lg bg-primary p-8 text-center text-white">
          <p className="text-xl font-bold">Have a question about this unit?</p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded bg-white px-6 py-3 font-semibold text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Contact us
          </Link>
        </div>
      </Section>
    </>
  );
}