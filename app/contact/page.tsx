import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Section from "@/components/Section";
import { contact } from "@/app/lib/contact";

export default function ContactPage() {
  return (
    <>
      <Section tone="surface">
        <nav aria-label="Breadcrumb" className="text-sm text-foreground">
          <Link
            href="/"
            className="underline underline-offset-4 hover:text-primary"
          >
            Home
          </Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">Contact Us</span>
        </nav>
        <h1 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
          Contact Us
        </h1>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Send us a message
            </h2>
            <p className="mt-2 text-foreground">
              Please do not include a child&apos;s name or personal details in
              your message.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="self-start rounded-lg border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground">Find us</h2>
            <div className="mt-6">
              <ContactInfo />
            </div>
            <p className="mt-6 text-foreground">
              <span className="font-semibold">Visiting hours:</span>{" "}
              {contact.visitingHours}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}