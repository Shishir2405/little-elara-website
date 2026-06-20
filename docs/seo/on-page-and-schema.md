# Little Elara Steps — On-Page SEO, Schema.org & GEO Implementation

> **Scope:** Single-page Next.js 15 (App Router) site. Sections/anchors: `#about`, `#programs`, `#why`, `#journey`, `#gallery`, `#contact`.
> **Author:** Technical SEO + Schema.org + GEO specialist
> **Last updated:** 2026-06-21

---

## ⚠️ FLAGS — RESOLVE BEFORE GO-LIVE

1. **Domain vs. brand spelling mismatch (CRITICAL).**
   The brand is **"Little Elara Steps"** (spelled **Elara**), but the client-given domain is **`https://littleelerasteps.com`** (spelled **elera**). All absolute URLs in this document use the client-given domain `littleelerasteps.com` as instructed. **Before launch, confirm which spelling is canonical:**
   - If the _brand_ spelling is correct, ideally register **`littleelarasteps.com`** and 301-redirect the misspelled domain to it (and make the correct spelling canonical).
   - At minimum, register both spellings and 301 one to the other so visitors who type the brand name correctly still land on the site. A spelling mismatch between brand and domain hurts direct traffic, brand recall, and trust signals.
   - **Whichever domain becomes canonical, update every URL in this doc to match.**

2. **Email is a placeholder — CONFIRM.**
   `littleelarasteps@gmail.com` was provided as a placeholder. Confirm the real inbox before publishing it in schema, `mailto:` links, or `llms.txt`. A monitored address is required (parents will email it).

3. **Geo coordinates are approximate.**
   `28.6058, 77.3025` is an approximate centroid for New Ashok Nagar, East Delhi — it is **not** the exact rooftop of B-298, Plot No. 12-B. Replace with the precise lat/long from Google Business Profile / Google Maps once the listing is verified. Labeled `"@type": "GeoCoordinates"` with a note below.

4. **Google Business Profile (GBP).**
   None of the schema below substitutes for a verified Google Business Profile. Create/verify GBP for the exact address — it is the single biggest local-SEO lever for a neighborhood daycare and feeds Google Maps + local pack.

---

## Table of Contents

1. [On-Page Checklist](#1-on-page-checklist)
2. [JSON-LD Schema Blocks (@graph)](#2-json-ld-schema-blocks)
3. [robots.txt](#3-robotstxt)
4. [llms.txt](#4-llmstxt)
5. [Implementation Notes for Next.js 15](#5-implementation-notes-for-nextjs-15)

---

## 1. On-Page Checklist

### 1.1 `<title>` options

Target: keep under ~60 characters so it isn't truncated in SERPs. Front-load the primary keyword + location.

| #   | Title                                                                   | Chars |
| --- | ----------------------------------------------------------------------- | ----- |
| A   | `Little Elara Steps — Inclusive Day Care & Preschool, East Delhi`       | 63    |
| B   | `Little Elara Steps \| Inclusive Preschool & Day Care, New Ashok Nagar` | 67    |
| C   | `Inclusive Day Care & Preschool in East Delhi \| Little Elara Steps`    | 64    |

> **Recommendation:** Option **A** (brand-first, includes "Inclusive", the two core services, and the broad location "East Delhi"). All three slightly exceed 60 chars; if you want a hard-safe length, trim "East Delhi" → "Delhi" on Option A to land at ~57. Inclusivity is a differentiator and a search term ("inclusive preschool Delhi", "special needs daycare Delhi"), so keep "Inclusive" in the title.

**Sub-60 safe variant:** `Little Elara Steps — Inclusive Preschool & Day Care, Delhi` (57)

### 1.2 Meta description options

Target: ~150–160 characters. Include location, the inclusive angle, ages, and a soft CTA. Google may rewrite descriptions, but a strong one improves CTR and is reused by AI search snippets.

| #   | Description                                                                                                                                                                                  | Chars |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| A   | `Warm, inclusive day care & preschool in New Ashok Nagar, East Delhi for ages 2–6, plus a special-needs program (ASD/ADHD) for 2–15. Book a free visit.`                                     | 149   |
| B   | `Little Elara Steps is an inclusive preschool & day care in East Delhi. Play-based learning for ages 2–6 and tailored support for children with ASD, ADHD & developmental delays. Visit us.` | 184   |
| C   | `Inclusive day care & preschool in East Delhi. Safe, play-based care for ages 2–6 and an individualized inclusive program for children aged 2–15. WhatsApp +91 93109 82342.`                 | 168   |

> **Recommendation:** Option **A** (149 chars — fits without truncation, leads with the inclusive + location hook, covers both age bands, ends with a clear CTA). Option B is informative but will truncate (~155 char cutoff); trim if used. Option C is good if you want the phone number visible in the snippet.

### 1.3 Heading hierarchy

A single-page site must still have a **clean, single-H1** outline. Search engines and AI parsers use headings to understand structure; assistive tech relies on it too.

```
H1  Little Elara Steps — Inclusive Day Care & Preschool in East Delhi
│     (one H1 only — lives in the Hero section)
│
├── H2  About Little Elara Steps                         → #about
│     └── H3 (optional) Our philosophy / Our team
│
├── H2  Our Programs                                     → #programs
│     ├── H3  Play School & Preschool (Ages 2–6)
│     ├── H3  Inclusive Learning Program (Ages 2–15)
│     └── H3  Day Care Program
│
├── H2  Why Choose Us                                    → #why
│     └── H3 (optional) per benefit, OR keep benefits as a non-heading list
│
├── H2  The Little Elara Journey (Ages & Milestones)     → #journey
│     └── H3 per age stage if useful
│
├── H2  Gallery                                          → #gallery
│
└── H2  Visit Us / Contact                               → #contact
      └── H3  Hours, Address, WhatsApp
```

**Rules:**

- **Exactly one `<h1>`** on the page. The hero's main line should be the H1 (not a logo `<img>` alone).
- Never skip levels (no H2 → H4). Use H3 only nested under an H2.
- Headings describe content, not styling. Don't use a heading tag purely to make text big — style with CSS.
- Each section wrapper should be `<section id="…" aria-labelledby="…">` with its H2 carrying the matching `id` referenced by `aria-labelledby`.
- Include the word **"inclusive"** and **"East Delhi" / "New Ashok Nagar"** in headings/body naturally — they are core ranking + GEO terms.

### 1.4 Image alt-text guidance

Every meaningful `<img>` / `next/image` needs descriptive, specific alt text. Decorative images (background blobs, doodles, the `Doodles`/`Wave` SVGs) should have **empty** alt (`alt=""`) so screen readers skip them.

| Image type                         | Good alt example                                                                                           | Avoid                            |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------- |
| Logo (in header)                   | `Little Elara Steps logo`                                                                                  | `logo`, `logo.png`, empty        |
| Logo (decorative repeat in footer) | `alt=""` (decorative)                                                                                      | duplicating the brand name twice |
| Hero photo of children             | `Children playing together in the Little Elara Steps preschool classroom in East Delhi`                    | `kids`, `IMG_2043`               |
| Program photo                      | `Teacher reading to toddlers in the Play School program at Little Elara Steps`                             | `program`, `daycare image`       |
| Inclusive-program photo            | `One-on-one inclusive learning session with a child at Little Elara Steps, New Ashok Nagar`                | `special needs`                  |
| Gallery photos                     | Describe the actual scene + activity, e.g. `Children doing finger-painting during a sensory play activity` | `gallery1`, `photo`              |
| Doodles / waves / blobs (SVG)      | `alt=""` + `aria-hidden="true"`                                                                            | descriptive alt on decoration    |

**Rules:**

- Keep alt under ~125 characters; describe what's in the image and its purpose, not "image of…".
- Don't keyword-stuff. One natural mention of brand/location per page across alts is plenty.
- Provide real photos (not stock) where possible — original imagery builds trust for a daycare and is what parents look for.
- Compress + serve modern formats (AVIF/WebP) via `next/image`. Always set `width`/`height` (or `fill` + sized container) to prevent layout shift.

### 1.5 Internal anchor structure

Single-page sites rely on smooth in-page anchor navigation. This both aids UX and lets schema (`SiteNavigationElement` / breadcrumb-style) and AI crawlers map the page.

**Canonical anchor set (must match `id`s in markup):**

| Nav label | Anchor      | Section component |
| --------- | ----------- | ----------------- |
| About     | `#about`    | `About.tsx`       |
| Programs  | `#programs` | `Programs.tsx`    |
| Why Us    | `#why`      | `WhyChooseUs.tsx` |
| Journey   | `#journey`  | `AgeJourney.tsx`  |
| Gallery   | `#gallery`  | `Gallery.tsx`     |
| Contact   | `#contact`  | `Contact.tsx`     |

**Rules:**

- Nav links use real `<a href="#programs">` anchors (crawlable), not JS-only scroll handlers. You can still `e.preventDefault()` for smooth scroll, but the `href` must be a real fragment.
- Add `scroll-margin-top` to each section equal to the sticky navbar height so anchored sections aren't hidden under the header.
- Respect `prefers-reduced-motion` for smooth-scroll and the motion in `motion.ts`.
- Provide a "skip to content" link for accessibility.
- Optional: a deep-link to admissions (`/admissions` exists in `public/`) — if it's a separate route, add it to the breadcrumb + sitemap. If it's just an anchor, keep it in the anchor set above.
- Keep one **canonical URL**: `https://littleelerasteps.com/` (set `<link rel="canonical">` / Next.js `metadata.alternates.canonical`). Fragment URLs (`/#programs`) should not be presented as separate canonical pages.

### 1.6 Core Web Vitals notes (Next.js 15)

| Metric                              | Target  | What to do here                                                                                                                                                                                                                                                                                |
| ----------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **LCP** (Largest Contentful Paint)  | < 2.5s  | The hero image/text is almost certainly the LCP element. Use `next/image` with `priority` on the hero image only; preload the hero font. Serve AVIF/WebP. Avoid a giant unoptimized hero (e.g. don't ship the 264 KB `logo.png` as the hero — resize/compress).                                |
| **INP** (Interaction to Next Paint) | < 200ms | Keep client JS lean. Make sections Server Components where possible; mark only interactive bits (`Navbar`, `StickyContact`, motion wrappers) as `"use client"`. Debounce scroll listeners (`ProgressThread`). Avoid heavy animation libraries blocking the main thread; prefer CSS transforms. |
| **CLS** (Cumulative Layout Shift)   | < 0.1   | Always set explicit dimensions on images (`next/image` enforces this). Reserve space for the sticky navbar and any lazy gallery. Use `font-display: swap` with a matched fallback metric to avoid text reflow.                                                                                 |
| **TTFB**                            | < 0.8s  | Static-render the page (SSG/ISR). A single-page marketing site should be fully static — no per-request data. Deploy on a CDN/edge.                                                                                                                                                             |

**Additional technical checks:**

- `next.config.mjs`: enable image optimization, set `images.formats: ['image/avif','image/webp']`.
- Lazy-load below-the-fold gallery images (`loading="lazy"` is default in `next/image` for non-priority).
- Inline critical CSS (Next handles this); avoid render-blocking third-party scripts. If you add Google Maps embed in Contact, lazy-load it (load on interaction / when scrolled into view) so it doesn't tank LCP/INP.
- Self-host fonts (or use `next/font`) to avoid extra connections and CLS.
- Lighthouse / PageSpeed Insights pass on **mobile** is what matters most (parents browse on phones).
- Add `<meta name="theme-color">`, a proper favicon set, and a web app manifest.
- Ensure HTTPS, HTTP/2+, gzip/brotli, and a valid `sitemap.xml` (Next.js `app/sitemap.ts`).

---

## 2. JSON-LD Schema Blocks

**Conventions used (per claude-seo schema rules):**

- `@context`: `https://schema.org`
- All URLs absolute, on the client-given domain `https://littleelerasteps.com`.
- All dates ISO 8601.
- No placeholder text, no deprecated types (no `HowTo`, no `SpecialAnnouncement`).
- `FAQPage` retained — Google retired FAQ rich results for most sites, but it remains valuable for AI/GEO citation and is valid Schema.org.
- Delivered as a **single `@graph`** so entities cross-reference by `@id` (recommended for one consolidated `<script type="application/ld+json">`).

> **Before pasting:** swap the placeholder email if not confirmed, replace approximate geo coordinates with exact values, and verify the image URLs resolve. Set the same `@id` base (`https://littleelerasteps.com`) everywhere so the entities link.

### 2.1 Consolidated `@graph` (LocalBusiness/ChildCare + Organization + WebSite + BreadcrumbList + FAQPage)

Paste this as one block. (`ChildCare` is a subtype of `LocalBusiness`, so it carries all LocalBusiness properties.)

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ChildCare", "LocalBusiness", "EducationalOrganization"],
        "@id": "https://littleelerasteps.com/#business",
        "name": "Little Elara Steps",
        "alternateName": "Little Elara Steps Day Care & Pre School",
        "description": "Inclusive day care and preschool in New Ashok Nagar, East Delhi. Play-based learning for ages 2–6, an inclusive learning program for children aged 2–15 with autism, ADHD and developmental delays, and a full day care program.",
        "url": "https://littleelerasteps.com/",
        "image": "https://littleelerasteps.com/logo.png",
        "logo": "https://littleelerasteps.com/logo.png",
        "telephone": "+919310982342",
        "email": "littleelarasteps@gmail.com",
        "priceRange": "₹₹",
        "currenciesAccepted": "INR",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "B-298, Plot No. 12-B, Block B, New Ashok Nagar",
          "addressLocality": "New Ashok Nagar",
          "addressRegion": "Delhi",
          "postalCode": "110096",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 28.6058,
          "longitude": 77.3025,
          "description": "Approximate coordinates for New Ashok Nagar, East Delhi — replace with exact rooftop coordinates from the verified Google Business Profile."
        },
        "hasMap": "https://www.google.com/maps?q=28.6058,77.3025",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "East Delhi"
          },
          {
            "@type": "Place",
            "name": "New Ashok Nagar, Mayur Vihar, Patparganj, Kondli, Trilokpuri and nearby East Delhi areas"
          }
        ],
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": "Parents of children aged 2 to 15, including children with autism spectrum disorder, ADHD and developmental delays"
        },
        "knowsAbout": [
          "Inclusive early childhood education",
          "Special needs childcare",
          "Autism spectrum disorder support",
          "ADHD support",
          "Developmental delay intervention",
          "Play-based preschool learning"
        ],
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Play School & Preschool",
              "description": "Play-based early learning for children aged 2 to 6 years.",
              "serviceType": "Preschool"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Inclusive Learning Program",
              "description": "Individualized, therapist-informed learning for children aged 2 to 15 with autism, ADHD or developmental delays.",
              "serviceType": "Special needs education"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Day Care Program",
              "description": "Safe, supervised full-day care with meals, rest and structured activities.",
              "serviceType": "Day care"
            }
          }
        ],
        "sameAs": ["https://www.instagram.com/littleelarasteps"],
        "parentOrganization": { "@id": "https://littleelerasteps.com/#organization" }
      },
      {
        "@type": "Organization",
        "@id": "https://littleelerasteps.com/#organization",
        "name": "Little Elara Steps",
        "url": "https://littleelerasteps.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://littleelerasteps.com/logo.png"
        },
        "email": "littleelarasteps@gmail.com",
        "telephone": "+919310982342",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "B-298, Plot No. 12-B, Block B, New Ashok Nagar",
          "addressLocality": "New Ashok Nagar",
          "addressRegion": "Delhi",
          "postalCode": "110096",
          "addressCountry": "IN"
        },
        "sameAs": ["https://www.instagram.com/littleelarasteps"]
      },
      {
        "@type": "WebSite",
        "@id": "https://littleelerasteps.com/#website",
        "url": "https://littleelerasteps.com/",
        "name": "Little Elara Steps",
        "description": "Inclusive day care and preschool in East Delhi.",
        "inLanguage": "en-IN",
        "publisher": { "@id": "https://littleelerasteps.com/#organization" }
      },
      {
        "@type": "WebPage",
        "@id": "https://littleelerasteps.com/#webpage",
        "url": "https://littleelerasteps.com/",
        "name": "Little Elara Steps — Inclusive Day Care & Preschool, East Delhi",
        "description": "Warm, inclusive day care & preschool in New Ashok Nagar, East Delhi for ages 2–6, plus a special-needs program for ages 2–15.",
        "isPartOf": { "@id": "https://littleelerasteps.com/#website" },
        "about": { "@id": "https://littleelerasteps.com/#business" },
        "inLanguage": "en-IN",
        "breadcrumb": { "@id": "https://littleelerasteps.com/#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://littleelerasteps.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://littleelerasteps.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Programs",
            "item": "https://littleelerasteps.com/#programs"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Contact",
            "item": "https://littleelerasteps.com/#contact"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://littleelerasteps.com/#faq",
        "isPartOf": { "@id": "https://littleelerasteps.com/#webpage" },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What ages do you accept at Little Elara Steps?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our Play School and Preschool program is for children aged 2 to 6 years. Our Inclusive Learning Program supports children from 2 to 15 years who have autism spectrum disorder (ASD), ADHD or developmental delays. The Day Care Program is available alongside both, so siblings of different ages can attend together."
            }
          },
          {
            "@type": "Question",
            "name": "How does the admissions process work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Admissions are open year-round, subject to availability. The process starts with a phone or WhatsApp conversation on +91 93109 82342, followed by a visit to the centre where you meet our team and see the space. For the Inclusive Learning Program, we hold a short observation and discussion about your child's needs so we can plan the right support. We then confirm enrolment and share the joining paperwork. There is no entrance test for young children."
            }
          },
          {
            "@type": "Question",
            "name": "What are the fees and how are they structured?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fees depend on the program you choose, the number of days or hours per week, and whether your child needs additional one-on-one support in the Inclusive Learning Program. Because the inclusive program is individualized, we prefer to share an exact, transparent quote after we understand your child's schedule and needs. Please call or WhatsApp +91 93109 82342 for the current fee schedule for 2026."
            }
          },
          {
            "@type": "Question",
            "name": "How do you support children with autism, ADHD or developmental delays?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our Inclusive Learning Program is built around each child. We use individualized learning plans, small-group and one-on-one sessions, sensory-friendly spaces, visual schedules and structured routines, and we coordinate with the child's therapists and parents. Typically developing children and children with additional needs learn alongside each other, which builds empathy and real social skills for everyone. Our staff are trained in inclusive early-childhood practice."
            }
          },
          {
            "@type": "Question",
            "name": "How do you keep children safe at the centre?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Children are supervised at all times with low child-to-staff ratios. The premises have secure entry, with children released only to authorised guardians. We follow strict hygiene and sanitisation routines, maintain a first-aid kit and emergency contacts, serve age-appropriate meals with allergy awareness, and keep the play areas child-proofed. Parents receive regular updates about their child's day."
            }
          },
          {
            "@type": "Question",
            "name": "What does a typical day look like?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A typical day balances structure and free play: a warm welcome and circle time, themed learning activities, art and sensory play, outdoor or movement time, healthy meals and snacks, story time, and rest for younger children. Children in the Inclusive Learning Program follow the same rhythm with the individual supports and breaks they need. The centre is open Monday to Saturday, 9:00 AM to 6:00 PM."
            }
          },
          {
            "@type": "Question",
            "name": "Can we visit before enrolling, and is there a trial?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We encourage every family to visit before enrolling so you can see the space, meet the team and ask questions. We can also arrange a short trial or settling-in session so your child can experience a day with us. To book a visit, call or WhatsApp +91 93109 82342, or message us on Instagram @littleelarasteps."
            }
          },
          {
            "@type": "Question",
            "name": "Where are you located and what are your timings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Little Elara Steps is located at B-298, Plot No. 12-B, Block B, New Ashok Nagar, East Delhi, Delhi 110096. We are open Monday to Saturday, 9:00 AM to 6:00 PM, and serve families across East Delhi including New Ashok Nagar, Mayur Vihar, Patparganj and nearby areas."
            }
          }
        ]
      }
    ]
  }
</script>
```

> **Notes on choices:**
>
> - `["ChildCare", "LocalBusiness", "EducationalOrganization"]` — multi-typing makes the entity legible as both a local business (Maps/local pack) and an educational org (AI answers about schools). `ChildCare` already implies `LocalBusiness`; listing both is harmless and explicit.
> - `priceRange` uses `"₹₹"` (mid-range). Replace with a real range like `"₹₹"` or a band such as `"₹5,000–₹15,000/month"` only if the client wants public pricing; otherwise keep the symbolic indicator.
> - `areaServed` includes both an `AdministrativeArea` ("East Delhi") and named neighborhoods to capture local + AI geo queries.
> - 8 FAQs provided (admissions, ages, fees-process, special-needs support, safety, daily routine, trial visit, plus location/timings). All answers are real and self-contained so AI engines can cite them verbatim.

---

## 3. robots.txt

Place at `public/robots.txt` (or generate via `app/robots.ts`). Allows all standard crawlers **and explicitly welcomes major AI/answer-engine crawlers** so the site can be cited in AI search. Points to the sitemap.

> Using the client-given domain. Update the host/sitemap line if the canonical domain changes (see Flag #1).

```txt
# robots.txt — Little Elara Steps
# https://littleelerasteps.com

# Default: allow all standard crawlers
User-agent: *
Allow: /

# --- AI / answer-engine crawlers (explicitly allowed for GEO / AI search citation) ---

# OpenAI — ChatGPT training/answers
User-agent: GPTBot
Allow: /

# OpenAI — ChatGPT live search results
User-agent: OAI-SearchBot
Allow: /

# OpenAI — ChatGPT-User (on-demand fetch when a user asks)
User-agent: ChatGPT-User
Allow: /

# Anthropic — Claude
User-agent: ClaudeBot
Allow: /

# Anthropic — Claude user-triggered fetch
User-agent: Claude-User
Allow: /

# Perplexity
User-agent: PerplexityBot
Allow: /

# Perplexity user-triggered fetch
User-agent: Perplexity-User
Allow: /

# Google — Gemini / AI features (opt-in via Google-Extended)
User-agent: Google-Extended
Allow: /

# Apple Intelligence
User-agent: Applebot-Extended
Allow: /

# Common Crawl (feeds many AI datasets)
User-agent: CCBot
Allow: /

# Microsoft Copilot / Bing AI
User-agent: bingbot
Allow: /

Sitemap: https://littleelerasteps.com/sitemap.xml
```

> If you later want to **block** a specific AI crawler, change its `Allow: /` to `Disallow: /` for that named user-agent. For a marketing site that wants AI visibility, allow them all (as above).

---

## 4. llms.txt

Place at `public/llms.txt` so it is served at `https://littleelerasteps.com/llms.txt`. This is a markdown summary of the business optimized for AI search engines and LLM crawlers. Keep it factual and concise.

> Update the email once confirmed (Flag #2) and the domain if it changes (Flag #1).

```markdown
# Little Elara Steps

> Little Elara Steps is an inclusive day care and pre school in New Ashok Nagar, East Delhi, India. We provide play-based preschool for children aged 2–6, an inclusive learning program for children aged 2–15 with autism (ASD), ADHD and developmental delays, and a full day care program. Our approach is warm, individualized, and built so that all children learn together.

## Key facts

- **Name:** Little Elara Steps (Day Care & Pre School)
- **Type:** Inclusive day care and preschool
- **Location:** B-298, Plot No. 12-B, Block B, New Ashok Nagar, East Delhi, Delhi 110096, India
- **Areas served:** East Delhi — New Ashok Nagar, Mayur Vihar, Patparganj, Kondli, Trilokpuri and nearby
- **Hours:** Monday to Saturday, 9:00 AM – 6:00 PM
- **Phone / WhatsApp:** +91 93109 82342
- **Email:** littleelarasteps@gmail.com
- **Website:** https://littleelerasteps.com
- **Instagram:** https://www.instagram.com/littleelarasteps

## Programs

- **Play School & Preschool (ages 2–6):** Play-based early learning covering language, motor skills, social skills and school readiness.
- **Inclusive Learning Program (ages 2–15):** Individualized, therapist-informed support for children with autism spectrum disorder, ADHD and developmental delays. Includes one-on-one and small-group sessions, sensory-friendly spaces, visual schedules and structured routines. Children of all abilities learn alongside one another.
- **Day Care Program:** Safe, supervised full-day care with meals, rest and structured activities, available alongside the preschool and inclusive programs.

## Why families choose Little Elara Steps

- Genuinely inclusive — typically developing children and children with additional needs learn together.
- Low child-to-staff ratios and trained, caring educators.
- Individualized learning plans for children who need extra support.
- Secure premises, strict hygiene, and regular updates to parents.
- Local to East Delhi, easy for New Ashok Nagar and Mayur Vihar families.

## Admissions

Admissions are open year-round, subject to availability. Start with a call or WhatsApp message to +91 93109 82342, then visit the centre to meet the team. For the Inclusive Learning Program, a short observation helps us plan the right support. Families are encouraged to visit and can arrange a short trial/settling-in session before enrolling. There is no entrance test for young children. For current 2026 fees, contact us directly.

## Contact

- Call or WhatsApp: +91 93109 82342
- Email: littleelarasteps@gmail.com
- Visit: B-298, Plot No. 12-B, Block B, New Ashok Nagar, East Delhi, Delhi 110096
- Instagram DM: @littleelarasteps

_Last updated: 2026-06-21_
```

---

## 5. Implementation Notes for Next.js 15

> Reference only — **do not block on this; no source files were edited as part of this doc.**

1. **Metadata (title/description/canonical/OG):** Set in `src/app/layout.tsx` (or `page.tsx`) via the exported `metadata` object — `title`, `description`, `alternates.canonical: "https://littleelerasteps.com/"`, `openGraph`, `twitter`, and `metadataBase: new URL("https://littleelerasteps.com")`.
2. **JSON-LD:** Render the `@graph` from Section 2.1 as a `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />` in the page (a Server Component) — do **not** inject via client JS, so crawlers see it in the initial HTML.
3. **robots.txt & sitemap:** Either drop static files in `public/` (`robots.txt`, `sitemap.xml`) or use `app/robots.ts` and `app/sitemap.ts`. The sitemap for a single-page site lists the one canonical URL (`https://littleelerasteps.com/`) with `lastModified`.
4. **llms.txt:** Static file in `public/llms.txt` (served as-is).
5. **Validate** the JSON-LD with Google's Rich Results Test and Schema.org validator before launch; validate the FAQ block separately. Re-run after replacing the geo coordinates and email.
6. **Verify** ownership in Google Search Console + create/verify Google Business Profile; submit the sitemap in GSC.

---

### Pre-launch checklist (quick)

- [ ] Resolve domain spelling (Elara vs elera) and set canonical + 301s — **Flag #1**
- [ ] Confirm real email and replace placeholder everywhere — **Flag #2**
- [ ] Replace approximate geo coords with exact GBP coordinates — **Flag #3**
- [ ] Create/verify Google Business Profile — **Flag #4**
- [ ] One H1, clean H2 outline, real anchor links
- [ ] Descriptive alt text on all photos; `alt=""` on decorative SVGs
- [ ] Hero image optimized + `priority`; AVIF/WebP enabled; mobile Lighthouse green
- [ ] JSON-LD `@graph` in initial HTML and validated
- [ ] `robots.txt` (with AI crawlers) + `sitemap.xml` live and submitted
- [ ] `llms.txt` live
