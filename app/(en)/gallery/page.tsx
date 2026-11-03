import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import { galleryNote, galleryPhotos } from "@/app/lib/gallery";
import { imageDisclaimer } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Photos of the rooms and facilities at Gramin Vikas Samiti Charu in Gonda, Uttar Pradesh.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Photo Gallery" />
      <Section>
        {galleryPhotos.length > 0 ? (
          <GalleryGrid photos={galleryPhotos} />
        ) : (
          <p className="text-lg text-foreground">
            Photos will be added here soon.
          </p>
        )}
        {galleryNote && (
          <p className="mt-8 text-foreground">{galleryNote}</p>
        )}
        <p className="mt-4 text-sm text-foreground">
          {galleryPhotos.length > 0
            ? "These photos show the rooms and facilities only. We do not publish photos that identify children in our care."
            : imageDisclaimer}
        </p>
      </Section>
    </>
  );
}