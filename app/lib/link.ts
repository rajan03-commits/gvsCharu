// FILE PATH: app/lib/link.ts  (replaces the old file)
export type NavKey =
  | "home"
  | "about"
  | "adoption"
  | "gallery"
  | "stories"
  | "events"
  | "contact";

type Navlink = {
  key: NavKey;
  label: string; // English label, still used by Footer until it gets a dictionary
  href: string;
};

export const links: Navlink[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About Us", href: "/about" },
  { key: "adoption", label: "Adoption Procedure", href: "/adoption" },
  { key: "gallery", label: "Photo Gallery", href: "/gallery" },
  { key: "stories", label: "Success Stories", href: "/stories" },
  { key: "events", label: "Notices & Events", href: "/events" },
  { key: "contact", label: "Contact Us", href: "/contact" },
];