
import type { Metadata } from "next";
import DonateBanner from "@/components/DonateBanner";
import EventsList from "@/components/EventsList";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { eventsDescription, eventsIntro } from "@/app/lib/events";

export const metadata: Metadata = {
  title: "Notices & Events",
  description: eventsDescription.en,
};

export default function EventsPage() {
  return (
    <>
      <PageHeader title="Notices & Events" crumb="Notices & Events" />

      <Section>
        <p className="max-w-3xl text-lg text-foreground">{eventsIntro.en}</p>
        <EventsList locale="en" />
      </Section>

      <DonateBanner />
    </>
  );
}