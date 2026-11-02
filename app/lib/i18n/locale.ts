export type Locale = "en" | "hi";

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