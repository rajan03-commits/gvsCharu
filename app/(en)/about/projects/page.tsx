// FILE PATH: app/(en)/about/projects/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DonateBanner from "@/components/DonateBanner";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { workIntro } from "@/app/lib/about";
import { projects } from "@/app/lib/projects";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "The units run by Gramin Vikas Samiti Charu: adoption, child care institutes, NIOS education and vocational training.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Our Projects" crumb="Our Projects" />

      <Section>
        <p className="max-w-3xl text-lg text-foreground">{workIntro}</p>
      </Section>

      <Section tone="surface">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const cover = project.photos[0];
            return (
              <li key={project.slug}>
                <Reveal delay={(index % 3) * 0.1} className="h-full">
                  <Link
                    href={`/about/projects/${project.slug}`}
                    className="group flex h-full flex-col gap-4 rounded-lg border border-transparent bg-background p-6 transition duration-300 hover:border-border hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-safe:hover:-translate-y-1"
                  >
                    {cover && (
                      <span className="relative block aspect-[4/3] overflow-hidden rounded-md">
                        <Image
                          src={cover.src}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                          className="object-cover"
                        />
                      </span>
                    )}
                    <span className="flex items-start gap-4">
                    {project.logo ? (
                      <Image
                        src={project.logo}
                        alt=""
                        width={56}
                        height={56}
                        className="h-14 w-14 shrink-0"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white"
                      >
                        <Icon size={24} />
                      </span>
                    )}
                    <span>
                      <span className="block text-sm font-semibold text-primary">
                        {project.kind}
                      </span>
                      <span className="mt-1 block text-lg font-semibold text-foreground">
                        {project.name}
                      </span>
                      <span className="mt-2 block text-foreground">
                        {project.summary}
                      </span>
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
      </Section>

      <DonateBanner />
    </>
  );
}