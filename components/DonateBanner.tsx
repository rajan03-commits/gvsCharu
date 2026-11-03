import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import { homeImages } from "@/app/lib/homeVisuals";
import { en } from "@/app/lib/i18n/en";

export default function DonateBanner({
  title = en.donateBanner.title,
  text = en.donateBanner.text,
  buttonLabel = en.nav.donate,
  href = "/donate",
}: {
  title?: string;
  text?: string;
  buttonLabel?: string;
  href?: string;
}) {
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
              {title}
            </h2>
            {text && <p className="mt-2 max-w-xl text-white">{text}</p>}
          </div>
          <ButtonLink href={href} variant="light">
            {buttonLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}