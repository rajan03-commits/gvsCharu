import type { Metadata } from "next";
import Image from "next/image";
import CopyRow from "@/components/CopyRow";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { contact } from "@/app/lib/contact";
import { donate } from "@/app/lib/donate";
import { hi } from "@/app/lib/i18n/hi";
import { copyLabelsHi } from "@/app/lib/i18n/forms";
import { donatePageHi as t, fundUsesHi } from "@/app/lib/hi/donate";

export const metadata: Metadata = {
  title: hi.nav.donate,
  description: t.description,
};

export default function HindiDonatePage() {
  return (
    <>
      <PageHeader
        title={t.pageTitle}
        crumb={hi.nav.donate}
        homeLabel={hi.common.breadcrumbHome}
        homeHref="/hi"
        breadcrumbLabel={hi.a11y.breadcrumb}
      />

      {/* Ways to give */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            {t.waysHeading}
          </h2>
          <p className="mt-4 text-lg text-foreground">{t.thanksNote}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* UPI */}
          <div className="rounded-lg border border-border p-8">
            <h3 className="text-xl font-bold text-foreground">
              {t.upiHeading}
            </h3>
            <p className="mt-2 text-foreground">{t.upiText}</p>

            <div className="mt-6">
              {donate.qrImage ? (
                <Image
                  src={donate.qrImage}
                  alt={t.qrAlt}
                  width={224}
                  height={224}
                  className="size-56 rounded-md border border-border"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="flex size-56 items-center justify-center rounded-md border border-dashed border-muted bg-surface text-center text-foreground"
                >
                  {t.qrPlaceholder}
                </div>
              )}
            </div>

            <div className="mt-6">
              <CopyRow
                label={t.upiIdLabel}
                value={donate.upiId}
                labels={copyLabelsHi}
              />
            </div>
          </div>

          {/* Bank transfer */}
          <div className="rounded-lg border border-border p-8">
            <h3 className="text-xl font-bold text-foreground">
              {t.bankHeading}
            </h3>
            <div className="mt-4">
              <CopyRow
                label={t.accountName}
                value={donate.bank.accountName}
                labels={copyLabelsHi}
              />
              <CopyRow
                label={t.accountNumber}
                value={donate.bank.accountNumber}
                labels={copyLabelsHi}
              />
              <CopyRow
                label={t.bankName}
                value={donate.bank.bankName}
                labels={copyLabelsHi}
              />
              <CopyRow
                label={t.ifsc}
                value={donate.bank.ifsc}
                labels={copyLabelsHi}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-surface p-6 text-foreground">
          <p>
            {t.afterBefore}{" "}
            <a
              href={`mailto:${contact.email}`}
              className="break-words font-semibold underline underline-offset-4 hover:text-primary"
            >
              {contact.email}
            </a>{" "}
            {t.afterAfter}
          </p>
          <p className="mt-2">
            {t.callBefore}{" "}
            <a
              href={contact.phoneHref}
              className="font-semibold underline underline-offset-4 hover:text-primary"
            >
              {contact.phone}
            </a>{" "}
            {t.callAfter}
          </p>
        </div>

        <p className="mt-6 rounded-lg border border-border p-4 text-foreground">
          {t.taxNote}
        </p>
      </Section>

      {/* Where your donation goes */}
      <Section tone="surface">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          {t.whereHeading}
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {fundUsesHi.map((item) => (
            <li key={item.title} className="rounded-lg bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-foreground">{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}