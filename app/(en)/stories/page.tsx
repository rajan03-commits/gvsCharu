import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import {
  stories,
  storiesClosing,
  storiesClosingTitle,
  storiesIntro,
  storiesLead,
  storiesNote,
} from "@/app/lib/stories";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Anonymised stories of children finding safe, loving families through the care and lawful adoption work of Gramin Vikas Samiti Charu.",
};

export default function StoriesPage() {
  return (
    <>
      <PageHeader title="Success Stories" />
      <Section>
        <div className="max-w-3xl">
          <p className="text-xl font-semibold text-primary">{storiesLead}</p>
          <p className="mt-4 text-lg text-foreground">{storiesIntro}</p>
        </div>

        {stories.length === 0 ? (
          <p className="mt-8 rounded-lg border border-border p-6 text-foreground">
            Stories will be shared here soon.
          </p>
        ) : (
          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {stories.map((story) => (
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
                      <span className="group-open:hidden">Read the full story</span>
                      <span className="hidden group-open:inline">Show less</span>
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
            {storiesClosingTitle}
          </h2>
          <p className="mt-4 text-lg text-foreground">{storiesClosing}</p>
          <p className="mt-6 text-sm text-foreground">{storiesNote}</p>
        </div>
      </Section>
    </>
  );
}