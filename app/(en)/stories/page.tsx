
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import StoryCard from "@/components/StoryCard";
import {
  stories,
  storiesClosing,
  storiesClosingTitle,
  storiesIntro,
  storiesLead,
  storiesNote,
  type StoryAvatarKind,
} from "@/app/lib/stories";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Anonymised stories of children finding safe, loving families through the care and lawful adoption work of Gramin Vikas Samiti Charu.",
};

// Used when a story has no avatar of its own
const fallbackAvatars: StoryAvatarKind[] = ["girl", "boy", "woman", "man"];

export default function StoriesPage() {
  return (
    <>
      <PageHeader title="Success Stories" />
      <Section tone="surface">
        <div className="max-w-3xl">
          <p className="text-xl font-semibold text-primary">{storiesLead}</p>
          <p className="mt-4 text-lg text-foreground">{storiesIntro}</p>
        </div>

        {stories.length === 0 ? (
          <p className="mt-8 rounded-lg border border-border bg-background p-6 text-foreground">
            Stories will be shared here soon.
          </p>
        ) : (
          <ul className="mx-auto mt-20 max-w-4xl space-y-24">
            {stories.map((story, index) => (
              <StoryCard
                key={story.title}
                avatar={
                  story.avatar ?? fallbackAvatars[index % fallbackAvatars.length]
                }
              >
                <h2 className="text-xl font-bold text-foreground md:text-2xl">
                  {story.title}
                </h2>
                <p className="mt-4 text-foreground">{story.excerpt}</p>
                {story.full.length > 0 && (
                  <details className="group/more mt-4">
                    <summary className="cursor-pointer list-none font-semibold text-primary underline underline-offset-4 hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                      <span className="group-open/more:hidden">
                        Read the full story
                      </span>
                      <span className="hidden group-open/more:inline">
                        Show less
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
            {storiesClosingTitle}
          </h2>
          <p className="mt-4 text-lg text-foreground">{storiesClosing}</p>
          <p className="mt-6 text-sm text-foreground">{storiesNote}</p>
        </div>
      </Section>
    </>
  );
}