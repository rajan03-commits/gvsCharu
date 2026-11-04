export type Locale = "en" | "hi";

// English paths that have a finished Hindi page.
// Add a path here when its Hindi page is built, e.g. "/adoption".
export const hindiPages: string[] = [
  "/",
  "/about",
  "/adoption",
  "/contact",
  "/donate",
  "/gallery",
  "/stories",
];

// "/about" becomes "/hi/about" for Hindi, and stays "/about" for English.
// The Home page is the special case: "/" becomes "/hi".
export function localizePath(path: string, locale: Locale): string {
  if (locale === "en") return path;
  return path === "/" ? "/hi" : `/hi${path}`;
}

// The reverse: "/hi/about" becomes "/about", and "/hi" becomes "/".
// English paths come back unchanged.
export function stripLocale(pathname: string): string {
  if (pathname === "/hi") return "/";
  if (pathname.startsWith("/hi/")) return pathname.slice(3);
  return pathname;
}

// The address a link should use. On Hindi pages, a link to a page that has no
// Hindi version yet points to the English page instead of a 404.
// Accepts "/about", "/hi/about" or a link with a section, like "/about#mission".
export function hrefFor(path: string, locale: Locale): string {
  const clean = stripLocale(path);
  if (locale === "en") return clean;

  // Keep "#section" or "?query" aside while checking whether the page has a Hindi version
  const cut = clean.search(/[#?]/);
  const base = cut === -1 ? clean : clean.slice(0, cut);
  const tail = cut === -1 ? "" : clean.slice(cut);

  return hindiPages.includes(base) ? `${localizePath(base, "hi")}${tail}` : clean;
}

// Where the language switch should go from the current page.
export function otherLanguageHref(pathname: string, locale: Locale): string {
  const clean = stripLocale(pathname);
  if (locale === "hi") return clean;
  return hindiPages.includes(clean) ? localizePath(clean, "hi") : "/hi";
}