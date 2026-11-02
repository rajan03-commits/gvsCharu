import type { Metadata } from "next";
import DonateBanner from "@/components/DonateBanner";
import GalleryGrid from "@/components/GalleryGrid";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { galleryNote, galleryPhotos } from "@/app/lib/gallery";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Browse photos of events, awards and activities from Gramin Vikas Samiti Charu in Gonda, Uttar Pradesh.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Photo Gallery" crumb="Photo Gallery" />

      <Section>
        {galleryPhotos.length > 0 ? (
          <GalleryGrid photos={galleryPhotos} />
        ) : (
          <p className="max-w-3xl text-lg text-foreground">
            Photos will be added here soon.
          </p>
        )}

        {galleryNote && (
          <p className="mt-8 rounded-lg border border-border p-4 text-foreground">
            {galleryNote}
          </p>
        )}
      </Section>

      <DonateBanner />
    </>
  );
}