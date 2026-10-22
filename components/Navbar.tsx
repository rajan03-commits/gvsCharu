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
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-lg font-bold text-gray-900">
          GVS Charu Gonda
        </Link>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 text-gray-700 hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="rounded-md bg-gray-900 px-5 py-3 font-semibold text-white transition-colors hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Donate Now
          </Link>
        </div>
      </nav>
    </header>
  );
}