import Image from "next/image";
import CopyRow from "@/components/CopyRow";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { contact } from "@/app/lib/contact";
import { donate, fundUses } from "@/app/lib/donate";

export default function DonatePage() {
  return (
    <>
      <PageHeader title="Donate to Gramin Vikas Samiti Charu" crumb="Donate Now" />

      {/* Ways to give */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Ways to Give
          </h2>
          <p className="mt-4 text-lg text-foreground">
            [Short thank-you note from the NGO.]
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* UPI */}
          <div className="rounded-lg border border-border p-8">
            <h3 className="text-xl font-bold text-foreground">Pay by UPI</h3>
            <p className="mt-2 text-foreground">
              Scan the QR code with any UPI app.
            </p>

            <div className="mt-6">
              {donate.qrImage ? (
                <Image
                  src={donate.qrImage}
                  alt="UPI QR code for donations to Gramin Vikas Samiti Charu"
                  width={224}
                  height={224}
                  className="size-56 rounded-md border border-border"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="flex size-56 items-center justify-center rounded-md border border-dashed border-muted bg-surface text-center text-foreground"
                >
                  [UPI QR code]
                </div>
              )}
            </div>

            <div className="mt-6">
              <CopyRow label="UPI ID" value={donate.upiId} />
            </div>
          </div>

          {/* Bank transfer */}
          <div className="rounded-lg border border-border p-8">
            <h3 className="text-xl font-bold text-foreground">
              Bank Transfer
            </h3>
            <div className="mt-4">
              <CopyRow label="Account name" value={donate.bank.accountName} />
              <CopyRow label="Account number" value={donate.bank.accountNumber} />
              <CopyRow label="Bank and branch" value={donate.bank.bankName} />
              <CopyRow label="IFSC code" value={donate.bank.ifsc} />
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-surface p-6 text-foreground">
          <p>
            After you donate, please email your name and the payment reference
            to{" "}
            <a
              href={`mailto:${contact.email}`}
              className="break-words font-semibold underline underline-offset-4 hover:text-primary"
            >
              {contact.email}
            </a>{" "}
            so we can acknowledge your donation.
          </p>
          <p className="mt-2">
            Before a large transfer, please confirm these details by calling{" "}
            <a
              href={contact.phoneHref}
              className="font-semibold underline underline-offset-4 hover:text-primary"
            >
              {contact.phone}
            </a>
            .
          </p>
        </div>

        <p className="mt-6 rounded-lg border border-border p-4 text-foreground">
          {donate.taxNote}
        </p>
      </Section>

      {/* Where your donation goes */}
      <Section tone="surface">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Where Your Donation Goes
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {fundUses.map((item) => (
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