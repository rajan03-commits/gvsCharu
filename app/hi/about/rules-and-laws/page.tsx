import type { Metadata } from "next";
import DonateBanner from "@/components/DonateBanner";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { rules } from "@/app/lib/legal";
import {
  rulesDescriptionHi,
  rulesHi,
  rulesIntroHi,
} from "@/app/lib/hi/legal";
import { hi } from "@/app/lib/i18n/hi";
import { hrefFor } from "@/app/lib/i18n/locale";

export const metadata: Metadata = {
  title: hi.nav.rules,
  description: rulesDescriptionHi,
};

export default function HindiRulesAndLawsPage() {
  return (
    <>
      <PageHeader
        title={hi.nav.rules}
        crumb={hi.nav.rules}
        homeLabel={hi.common.breadcrumbHome}
        homeHref="/hi"
        breadcrumbLabel={hi.a11y.breadcrumb}
      />

      <Section>
        <p className="max-w-3xl text-lg text-foreground">{rulesIntroHi}</p>
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {rulesHi.map((rule, index) => {
            const file = rules[index]?.file;
            return (
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
                {file && (
                  <a
                    href={file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded border border-border px-4 py-2 text-sm font-semibold text-primary hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    PDF
                    <span className="sr-only">
                      {" "}
                      {rule.title} {hi.a11y.opensInNewTab}
                    </span>
                  </a>
                )}
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
