// FILE PATH: app/hi/stories/page.tsx
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import StoryCard from "@/components/StoryCard";
import { hi } from "@/app/lib/i18n/hi";
import { stories, type StoryAvatarKind } from "@/app/lib/stories";
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

// Same avatar as the English story in the same position
const fallbackAvatars: StoryAvatarKind[] = ["girl", "boy", "woman", "man"];

export default function HindiStoriesPage() {
  return (
    <>
      <PageHeader
        title={hi.nav.stories}
        homeLabel={hi.common.breadcrumbHome}
        homeHref="/hi"
        breadcrumbLabel={hi.a11y.breadcrumb}
      />
      <Section tone="surface">
        <div className="max-w-3xl">
          <p className="text-xl font-semibold text-primary">{storiesLeadHi}</p>
          <p className="mt-4 text-lg text-foreground">{storiesIntroHi}</p>
        </div>

        {storiesHi.length === 0 ? (
          <p className="mt-8 rounded-lg border border-border bg-background p-6 text-foreground">
            {t.soon}
          </p>
        ) : (
          <ul className="mx-auto mt-20 max-w-4xl space-y-24">
            {storiesHi.map((story, index) => (
              <StoryCard
                key={story.title}
                avatar={
                  stories[index]?.avatar ??
                  fallbackAvatars[index % fallbackAvatars.length]
                }
              >
                <h2 className="text-xl font-bold text-foreground md:text-2xl">
                  {story.title}
                </h2>
                <p className="mt-4 text-foreground">{story.excerpt}</p>
                {story.full.length > 0 && (
                  <details className="group/more mt-4">
                    <summary className="cursor-pointer list-none font-semibold text-primary underline underline-offset-4 hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                      <span className="group-open/more:hidden">{t.readFull}</span>
                      <span className="hidden group-open/more:inline">
                        {hi.common.showLess}
                      </span>
                    </summary>
                    <div className="mt-4 space-y-4 text-left text-foreground">
                      {story.full.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </details>
                )}
              </StoryCard>
            ))}
          </ul>
        )}
      </Section>

      <Section>
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