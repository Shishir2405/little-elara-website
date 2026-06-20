import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProgressThread } from "@/components/layout/ProgressThread";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Little Elara Steps | Specialized Day Care & Pre-School in East Delhi",
  description:
    "Warm, structured day care and pre-school in East Delhi for every child, including those with ASD, ADHD and developmental delays. Book a no-obligation visit.",
  keywords: [
    "day care East Delhi",
    "pre school East Delhi",
    "special needs day care",
    "ASD ADHD child care",
    "Little Elara Steps",
  ],
  openGraph: {
    title: "Little Elara Steps | Specialized Day Care & Pre-School",
    description:
      "A safe, structured and joyful space for every child in East Delhi, including children with ASD, ADHD and developmental delays.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F2",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ChildCare",
  name: SITE.name,
  description:
    "Specialized day care and pre-school for every child, including children with ASD, ADHD and developmental delays.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Garden Lane",
    addressLocality: "East Delhi",
    addressRegion: "Delhi",
    postalCode: "110092",
    addressCountry: "IN",
  },
  telephone: SITE.phone,
  email: SITE.email,
  openingHours: "Mo-Fr 08:00-18:00",
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
      </body>
    </html>
  );
}
