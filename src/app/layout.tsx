import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProgressThread } from "@/components/layout/ProgressThread";
import { StickyContact } from "@/components/layout/StickyContact";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Little Elara Steps | Inclusive Day Care & Pre School in New Ashok Nagar, Delhi",
  description:
    "A safe, happy and structured inclusive day care & pre school in New Ashok Nagar, East Delhi. Play-based learning, life skills and support for every child. Book a visit.",
  keywords: [
    "day care New Ashok Nagar",
    "pre school East Delhi",
    "inclusive day care Delhi",
    "play school New Ashok Nagar",
    "special needs day care Delhi",
    "Little Elara Steps",
  ],
  openGraph: {
    title: "Little Elara Steps | Inclusive Day Care & Pre School",
    description:
      "Every child learns at their own pace. Every little step matters. Inclusive day care & pre school in New Ashok Nagar, East Delhi.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#F6FBFE",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ChildCare",
  name: SITE.name,
  description:
    "Inclusive day care and pre school for every child, including children with ASD, ADHD and developmental delays.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "B-298, Plot No. 12-B, Block B",
    addressLocality: "New Ashok Nagar, East Delhi",
    addressRegion: "Delhi",
    postalCode: "110096",
    addressCountry: "IN",
  },
  telephone: SITE.phone,
  email: SITE.email,
  openingHours: "Mo-Sa 09:00-18:00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#top" className="skip-link">
          Skip to content
        </a>
        <ProgressThread />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyContact />
      </body>
    </html>
  );
}
