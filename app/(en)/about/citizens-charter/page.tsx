import type { Metadata } from "next";
import DonateBanner from "@/components/DonateBanner";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import {
  charterConcerns,
  charterIntro,
  charterItems,
} from "@/app/lib/legal";

export const metadata: Metadata = {
  title: "Citizen's Charter",
  description:
    "What you can expect from Gramin Vikas Samiti Charu, and how to raise a concern.",
};

export default function CitizensCharterPage() {
  return (
    <>
      <PageHeader title="Citizen's Charter" crumb="Citizen's Charter" />

      <Section>
        <p className="max-w-3xl text-lg text-foreground">{charterIntro}</p>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {charterItems.map((item) => (
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
            {charterConcerns.title}
          </h2>
          <p className="mt-2 text-foreground">{charterConcerns.text}</p>
        </div>
      </Section>

      <DonateBanner />
    </>
  );
}