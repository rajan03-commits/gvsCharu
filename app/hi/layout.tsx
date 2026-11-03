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
  hindiApproved,
} from "@/app/lib/site";
import { hi } from "@/app/lib/i18n/hi";
import { addressHi } from "@/app/lib/hi/contact";

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
    // DRAFT: the part after "|" is my wording, not yet approved by the NGO.
    default: `${siteNameHi} | बाल देखभाल और दत्तक ग्रहण`,
    template: `%s | ${siteNameHi}`,
  },
  // Item 13, NGO wording
  description: `${siteNameHi}, गोंडा में बच्चों की देखभाल, संरक्षण एवं दत्तक ग्रहण से संबंधित कार्यों के लिए प्रतिबद्ध संस्था है। हमारी गतिविधियों, दत्तक ग्रहण प्रक्रिया और बच्चों के कल्याण में सहयोग के अवसरों के बारे में जानें।`,
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
  // Same as the English layout. Confirm with the NGO what 2012 stands for
  // (the society itself?) and change BOTH layouts if it is wrong.
  foundingDate: "2012",
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
          showSwitch={hindiApproved || process.env.NODE_ENV !== "production"}
        />
        <main className="flex-1">{children}</main>
        <Footer
          locale="hi"
          name={siteNameHi}
          dict={hi}
          disclaimer={imageDisclaimerHi}
          address={addressHi}
        />
      </body>
    </html>
  );
}