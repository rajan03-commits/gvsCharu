import type { MetadataRoute } from "next";
import { siteUrl } from "@/app/lib/site";

// Add "/gallery" and "/stories" here when those pages are built.
const paths = ["", "/about", "/adoption", "/contact", "/donate"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${siteUrl}${path}` }));
}