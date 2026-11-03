import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { hi } from "@/app/lib/i18n/hi";
import { galleryPhotosHi, galleryPageHi as t } from "@/app/lib/hi/gallery";

export const metadata: Metadata = {
  title: hi.nav.gallery,
  description: t.description,
};

export default function HindiGalleryPage() {
  return (
    <>
      <PageHeader
        title={hi.nav.gallery}
        homeLabel={hi.common.breadcrumbHome}
        homeHref="/hi"
        breadcrumbLabel={hi.a11y.breadcrumb}
      />
      <Section>
        {galleryPhotosHi.length > 0 ? (
          <GalleryGrid
            photos={galleryPhotosHi}
            allLabel={t.all}
            filterLabel={t.filter}
          />
        ) : (
          <p className="text-lg text-foreground">{t.soon}</p>
        )}
        <p className="mt-4 text-sm text-foreground">{t.privacyNote}</p>
      </Section>
    </>
  );
}