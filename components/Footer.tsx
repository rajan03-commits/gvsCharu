import Link from "next/link";
import { links } from "@/app/lib/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* NGO information */}
          <div>
            <Link href="/" className="text-xl font-bold text-foreground">
              GVS Charu Gonda
            </Link>

            <p className="mt-4 block  max-w-sm text-sm leading-6 text-foreground">
              A safe, caring future for every child begins with a family. Explore our adoption procedure, read our success stories and find ways to support us.
            </p>

            <Link
              href="/donate"
              className="mt-5 inline-block rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Donate Now
            </Link>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-base font-semibold text-foreground">
              Quick Links
            </h2>

            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h2 className="text-base font-semibold text-foreground">
              Contact Us
            </h2>

            <p className="mt-4 text-sm leading-6 text-foreground">
              [Address]
              <br />
              [Phone number]
              <br />
              [Email address]
            </p>

            <Link
              href="/contact"
              className="mt-3 inline-block text-sm font-medium text-foreground underline underline-offset-4 hover:text-primary"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-sm text-foreground">
            © 2026 GVS Charu Gonda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}