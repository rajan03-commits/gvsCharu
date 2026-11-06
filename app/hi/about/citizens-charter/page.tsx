// FILE PATH: app/hi/about/citizens-charter/page.tsx  (replaces the old file)
import type { Metadata } from "next";
import CharterContent from "@/components/CharterContent";
import DonateBanner from "@/components/DonateBanner";
import PageHeader from "@/components/PageHeader";
import { charterDescriptionHi, charterHi } from "@/app/lib/hi/charter";
import { hi } from "@/app/lib/i18n/hi";
import { hrefFor } from "@/app/lib/i18n/locale";

export const metadata: Metadata = {
  title: hi.nav.charter,
  description: charterDescriptionHi,
};

export default function HindiCitizensCharterPage() {
  return (
    <>
      <PageHeader
        title={hi.nav.charter}
        crumb={hi.nav.charter}
        homeLabel={hi.common.breadcrumbHome}
        homeHref="/hi"
        breadcrumbLabel={hi.a11y.breadcrumb}
      />
      <CharterContent data={charterHi} locale="hi" />
      <DonateBanner
        title={hi.donateBanner.title}
        text={hi.donateBanner.text}
        buttonLabel={hi.nav.donate}
        href={hrefFor("/donate", "hi")}
      />
    </>
  );
}