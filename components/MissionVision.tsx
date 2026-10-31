import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import Section from "@/components/Section";
import { mission, vision } from "@/app/lib/about";

// Native <details>: works without JavaScript, and keyboard and screen readers understand it
function Expandable({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <details className="group mt-4">
      <summary className="flex cursor-pointer list-none items-center gap-2 font-semibold text-primary hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
        <span className="underline underline-offset-4 group-open:hidden">
          {label}
        </span>
        <span className="hidden underline underline-offset-4 group-open:inline">
          Show less
        </span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className="transition-transform group-open:rotate-180"
        />
      </summary>
      <div className="mt-4 space-y-4 text-foreground">{children}</div>
    </details>
  );
}

export default function MissionVision({
  tone = "plain",
  detailed = false,
}: {
  tone?: "plain" | "surface";
  detailed?: boolean;
}) {
  if (detailed) {
    const [missionFirst, ...missionRest] = mission.full;
    const [visionFirst, ...visionRest] = vision.full;

    return (
      <Section tone={tone}>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Our Mission
            </h2>
            <p className="mt-2 text-lg font-semibold text-primary">
              {mission.title}
            </p>
            <p className="mt-6 text-foreground">{missionFirst}</p>
            <Expandable label="Read the full mission">
              {missionRest.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Expandable>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Our Vision
            </h2>
            <p className="mt-2 text-lg font-semibold text-primary">
              {vision.title}
            </p>
            <p className="mt-6 text-foreground">{visionFirst}</p>
            <Expandable label="Read the full vision">
              {visionRest.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Expandable>
            <p className="mt-6 font-semibold text-foreground">
              {vision.highlight}
            </p>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section tone={tone}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-background p-8">
          <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
          <p className="mt-4 text-foreground">{mission.short}</p>
        </div>
        <div className="rounded-lg border border-border bg-background p-8">
          <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
          <p className="mt-4 text-foreground">{vision.short}</p>
        </div>
      </div>
    </Section>
  );
}