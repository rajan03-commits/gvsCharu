import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Adoption Procedure", href: "/adoption" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "Success Stories", href: "/stories" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-border bg-background">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4"
      >
        <Link href="/" className="text-lg font-bold text-foreground">
          GVS Charu Gonda
        </Link>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="rounded-md bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Donate Now
          </Link>
        </div>
      </nav>
    </header>
  );
}