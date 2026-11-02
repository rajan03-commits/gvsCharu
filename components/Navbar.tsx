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

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={a11y.toggleMenu}
          className="rounded-md border border-border px-3 py-2 text-foreground xl:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

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

          {showSwitch && (
            <Link
              href={otherLanguageHref(pathname, locale)}
              hrefLang={otherLocale}
              lang={otherLocale}
              aria-label={a11y.language}
              onClick={() => setIsOpen(false)}
              className="whitespace-nowrap rounded-md px-3 py-2 font-semibold text-primary transition-colors hover:text-primary-hover"
            >
              {locale === "en" ? "हिन्दी" : "English"}
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