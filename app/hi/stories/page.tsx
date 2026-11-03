import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { hi } from "@/app/lib/i18n/hi";
import {
  storiesHi,
  storiesIntroHi,
  storiesLeadHi,
  storiesPageHi as t,
} from "@/app/lib/hi/stories";

export const metadata: Metadata = {
  title: hi.nav.stories,
  description: t.description,
};

export default function HindiStoriesPage() {
  return (
    <>
      <PageHeader
        title={hi.nav.stories}
        homeLabel={hi.common.breadcrumbHome}
        homeHref="/hi"
        breadcrumbLabel={hi.a11y.breadcrumb}
      />
      <Section>
        <div className="max-w-3xl">
          <p className="text-xl font-semibold text-primary">{storiesLeadHi}</p>
          <p className="mt-4 text-lg text-foreground">{storiesIntroHi}</p>
        </div>

        {storiesHi.length === 0 ? (
          <p className="mt-8 rounded-lg border border-border p-6 text-foreground">
            {t.soon}
          </p>
        ) : (
          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {storiesHi.map((story) => (
              <li
                key={story.title}
                className="rounded-lg border border-border p-8"
              >
                <h2 className="text-xl font-bold text-foreground">
                  {story.title}
                </h2>
                <p className="mt-3 text-foreground">{story.excerpt}</p>
                {story.full.length > 0 && (
                  <details className="group mt-4">
                    <summary className="cursor-pointer list-none font-semibold text-primary underline underline-offset-4 hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                      <span className="group-open:hidden">{t.readFull}</span>
                      <span className="hidden group-open:inline">
                        {hi.common.showLess}
                      </span>
                    </summary>
                    <div className="mt-4 space-y-4 text-foreground">
                      {story.full.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </details>
                )}
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section tone="surface">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            {t.closingTitle}
          </h2>
          <p className="mt-4 text-lg text-foreground">{t.closing}</p>
          <p className="mt-6 text-sm text-foreground">{t.note}</p>
        </div>
      </Section>
    </>
  );
}