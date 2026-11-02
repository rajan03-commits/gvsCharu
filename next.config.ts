import type { NextConfig } from "next";
import { hindiApproved } from "./app/lib/site";

// While the NGO has not approved the Hindi text, the live site (Vercel)
// treats every /hi address as a page that does not exist.
// On your own computer VERCEL is not set, so Hindi still works for testing.
const blockHindi = !hindiApproved && process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    if (!blockHindi) return [];
    // "/hi-blocked" is not a real page, so the visitor gets the normal 404
    return {
      beforeFiles: [
        { source: "/hi", destination: "/hi-blocked" },
        { source: "/hi/:path*", destination: "/hi-blocked" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;