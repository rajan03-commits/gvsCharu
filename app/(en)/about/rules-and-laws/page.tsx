import type { Metadata } from "next";
import DonateBanner from "@/components/DonateBanner";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { rules, rulesIntro } from "@/app/lib/legal";

export const metadata: Metadata = {
  title: "Rules and Laws",
  description:
    "The laws and rules that Gramin Vikas Samiti Charu works under.",
};

export default function RulesAndLawsPage() {
  return (
    <>
      <PageHeader title="Rules and Laws" crumb="Rules and Laws" />

      <Section>
        <p className="max-w-3xl text-lg text-foreground">{rulesIntro}</p>
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {rules.map((rule) => (
            <li
              key={rule.title}
              className="flex items-center justify-between gap-4 py-5"
            >
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  {rule.title}
                </h2>
                <p className="mt-1 text-foreground">{rule.note}</p>
              </div>
              {rule.file && (
                <a
                  href={rule.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded border border-border px-4 py-2 text-sm font-semibold text-primary hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  PDF<span className="sr-only"> for {rule.title}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </Section>

      <DonateBanner />
    </>
  );
}