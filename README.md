# theyardscout.com

Honest reviews of backyard wellness equipment — hot tubs, saunas, cold plunges. Leadility-owned affiliate property targeting US backyard-wellness buyers. Migration from a WordPress install (2025-06 → 2026-05) to Astro static stack.

## Stack

- **Astro v5** — static-first SEO content site
- **Tailwind CSS** — styling, configured to brand palette
- **MDX** — article authoring format
- **Cloudflare Pages** — hosting (production)

## Setup

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serves dist/
```

## Authoring articles

Articles live in `src/content/articles/` as `.mdx` files. The frontmatter schema is enforced via Zod in `src/content/config.ts`. Required fields:

```yaml
---
title: "SaluSpa Coronado Review: Inflatable Hot Tub Honest Owner Take"
slug: "saluspa-coronado"
description: "120-170 char SEO meta description."
primaryKeyword: "saluspa coronado"
secondaryKeywords:
  - "saluspa coronado review"
intent: "commercial-investigation"
publishedAt: 2026-05-14
updated: 2026-05-14
schemaType: "Review"
isPillar: false
isComparison: false
hasLeadMagnet: false
affiliateOffers:
  - "bestway"
---
```

URL pattern: `/{slug}/` (flat slug, no category prefix — matches existing WP URL structure).

## Components available in MDX

Import at the top of an article:

```mdx
import KeyTakeaways from "@/components/KeyTakeaways.astro";
import ProsCons from "@/components/ProsCons.astro";
import ComparisonTable from "@/components/ComparisonTable.astro";
import CTAButton from "@/components/CTAButton.astro";
import NewsletterSignup from "@/components/NewsletterSignup.astro";
import LeadMagnetForm from "@/components/LeadMagnetForm.astro";
import FAQ from "@/components/FAQ.astro";
import AffiliateDisclosure from "@/components/AffiliateDisclosure.astro";
```

## Deploy (Cloudflare Pages)

1. Connect repo `iancole1989/theyardscout` to Cloudflare Pages.
2. Build command: `npm run build`
3. Output directory: `dist/`
4. Root directory: `/`
5. Environment: `NODE_VERSION=20`
6. Custom domain: `theyardscout.com` + Cloudflare DNS.

## Brand reference

Voice + visual reference: same operator-honest pattern as LLCforLandlords. Brand-as-author voice ("The Yard Scout team"). Numbers-heavy on specs/prices. Warmer tone than LLC-financial content — this is leisure/wellness/backyard equipment.

Planning docs: `~/leadility/clients/affiliate-portfolio/theyardscout/`
WP migration data: `~/leadility/clients/affiliate-portfolio/theyardscout/processed/`
