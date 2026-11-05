import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DonateBanner from "@/components/DonateBanner";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { workIntroHi, aboutLabelsHi, projectsHi } from "@/app/lib/hi/about";
import { projectDetailsHi, projectsPageHi as t } from "@/app/lib/hi/projects";
import { hi } from "@/app/lib/i18n/hi";
import { hrefFor } from "@/app/lib/i18n/locale";
import { projects } from "@/app/lib/projects";

export const metadata: Metadata = {
  title: t.overviewTitle,
  description: t.overviewDescription,
};

export default function HindiProjectsPage() {
  return (
    <>
      <PageHeader
        title={t.overviewTitle}
        crumb={t.overviewTitle}
        homeLabel={hi.common.breadcrumbHome}
        homeHref="/hi"
        breadcrumbLabel={hi.a11y.breadcrumb}
      />

      <Section>
        <p className="max-w-3xl text-lg text-foreground">{workIntroHi}</p>
      </Section>

      <Section tone="surface">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const cover = project.photos[0];
            const text = projectsHi[project.slug];
            const details = projectDetailsHi[project.slug];
            return (
              <li key={project.slug}>
                <Reveal delay={(index % 3) * 0.1} className="h-full">
                  <Link
                    href={hrefFor(`/about/projects/${project.slug}`, "hi")}
                    className="group flex h-full flex-col gap-4 rounded-lg border border-transparent bg-background p-6 transition duration-300 hover:border-border hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-safe:hover:-translate-y-1"
                  >
                    {cover && (
                      <span className="relative block aspect-[4/3] overflow-hidden rounded-md">
                        <Image
                          src={cover.src}
                          alt={details.photoAlts[0] ?? ""}
                          fill
                          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                          className="object-cover"
                        />
                      </span>
                    )}
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white"
                    >
                      <Icon size={24} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-primary">
                        {text.kind}
                      </span>
                      <span className="mt-1 block text-lg font-semibold text-foreground">
                        {text.name}
                      </span>
                      <span className="mt-2 block text-foreground">
                        {text.summary}
                      </span>
                    </span>
                    <span className="mt-auto font-semibold text-primary">
                      {aboutLabelsHi.learnMore}
                    </span>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Section>

      <DonateBanner
        title={hi.donateBanner.title}
        text={hi.donateBanner.text}
        buttonLabel={hi.nav.donate}
        href={hrefFor("/donate", "hi")}
      />
    </>
  );
}
