
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Adoption Procedure", href: "/adoption" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "Success Stories", href: "/stories" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* NGO information */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold text-gray-900"
            >
              GVS Charu Gonda
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600">
              Working towards a safer, caring and supportive
              future for children. Learn about our work,
              adoption procedure and ways to support us.
            </p>

            <Link
              href="/donate"
              className="mt-5 inline-block rounded-md bg-gray-900 px-5 py-3
              text-sm font-semibold text-white transition-colors
              hover:bg-gray-700"
            >
              Donate Now
            </Link>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              Quick Links
            </h2>

            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              Contact Us
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-600">
              GVS Charu Gonda
              <br />
              Gonda, Uttar Pradesh, India
            </p>

            <Link
              href="/contact"
              className="mt-3 inline-block text-sm font-medium text-gray-900 underline underline-offset-4"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-500">
            © 2026 GVS Charu Gonda. All rights reserved.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
