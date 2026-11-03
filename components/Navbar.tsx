"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { links } from "@/app/lib/link";
import {
  hrefFor,
  otherLanguageHref,
  stripLocale,
  type Locale,
} from "@/app/lib/i18n/locale";

export default function Navbar({
  locale,
  name,
  nav,
  a11y,
  showSwitch,
}: {
  locale: Locale;
  name: string;
  nav: Record<string, string>;
  a11y: { mainMenu: string; toggleMenu: string; language: string };
  showSwitch: boolean;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // "/hi/about" becomes "/about", so it can be compared with the link's href
  const currentPath = stripLocale(pathname);
  const otherLocale: Locale = locale === "en" ? "hi" : "en";
  const switchHref = otherLanguageHref(pathname, locale);
  const switchLabel = locale === "en" ? "हिन्दी" : "English";

  return (
    <header className="border-b border-border bg-background">
      <nav
        aria-label={a11y.mainMenu}
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4"
      >
        <Link
          href={hrefFor("/", locale)}
          translate="no"
          className="max-w-40 text-lg font-bold leading-tight text-foreground"
        >
          {name}
        </Link>

        {/* Phone and tablet: the language button sits left of the menu button */}
        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          {showSwitch && (
            <Link
              href={switchHref}
              hrefLang={otherLocale}
              lang={otherLocale}
              aria-label={a11y.language}
              onClick={() => setIsOpen(false)}
              className="rounded-md border border-primary px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {switchLabel}
            </Link>
          )}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={a11y.toggleMenu}
            className="rounded-md border border-border px-3 py-2 text-foreground"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          className={`${isOpen ? "flex" : "hidden"} w-full flex-col gap-1 xl:flex xl:w-auto xl:flex-row xl:items-center xl:gap-x-2`}
        >
          {links.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <Link
                key={link.href}
                href={hrefFor(link.href, locale)}
                onClick={() => setIsOpen(false)}
                className={`whitespace-nowrap rounded-md px-3 py-2 transition-colors ${
                  isActive
                    ? "bg-surface font-semibold text-foreground"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {nav[link.key]}
              </Link>
            );
          })}

          {/* Desktop: the language link stays in the menu row */}
          {showSwitch && (
            <Link
              href={switchHref}
              hrefLang={otherLocale}
              lang={otherLocale}
              aria-label={a11y.language}
              className="hidden whitespace-nowrap rounded-md px-3 py-2 font-semibold text-primary transition-colors hover:text-primary-hover xl:inline-block"
            >
              {switchLabel}
            </Link>
          )}

          <Link
            href={hrefFor("/donate", locale)}
            onClick={() => setIsOpen(false)}
            className="whitespace-nowrap rounded-md bg-primary px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {nav.donate}
          </Link>
        </div>
      </nav>
    </header>
  );
}