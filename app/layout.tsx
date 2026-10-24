import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GVS Charu Gonda | Child Care and Adoption",
    template: "%s | GVS Charu Gonda",
  },
  description:
    "GVS Charu Gonda is a child adoption organisation. Learn about our work and the adoption procedure, and see how you can support children with a donation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        </body>

    </html>
  );
}
