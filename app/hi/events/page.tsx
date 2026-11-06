// FILE PATH: app/hi/events/page.tsx  (new file, make the folder "events")
import type { Metadata } from "next";
import DonateBanner from "@/components/DonateBanner";
import EventsList from "@/components/EventsList";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { eventsDescription, eventsIntro } from "@/app/lib/events";
import { hi } from "@/app/lib/i18n/hi";
import { hrefFor } from "@/app/lib/i18n/locale";

export const metadata: Metadata = {
  title: hi.nav.events,
  description: eventsDescription.hi,
};

export default function HindiEventsPage() {
  return (
    <>
      <PageHeader
        title={hi.nav.events}
        crumb={hi.nav.events}
        homeLabel={hi.common.breadcrumbHome}
        homeHref="/hi"
        breadcrumbLabel={hi.a11y.breadcrumb}
      />

      <Section>
        <p className="max-w-3xl text-lg text-foreground">{eventsIntro.hi}</p>
        <EventsList locale="hi" />
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