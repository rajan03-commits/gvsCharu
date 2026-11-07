
import type { MetadataRoute } from "next";
import { siteUrl } from "@/app/lib/site";
import { projects } from "@/app/lib/projects";

// Every page that exists in English. The Hindi pages live under /hi with the same paths.
const pages = [
  "",
  "/about",
  "/about/projects",
  "/about/citizens-charter",
  "/about/rules-and-laws",
  "/adoption",
  "/stories",
  "/events",
  "/gallery",
  "/contact",
  "/donate",
];

// One page per unit, taken from the projects list so new units are added automatically
const projectPages = projects.map((project) => `/about/projects/${project.slug}`);

const paths = [...pages, ...projectPages];

export default function sitemap(): MetadataRoute.Sitemap {
  const english = paths.map((path) => `${siteUrl}${path}`);
  // The Hindi home page is /hi, not /hi/
  const hindi = paths.map((path) => `${siteUrl}/hi${path}`);
  return [...english, ...hindi].map((url) => ({ url }));
}