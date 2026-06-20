# Little Elara Steps — SEO

> ⚠️ **Domain spelling:** the site uses `https://littleelerasteps.com` (as provided), but the brand is "Little El**a**ra Steps" and Instagram is `littlelarasteps`. Confirm the correct domain and, if needed, change it in **one place**: `SITE.url` in `src/lib/constants.ts`.

## What's implemented (on-page / technical)

| Item                                                                                      | Where                                              |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Full metadata (title, description, 23+ keywords)                                          | `src/app/layout.tsx`                               |
| Canonical URL + `metadataBase`                                                            | `src/app/layout.tsx`                               |
| Open Graph + Twitter cards                                                                | `src/app/layout.tsx`                               |
| JSON-LD `@graph`: ChildCare/LocalBusiness, Organization, WebSite, FAQ (6 Q&A), Breadcrumb | `src/app/layout.tsx`                               |
| `robots.txt` (allows AI crawlers: GPTBot, ClaudeBot, PerplexityBot, Google-Extended…)     | `src/app/robots.ts` → `/robots.txt`                |
| `sitemap.xml`                                                                             | `src/app/sitemap.ts` → `/sitemap.xml`              |
| PWA manifest                                                                              | `src/app/manifest.ts` → `/manifest.webmanifest`    |
| `llms.txt` (for AI search engines)                                                        | `public/llms.txt` → `/llms.txt`                    |
| Dynamic share image (WhatsApp / FB / Twitter)                                             | `src/app/opengraph-image.tsx` → `/opengraph-image` |

## Social banners (downloadable PNGs)

Run the site (`pnpm dev`) and open these URLs, then right-click → **Save image**:

| Banner                                   | URL                  | Size      |
| ---------------------------------------- | -------------------- | --------- |
| Facebook cover                           | `/banners/facebook`  | 1640×624  |
| Instagram post / WhatsApp status         | `/banners/instagram` | 1080×1080 |
| Instagram / WhatsApp story               | `/banners/story`     | 1080×1920 |
| Link-share card (auto, no action needed) | `/opengraph-image`   | 1200×630  |

## Strategy docs (from the SEO specialist agents)

- **[keywords.md](keywords.md)** — 70 keywords in 6 categories + Google Business Profile / local-SEO plan.
- **[on-page-and-schema.md](on-page-and-schema.md)** — title/meta options, heading/alt guidance, full JSON-LD, robots, llms.txt.
- **[off-page-strategy.md](off-page-strategy.md)** — citations/directories, reviews, backlinks, 30/60/90-day plan (India-specific).

## Go-live checklist

1. Confirm the **domain spelling**; update `SITE.url`.
2. Add **Google Search Console** verification token in `src/app/layout.tsx` (`verification.google`).
3. Create/claim **Google Business Profile** (biggest local-SEO lever — see off-page doc).
4. Replace the placeholder **email** (`SITE.email`) and confirm **opening hours**.
5. Submit `sitemap.xml` in Search Console; list on the directories in the off-page doc.
6. Compress new photos before adding (keep under ~300 KB) so the site stays fast.
