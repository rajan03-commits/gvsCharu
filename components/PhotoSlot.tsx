import Image from "next/image";

export default function PhotoSlot({
  src,
  alt = "",
  placeholder,
  className = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  position = "center",
  preload = false,
}: {
  src?: string;
  alt?: string;
  placeholder: string;
  className?: string;
  sizes?: string;
  position?: string;
  preload?: boolean;
}) {
  if (!src) {
    return (
      <div
        aria-hidden="true"
        className={`flex items-center justify-center rounded-lg bg-surface p-6 text-center text-foreground ${className}`}
      >
        {placeholder}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-lg bg-surface ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}