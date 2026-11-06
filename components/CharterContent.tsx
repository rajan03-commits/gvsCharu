// FILE PATH: components/CharterContent.tsx  (new file)
import Link from "next/link";
import Section from "@/components/Section";
import type { CharterData } from "@/app/lib/charter";
import { hrefFor, type Locale } from "@/app/lib/i18n/locale";

const headingClass = "scroll-mt-24 text-2xl font-bold text-foreground md:text-3xl";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-foreground">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ListSection({
  number,
  block,
}: {
  number: number;
  block: {
    heading: string;
    intro: string;
    items: string[];
    closing: string;
  };
}) {
  return (
    <div id={`section-${number}`} className="max-w-3xl scroll-mt-24">
      <h2 className={headingClass}>
        {number}. {block.heading}
      </h2>
      <p className="mt-4 text-foreground">{block.intro}</p>
      <Bullets items={block.items} />
      <p className="mt-4 text-foreground">{block.closing}</p>
    </div>
  );
}

function TextSection({
  number,
  block,
}: {
  number: number;
  block: { heading: string; paragraphs: string[] };
}) {
  return (
    <div id={`section-${number}`} className="max-w-3xl scroll-mt-24">
      <h2 className={headingClass}>
        {number}. {block.heading}
      </h2>
      {block.paragraphs.map((paragraph) => (
        <p key={paragraph} className="mt-4 text-foreground">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function ContactValue({ value }: { value: string }) {
  // Once the real email is filled in, make it a mail link
  if (value.includes("@") && !value.startsWith("[")) {
    return (
      <a
        href={`mailto:${value}`}
        className="break-words font-semibold text-primary underline underline-offset-4"
      >
        {value}
      </a>
    );
  }
  return <span className="font-semibold text-foreground">{value}</span>;
}

export default function CharterContent({
  data,
  locale,
}: {
  data: CharterData;
  locale: Locale;
}) {
  const g = data.grievance;
  const contents = [
    data.commitment.heading,
    data.rights.heading,
    data.service.heading,
    data.participation.heading,
    data.transparency.heading,
    g.heading,
    data.accountability.heading,
    data.childProtection.heading,
    data.review.heading,
  ];

  return (
    <>
      {/* Top of the charter, contents, sections 1 and 2 */}
      <Section>
        <div className="max-w-3xl">
          <p className="text-xl font-semibold text-primary">{data.tagline}</p>
          <p className="mt-2 text-foreground">{data.org}</p>
          <p className="mt-2 text-sm text-foreground">
            {data.labels.effective}: {data.effective} | {data.labels.updated}:{" "}
            {data.updated}
          </p>
        </div>

        <nav
          aria-label={data.labels.contents}
          className="mt-8 max-w-3xl rounded-lg bg-surface p-6"
        >
          <h2 className="text-lg font-semibold text-foreground">
            {data.labels.contents}
          </h2>
          <ol className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {contents.map((title, index) => (
              <li key={title}>
                <a
                  href={`#section-${index + 1}`}
                  className="text-primary underline underline-offset-4 hover:text-primary-hover"
                >
                  {index + 1}. {title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-12">
          <TextSection number={1} block={data.commitment} />
        </div>

        <div id="section-2" className="mt-12 scroll-mt-24">
          <h2 className={headingClass}>2. {data.rights.heading}</h2>
          <p className="mt-4 max-w-3xl text-foreground">{data.rights.intro}</p>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {data.rights.items.map((item) => (
              <li
                key={item.title}
                className="rounded-lg border border-border p-5"
              >
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 text-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Sections 3, 4 and 5 */}
      <Section tone="surface">
        <div id="section-3" className="scroll-mt-24">
          <h2 className={headingClass}>3. {data.service.heading}</h2>
          <p className="mt-4 max-w-3xl text-foreground">{data.service.intro}</p>
          <div className="mt-6 max-w-3xl overflow-x-auto">
            <table className="w-full border-collapse bg-background text-left">
              <caption className="sr-only">{data.service.heading}</caption>
              <thead>
                <tr>
                  {data.service.columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="border border-border px-4 py-3 font-semibold text-foreground"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.service.rows.map((row) => (
                  <tr key={row.service}>
                    <th
                      scope="row"
                      className="border border-border px-4 py-3 font-normal text-foreground"
                    >
                      {row.service}
                    </th>
                    <td className="border border-border px-4 py-3 text-foreground">
                      {row.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-3xl text-sm text-foreground">
            {data.service.note}
          </p>
        </div>

        <div className="mt-12">
          <ListSection number={4} block={data.participation} />
        </div>
        <div className="mt-12">
          <ListSection number={5} block={data.transparency} />
        </div>
      </Section>

      {/* Section 6: grievance redressal */}
      <Section>
        <div id="section-6" className="max-w-3xl scroll-mt-24">
          <h2 className={headingClass}>6. {g.heading}</h2>
          <p className="mt-3 text-lg font-bold tracking-wide text-primary">
            {g.motto}
          </p>
          <p className="mt-4 text-foreground">{g.intro}</p>

          <h3 className="mt-8 text-lg font-semibold text-foreground">
            {g.howHeading}
          </h3>
          <ol className="mt-3 list-decimal space-y-2 pl-6 text-foreground">
            {g.steps.map((step) => (
              <li key={step.text}>
                {step.text}
                {step.link && (
                  <>
                    {" "}
                    <Link
                      href={hrefFor(step.link.href, locale)}
                      className="font-semibold text-primary underline underline-offset-4 hover:text-primary-hover"
                    >
                      {step.link.label}
                    </Link>
                  </>
                )}
              </li>
            ))}
          </ol>

          <h3 className="mt-8 text-lg font-semibold text-foreground">
            {g.responseHeading}
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-foreground">
            {g.responses.map((item) => (
              <li key={item.label}>
                <span className="font-semibold">{item.label}:</span>{" "}
                {item.text}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-foreground">{g.closing}</p>

          <div className="mt-8 rounded-lg border-2 border-primary p-6">
            <h3 className="text-lg font-semibold text-foreground">
              {g.contactHeading}
            </h3>
            <dl className="mt-4 space-y-3">
              {g.contact.map((row) => (
                <div key={row.label}>
                  <dt className="text-sm text-foreground">{row.label}</dt>
                  <dd>
                    <ContactValue value={row.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-4 text-foreground">{g.statutory}</p>
        </div>
      </Section>

      {/* Sections 7, 8 and 9 */}
      <Section tone="surface">
        <ListSection number={7} block={data.accountability} />
        <div className="mt-12">
          <TextSection number={8} block={data.childProtection} />
        </div>
        <div className="mt-12">
          <TextSection number={9} block={data.review} />
        </div>
      </Section>

      {/* Closing assurance, issuer and the voluntary-commitment note */}
      <Section>
        <div className="max-w-3xl">
          <h2 className={headingClass}>{data.assurance.heading}</h2>
          <p className="mt-4 border-l-4 border-accent pl-6 text-lg font-semibold text-foreground">
            {data.assurance.motto}
          </p>
          <p className="mt-4 text-foreground">{data.assurance.paragraph}</p>

          <p className="mt-10 text-foreground">
            <span className="font-semibold">{data.labels.issuedBy}:</span>{" "}
            {data.issuedBy}
          </p>
          <p className="text-foreground">{data.org}</p>
          <p className="mt-4 text-sm text-foreground">{data.footnote}</p>
        </div>
      </Section>
    </>
  );
}