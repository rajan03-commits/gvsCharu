import Link from "next/link";
import { links } from "@/app/lib/link";
import ContactInfo from "@/components/ContactInfo";
import { localizePath, type Locale } from "@/app/lib/i18n/locale";
import type { Dictionary } from "@/app/lib/i18n/en";

export default function Footer({
  locale,
  name,
  dict,
  disclaimer,
}: {
  locale: Locale;
  name: string;
  dict: Dictionary;
  disclaimer: string;
}) {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* NGO information */}
          <div>
            <Link
              href={localizePath("/", locale)}
              translate="no"
              className="text-xl font-bold text-foreground"
            >
              {name}
            </Link>

            <p className="mt-4 block max-w-sm text-sm leading-6 text-foreground">
              {dict.common.footerBlurb}
            </p>

            <Link
              href={localizePath("/donate", locale)}
              className="mt-5 inline-block rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {dict.nav.donate}
            </Link>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-base font-semibold text-foreground">
              {dict.common.quickLinks}
            </h2>

            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={localizePath(link.href, locale)}
                    className="text-sm text-foreground transition-colors hover:text-primary"
                  >
                    {dict.nav[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h2 className="text-base font-semibold text-foreground">
              {dict.common.contactUs}
            </h2>

            <div className="mt-4">
              <ContactInfo
                showMap={false}
                labels={{
                  viewOnMaps: dict.common.viewOnMaps,
                  opensInMaps: dict.a11y.opensInMaps,
                  opensInNewTab: dict.a11y.opensInNewTab,
                }}
              />
            </div>

            <Link
              href={localizePath("/contact", locale)}
              className="mt-3 inline-block text-sm font-medium text-foreground underline underline-offset-4 hover:text-primary"
            >
              {dict.common.getInTouch}
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-sm text-foreground">
            <span translate="no">© 2026 {name}.</span> {dict.common.rights}
          </p>
          <p className="mt-2 text-center text-sm text-foreground">
            {disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}