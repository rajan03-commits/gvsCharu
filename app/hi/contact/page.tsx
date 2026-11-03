import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { hi } from "@/app/lib/i18n/hi";
import { formLabelsHi } from "@/app/lib/i18n/forms";
import { addressHi, contactPageHi } from "@/app/lib/hi/contact";

export const metadata: Metadata = {
  title: contactPageHi.title,
  description: contactPageHi.description,
};

export default function HindiContactPage() {
  return (
    <>
      <PageHeader
        title={contactPageHi.title}
        homeLabel={hi.common.breadcrumbHome}
        homeHref="/hi"
        breadcrumbLabel={hi.a11y.breadcrumb}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {contactPageHi.sendHeading}
            </h2>
            <p className="mt-2 text-foreground">{contactPageHi.privacyNote}</p>
            <div className="mt-8">
              <ContactForm labels={formLabelsHi} language="hi" />
            </div>
          </div>

          <div className="self-start rounded-lg border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground">
              {contactPageHi.findUs}
            </h2>
            <div className="mt-6">
              <ContactInfo
                address={addressHi}
                labels={{
                  viewOnMaps: hi.common.viewOnMaps,
                  opensInMaps: hi.a11y.opensInMaps,
                  opensInNewTab: hi.a11y.opensInNewTab,
                }}
              />
            </div>
            <ul className="mt-6 space-y-2 text-foreground">
              <li>
                <span className="font-semibold">{contactPageHi.officeHours}</span>{" "}
                {contactPageHi.officeHoursValue}
              </li>
              <li>
                <span className="font-semibold">
                  {contactPageHi.adoptionHours}
                </span>{" "}
                {contactPageHi.adoptionHoursValue}
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}