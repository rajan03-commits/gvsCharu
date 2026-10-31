import Image from "next/image";

export default function PromiseBanner({
  text,
  image,
}: {
  text: string;
  image?: { src: string; alt: string; position?: string };
}) {
  // "A. B. C." becomes ["A.", "B.", "C."] so each promise gets its own line
  const lines = text.split(/(?<=\.)\s+/);

  return (
    <section className="relative isolate overflow-hidden bg-primary">
      {image?.src && (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: image.position }}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-primary/90" />
        </>
      )}
      <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-white">
          Our Promise
        </p>
        <p className="mt-6 text-balance text-2xl font-bold leading-snug text-white md:text-4xl">
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}