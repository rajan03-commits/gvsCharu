import type { Metadata } from "next";
import { Noto_Sans_Devanagari } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  allowIndexing,
  imageDisclaimerHi,
  siteName,
  siteNameHi,
  siteUrl,
} from "@/app/lib/site";
import { hi } from "@/app/lib/i18n/hi";

// Geist has no Devanagari letters, so Hindi pages load this font instead.
// It is loaded here only, so English visitors never download it.
const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-hindi",
  subsets: ["devanagari", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteNameHi} | बाल देखभाल और दत्तक ग्रहण`,
    template: `%s | ${siteNameHi}`,
  },
  // DRAFT Hindi wording: the NGO must approve it in writing.
  description:
    "ग्रामीण विकास समिति चारु बच्चों की देखभाल और दत्तक ग्रहण से जुड़ी संस्था है। हमारे कार्य और दत्तक ग्रहण प्रक्रिया की जानकारी लें, और दान देकर बच्चों की सहायता करें।",
  openGraph: {
    siteName: siteNameHi,
    type: "website",
    locale: "hi_IN",
  },
  robots: allowIndexing ? undefined : { index: false, follow: false },
};

const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: siteNameHi,
  alternateName: siteName,
  url: siteUrl,
  foundingDate: "1998",
  areaServed: "Gonda district, Uttar Pradesh, India",
};

export default function HindiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="hi"
      className={`${notoDevanagari.variable} h-full antialiased`}
    >
      <body
        className="flex min-h-full flex-col"
        style={{ fontFamily: "var(--font-hindi), sans-serif" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organisationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar
          locale="hi"
          name={siteNameHi}
          nav={hi.nav}
          a11y={hi.a11y}
        />
        <main className="flex-1">{children}</main>
        <Footer
          locale="hi"
          name={siteNameHi}
          dict={hi}
          disclaimer={imageDisclaimerHi}
        />
      </body>
    </html>
  );
}