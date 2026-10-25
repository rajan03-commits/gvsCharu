import Image from "next/image";
import DonateBanner from "@/components/DonateBanner";
import MissionVision from "@/components/MissionVision";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import {
  awards,
  certificates,
  facilities,
  manager,
  registration,
} from "@/app/lib/about";

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About GVS Charu Gonda" crumb="About Us" />

      {/* Who we are */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Who We Are
            </h2>
            <p className="mt-4 text-lg text-foreground">
              Gramin Vikas Samiti Charu, known as GVS Charu Gonda, has worked
              since 1998 for children in need of care and protection, and for
              women&apos;s welfare, across Devipatan Mandal. Our headquarters is
              in Gonda, Uttar Pradesh.
            </p>
            <p className="mt-4 text-foreground">
              [Our story: two or three short paragraphs from the NGO.]
            </p>
            <p className="mt-6 text-foreground">
              <span className="font-semibold">{manager.role}:</span>{" "}
              {manager.name}
            </p>
          </div>
          <div
            aria-hidden="true"
            className="flex aspect-[4/3] items-center justify-center rounded-lg bg-surface p-6 text-center text-foreground"
          >
            [Photo: the building or signboard. No identifiable children.]
          </div>
        </div>
      </Section>

      {/* What we run */}
      <Section tone="surface">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          What We Run
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {facilities.map((facility) => (
            <li key={facility.name} className="rounded-lg bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground">
                {facility.name}
              </h3>
              <p className="mt-2 text-foreground">{facility.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Registration and certificates */}
      <Section>
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Registration and Certificates
        </h2>

        <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {registration.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-border p-6"
            >
              <dt className="text-sm font-semibold text-foreground">
                {item.label}
              </dt>
              <dd className="mt-1 text-lg text-foreground">{item.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <li key={certificate.title} className="flex flex-col gap-3">
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
            </li>
          ))}
        </ul>
      </Section>

      <MissionVision tone="surface" />

      {/* Awards and recognition */}
      <Section>
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Awards and Recognition
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <li key={award.name} className="flex flex-col gap-3">
              <div
                aria-hidden="true"
                className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-muted bg-surface text-foreground"
              >
                [Award photo or certificate]
              </div>
              <p className="font-semibold text-foreground">{award.name}</p>
              <p className="text-sm text-foreground">{award.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <DonateBanner />
    </>
  );
}