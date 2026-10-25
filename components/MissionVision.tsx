import Section from "@/components/Section";
import { mission, vision } from "@/app/lib/about";

export default function MissionVision({
  tone = "plain",
}: {
  tone?: "plain" | "surface";
}) {
  return (
    <Section tone={tone}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-background p-8">
          <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
          <p className="mt-4 text-foreground">{mission}</p>
        </div>
        <div className="rounded-lg border border-border bg-background p-8">
          <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
          <p className="mt-4 text-foreground">{vision}</p>
        </div>
      </div>
    </Section>
  );
}