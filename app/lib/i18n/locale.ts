export type Locale = "en" | "hi";

// English paths that have a finished Hindi page.
// Add a path here when its Hindi page is built, e.g. "/adoption".
export const hindiPages: string[] = ["/"];

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
// Accepts "/about" or "/hi/about".
export function hrefFor(path: string, locale: Locale): string {
  const clean = stripLocale(path);
  if (locale === "en") return clean;
  return hindiPages.includes(clean) ? localizePath(clean, "hi") : clean;
}

// Where the language switch should go from the current page.
export function otherLanguageHref(pathname: string, locale: Locale): string {
  const clean = stripLocale(pathname);
  if (locale === "hi") return clean;
  return hindiPages.includes(clean) ? localizePath(clean, "hi") : "/hi";
}