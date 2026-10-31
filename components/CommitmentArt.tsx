import { ShieldCheck } from "lucide-react";

// Decorative panel, so screen readers skip it (the same words appear in the page text)
export default function CommitmentArt() {
  return (
    <div
      aria-hidden="true"
      className="relative flex min-h-56 flex-col items-center justify-center gap-5 overflow-hidden rounded-lg bg-background p-8 text-center lg:aspect-[3/4] lg:min-h-0"
    >
      <svg
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full text-primary/15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="200" cy="250" r="70" />
        <circle cx="200" cy="250" r="120" />
        <circle cx="200" cy="250" r="170" />
        <circle cx="200" cy="250" r="220" />
        <circle cx="200" cy="250" r="270" />
      </svg>
      <span className="relative flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white">
        <ShieldCheck size={44} />
      </span>
      <p className="relative text-balance text-2xl font-bold text-foreground">
        Safe. Legal. Child-centric.
      </p>
    </div>
  );
}