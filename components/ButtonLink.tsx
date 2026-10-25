import Link from "next/link";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-hover focus-visible:outline-primary",
  outline:
    "border border-primary text-primary hover:bg-surface focus-visible:outline-primary",
  light:
    "bg-background text-primary hover:bg-surface focus-visible:outline-background",
};

export default function ButtonLink({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: keyof typeof variants;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-md px-6 py-3 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}