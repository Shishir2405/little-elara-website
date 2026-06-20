import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProgressThread } from "@/components/layout/ProgressThread";
import { StickyContact } from "@/components/layout/StickyContact";
import { SITE } from "@/lib/constants";

const KEYWORDS = [
  "day care New Ashok Nagar",
  "play school New Ashok Nagar",
  "pre school East Delhi",
  "preschool New Ashok Nagar Delhi",
  "daycare East Delhi",
  "creche New Ashok Nagar",
  "nursery school East Delhi",
  "inclusive day care Delhi",
  "special needs day care Delhi",
  "special needs school East Delhi",
  "autism day care Delhi",
  "ASD child care Delhi",
  "ADHD friendly preschool Delhi",
  "developmental delay support Delhi",
  "early intervention centre Delhi",
  "special educator East Delhi",
  "child development centre New Ashok Nagar",
  "play based learning Delhi",
  "life skills program for children Delhi",
  "best preschool near me",
  "day care near me New Ashok Nagar",
  "playschool admission Delhi 2026",
  "Little Elara Steps",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Little Elara Steps | Inclusive Day Care & Pre School in New Ashok Nagar, Delhi",
    template: "%s | Little Elara Steps",
  },
  description:
    "Little Elara Steps is a warm, inclusive day care & pre school in New Ashok Nagar, East Delhi. Play-based learning, life skills and individual support for every child, including ASD, ADHD and developmental delays. Admissions open. Call +91 93109 82342.",
  keywords: KEYWORDS,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  category: "education",
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: "Little Elara Steps | Inclusive Day Care & Pre School, New Ashok Nagar",
    description:
      "A safe, happy, structured space for every child in East Delhi. Play-based learning, life skills and inclusive support for ASD, ADHD and developmental delays.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Elara Steps | Inclusive Day Care & Pre School",
    description:
      "Every child learns at their own pace. Inclusive day care & pre school in New Ashok Nagar, East Delhi.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: { icon: "/logo.png", apple: "/logo.png" },
  // TODO(client): add Google Search Console verification token
  // verification: { google: "xxxxx" },
};

export const viewport: Viewport = {
  themeColor: "#F6FBFE",
  width: "device-width",
  initialScale: 1,
};

const GEO = { lat: 28.6058, lng: 77.3025 }; // approximate — New Ashok Nagar, Delhi

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ChildCare", "LocalBusiness", "EducationalOrganization"],
      "@id": `${SITE.url}/#business`,
      name: SITE.name,
      alternateName: "Little Elara Steps Day Care & Pre School",
      description:
        "Inclusive day care and pre school for every child, including children with ASD, ADHD and developmental delays.",
      url: SITE.url,
      logo: `${SITE.url}/logo.png`,
      image: `${SITE.url}/logo.png`,
      telephone: "+919310982342",
      email: SITE.email,
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "B-298, Plot No. 12-B, Block B, New Ashok Nagar",
        addressLocality: "East Delhi",
        addressRegion: "Delhi",
        postalCode: "110096",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: GEO.lat, longitude: GEO.lng },
      areaServed: [
        { "@type": "Place", name: "New Ashok Nagar" },
        { "@type": "Place", name: "East Delhi" },
        { "@type": "Place", name: "Delhi NCR" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      sameAs: [SITE.instagram],
    },
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#org`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/logo.png`,
      sameAs: [SITE.instagram],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { "@id": `${SITE.url}/#org` },
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What age groups does Little Elara Steps accept?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We welcome children from 2 years in our Play School & Preschool (2 to 6 years) and Day Care, and up to 15 years in our Inclusive Learning Program for children who need additional developmental support.",
          },
        },
        {
          "@type": "Question",
          name: "Do you support children with ASD, ADHD or developmental delays?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We are an inclusive centre. Regular children and children with autism (ASD), ADHD and developmental delays learn together in the same caring, structured environment, with individualised activities planned around each child's abilities and goals.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Little Elara Steps located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We are at B-298, Plot No. 12-B, Block B, New Ashok Nagar, East Delhi, Delhi 110096. You can call or WhatsApp us at +91 93109 82342.",
          },
        },
        {
          "@type": "Question",
          name: "What are your timings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We are open Monday to Saturday, 9:00 AM to 6:00 PM. Please confirm current timings when you book a visit.",
          },
        },
        {
          "@type": "Question",
          name: "How do I take admission or book a visit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Admissions are open with limited seats. Fill the enquiry form on our website or call/WhatsApp +91 93109 82342 to book a no-obligation visit and meet our team.",
          },
        },
        {
          "@type": "Question",
          name: "What does your programme focus on?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Instead of focusing only on studies, we focus on skills, communication, confidence, social and emotional growth, and independence through play-based learning and a structured daily routine. Parents receive regular progress updates.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE.url}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Programs", item: `${SITE.url}/#programs` },
        { "@type": "ListItem", position: 3, name: "Contact", item: `${SITE.url}/#contact` },
      ],
    },
  ],
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
