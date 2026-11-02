import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import { homeImages } from "@/app/lib/homeVisuals";

export default function DonateBanner() {
  const image = homeImages.strip;

  return (
    <section className="relative isolate overflow-hidden bg-primary">
      {image.src && (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: image.position }}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-primary/85" />
        </>
      )}
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Help a child find a loving home
            </h2>
            <p className="mt-2 max-w-xl text-white">
              Every contribution supports the care and protection of children
              in need.
            </p>
          </div>
          <ButtonLink href="/donate" variant="light">
            Donate Now
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}