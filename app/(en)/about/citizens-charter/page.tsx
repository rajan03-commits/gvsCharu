import type { Metadata } from "next";
import CharterContent from "@/components/CharterContent";
import DonateBanner from "@/components/DonateBanner";
import PageHeader from "@/components/PageHeader";
import { charter, charterDescription } from "@/app/lib/charter";

export const metadata: Metadata = {
  title: "Citizen's Charter",
  description: charterDescription,
};

export default function CitizensCharterPage() {
  return (
    <>
      <PageHeader title="Citizen's Charter" crumb="Citizen's Charter" />
      <CharterContent data={charter} locale="en" />
      <DonateBanner />
    </>
  );
}