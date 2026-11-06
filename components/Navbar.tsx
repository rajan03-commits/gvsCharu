// FILE PATH: components/Navbar.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { links } from "@/app/lib/link";
import SocialLinks from "@/components/SocialLinks";
import { annualReports, board } from "@/app/lib/projects";
import {
  hrefFor,
  otherLanguageHref,
  stripLocale,
  type Locale,
} from "@/app/lib/i18n/locale";

type Item = { href: string; key: string };

// The About Us dropdown. Board and Annual Reports appear only once they have content.
const ngoItems: Item[] = [
  { href: "/about#mission", key: "mission" },
  { href: "/about#vision", key: "vision" },
  ...(board.length > 0 ? [{ href: "/about#board", key: "board" }] : []),
  { href: "/about#awards", key: "awards" },
  ...(annualReports.length > 0
    ? [{ href: "/about#reports", key: "reports" }]
    : []),
];

const projectItems: Item[] = [
  { href: "/about/projects/saa", key: "saa" },
  { href: "/about/projects/cci-infants", key: "cciInfants" },
  { href: "/about/projects/cci-girls", key: "cciGirls" },
  { href: "/about/projects/cci-boys", key: "cciBoys" },
  { href: "/about/projects/nios-obe", key: "niosObe" },
  { href: "/about/projects/nios-vocational", key: "niosVocational" },
];

const otherItems: Item[] = [
  { href: "/about/rules-and-laws", key: "rules" },
  { href: "/about/citizens-charter", key: "charter" },
];

const itemClass =
  "block rounded-md px-3 py-2 text-foreground transition-colors hover:bg-surface hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
const headingClass =
  "block rounded-md px-3 py-2 font-semibold text-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

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
  const [aboutOpen, setAboutOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const aboutButtonRef = useRef<HTMLButtonElement>(null);

  // "/hi/about" becomes "/about", so it can be compared with the link's href
  const currentPath = stripLocale(pathname);
  const otherLocale: Locale = locale === "en" ? "hi" : "en";
  const switchHref = otherLanguageHref(pathname, locale);
  const switchLabel = locale === "en" ? "हिन्दी" : "English";

  function closeAll() {
    setIsOpen(false);
    setAboutOpen(false);
  }

  // Close the dropdown on a click outside the header or on the Escape key
  useEffect(() => {
    if (!aboutOpen) return;

    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setAboutOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setAboutOpen(false);
        aboutButtonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [aboutOpen]);

  return (
    <header
      ref={headerRef}
      className="relative z-40 border-b border-border bg-background"
    >
      <nav
        aria-label={a11y.mainMenu}
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 xl:gap-y-2"
      >
        <Link
          href={hrefFor("/", locale)}
          translate="no"
          className="flex items-center gap-2.5 font-bold leading-tight text-foreground"
        >
          <span className="max-w-32 text-base sm:max-w-40 sm:text-lg">
            {name}
          </span>
        </Link>

        {/* Phone and tablet: the language button sits left of the menu button */}
        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          {showSwitch && (
            <Link
              href={switchHref}
              hrefLang={otherLocale}
              lang={otherLocale}
              aria-label={a11y.language}
              onClick={closeAll}
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

        {/* Desktop: social icons sit at the top level, level with the name */}
        <div className="hidden xl:block">
          <SocialLinks locale={locale} />
        </div>

        <div
          className={`${isOpen ? "flex" : "hidden"} w-full flex-col gap-1 xl:flex xl:w-full xl:flex-row xl:items-center xl:gap-x-2 xl:border-t xl:border-border xl:pt-3`}
        >
          {links.map((link) => {
            if (link.key === "about") {
              const aboutActive = currentPath.startsWith("/about");
              return (
                <div key={link.href}>
                  <button
                    ref={aboutButtonRef}
                    type="button"
                    onClick={() => setAboutOpen(!aboutOpen)}
                    aria-expanded={aboutOpen}
                    aria-controls="about-menu"
                    className={`flex w-full items-center justify-between gap-1 whitespace-nowrap rounded-md px-3 py-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary xl:w-auto ${
                      aboutActive
                        ? "bg-surface font-semibold text-foreground"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {nav.about}
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Phone: expands inside the menu. Desktop: a wide panel under the header. */}
                  <div
                    id="about-menu"
                    className={`${aboutOpen ? "block" : "hidden"} xl:absolute xl:inset-x-0 xl:top-full xl:border-b xl:border-border xl:bg-background xl:shadow-lg`}
                  >
                    <div className="grid gap-4 pb-2 pl-3 xl:mx-auto xl:max-w-6xl xl:grid-cols-3 xl:gap-8 xl:px-6 xl:py-8">
                      <div>
                        <Link
                          href={hrefFor("/about", locale)}
                          onClick={closeAll}
                          className={headingClass}
                        >
                          {nav.aboutNgo}
                        </Link>
                        <ul className="xl:mt-1">
                          {ngoItems.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={hrefFor(item.href, locale)}
                                onClick={closeAll}
                                className={itemClass}
                              >
                                {nav[item.key]}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <Link
                          href={hrefFor("/about/projects", locale)}
                          onClick={closeAll}
                          className={headingClass}
                        >
                          {nav.projects}
                        </Link>
                        <ul className="xl:mt-1">
                          {projectItems.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={hrefFor(item.href, locale)}
                                onClick={closeAll}
                                className={itemClass}
                              >
                                {nav[item.key]}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="px-3 py-2 font-semibold text-foreground">
                          {nav.moreInfo}
                        </p>
                        <ul className="xl:mt-1">
                          {otherItems.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={hrefFor(item.href, locale)}
                                onClick={closeAll}
                                className={itemClass}
                              >
                                {nav[item.key]}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            const isActive = currentPath === link.href;
            return (
              <Link
                key={link.href}
                href={hrefFor(link.href, locale)}
                onClick={closeAll}
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
              className="hidden whitespace-nowrap rounded-md px-3 py-2 font-semibold text-primary transition-colors hover:text-primary-hover xl:ml-auto xl:inline-block"
            >
              {switchLabel}
            </Link>
          )}

          <Link
            href={hrefFor("/donate", locale)}
            onClick={closeAll}
            className={`whitespace-nowrap rounded-md bg-primary px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${showSwitch ? "" : "xl:ml-auto"}`}
          >
            {nav.donate}
          </Link>

          {/* Phone: social icons sit at the bottom of the opened menu */}
          <SocialLinks locale={locale} className="px-3 xl:hidden" />
        </div>
      </nav>
    </header>
  );
}