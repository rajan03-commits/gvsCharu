import type { Metadata } from "next";
import DonateBanner from "@/components/DonateBanner";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import {
  charterConcernsHi,
  charterDescriptionHi,
  charterIntroHi,
  charterItemsHi,
} from "@/app/lib/hi/legal";
import { hi } from "@/app/lib/i18n/hi";
import { hrefFor } from "@/app/lib/i18n/locale";

export const metadata: Metadata = {
  title: hi.nav.charter,
  description: charterDescriptionHi,
};

export default function HindiCitizensCharterPage() {
  return (
    <>
      <PageHeader
        title={hi.nav.charter}
        crumb={hi.nav.charter}
        homeLabel={hi.common.breadcrumbHome}
        homeHref="/hi"
        breadcrumbLabel={hi.a11y.breadcrumb}
      />

      <Section>
        <p className="max-w-3xl text-lg text-foreground">{charterIntroHi}</p>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {charterItemsHi.map((item) => (
            <li key={item.title} className="rounded-lg border border-border p-6">
              <h2 className="text-lg font-semibold text-foreground">
                {item.title}
              </h2>
              <p className="mt-2 text-foreground">{item.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6 rounded-lg bg-surface p-6">
          <h2 className="text-lg font-semibold text-foreground">
            {charterConcernsHi.title}
          </h2>
          <p className="mt-2 text-foreground">{charterConcernsHi.text}</p>
        </div>
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
