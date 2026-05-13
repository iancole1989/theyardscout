# Article templates

Reusable page templates for affiliate / lead-gen content. Each is an Astro component imported at the top of an MDX article and wrapped around the article body (same pattern as `KeyTakeaways`, `ProsCons`, `FAQ` etc).

Based on Goldmine "One Page Templates Treasure Trove" (17 Lovable templates) collapsed to 6 structural patterns, flexed for higher-competition keywords (we run 2,000-3,500 words vs Caluori's 800-1,500 since our target SERPs are more competitive).

## Template inventory

| Component | Use case | First use case for TYS / portfolio |
|---|---|---|
| `ReviewTemplate` | Single product review with at-a-glance card + key features | All product reviews (SaluSpa, Almost Heaven Duet, Clearlight, etc.) |
| `ListicleTemplate` | "Best X" buyer's guide with ranked picks + #1/#2/#3 cards | Best Inflatable Hot Tub, Best Infrared Sauna, Best DSCR Lenders |
| `ComparisonTemplate` | A vs B side-by-side decision article | Clearlight vs Sunlighten, Augusta vs Goldco, DSCR vs Conventional |
| `CalculatorTemplate` | Interactive calculator with live computation + tier-based CTA | DSCR ratio, Gold IRA cost, cold plunge cost, LLC state-cost |
| `LeadGenTemplate` | Lead capture / quiz handoff with prominent CTA above + below | CloseIron quiz handoff, Gold IRA company match |
| `LaunchJackTemplate` | Pre-launch / launch-week coverage with countdown banner | New SaluSpa model launches, new Plunge products |

## Pattern

Each template takes structured props for the structured parts of the article (e.g. product name, score, key features, picks array, calculator fields) and renders the article body via `<slot />`. The article body itself stays in standard MDX with our existing components (KeyTakeaways, ProsCons, FAQ, ArticleImage, NewsletterSignup).

## Usage example — Calculator

```mdx
---
title: "DSCR Ratio Calculator: Estimate Your Loan Qualification"
slug: "dscr-ratio-calculator"
primaryKeyword: "dscr calculator"
schemaType: "Article"
publishedAt: 2026-06-15
updated: 2026-06-15
description: "Calculate your debt service coverage ratio for DSCR loan qualification — instant result + loan-matching."
---

import CalculatorTemplate from "@/components/templates/CalculatorTemplate.astro";
import KeyTakeaways from "@/components/KeyTakeaways.astro";
import FAQ from "@/components/FAQ.astro";

<CalculatorTemplate
  title="DSCR Ratio Calculator"
  formulaId="dscr-ratio"
  fields={[
    { id: "rent", label: "Monthly rental income", suffix: "$", type: "number", default: 2500 },
    { id: "piti", label: "Monthly PITI (mortgage + tax + insurance)", suffix: "$", type: "number", default: 1800 },
  ]}
  formula="(values) => values.piti > 0 ? values.rent / values.piti : 0"
  outputLabel="Your DSCR ratio"
  outputDecimals={2}
  tiers={[
    { min: 1.25, label: "Excellent — qualifies at best rates", cta: "Match with a DSCR lender →", ctaHref: "https://closeiron.com/quiz/dscr" },
    { min: 1.0, label: "Marginal — some lenders, higher rates", cta: "See lenders that work with marginal DSCR →", ctaHref: "https://closeiron.com/quiz/dscr" },
    { min: 0, label: "Below 1.0 — most lenders pass; consider re-evaluating", cta: "Talk through alternatives →", ctaHref: "https://closeiron.com/quiz/dscr" },
  ]}
>

## What DSCR is and why it matters

[your full article body here as standard MDX]

<KeyTakeaways takeaways={["...", "..."]} />

## How DSCR is calculated

...

<FAQ items={[...]} />

</CalculatorTemplate>
```

## Word count guidance per template

Caluori's original templates target 800-1,500 words (low-competition niche launches). Our targets are higher-competition so we flex:

| Template | Min words | Recommended | Notes |
|---|---|---|---|
| Review | 1,200 | 2,000-3,500 | Match competing top-10 word counts in SERP |
| Listicle | 1,500 | 2,500-4,000 | Each pick ~200-400 words plus framing |
| Comparison | 1,200 | 1,800-3,000 | Side-by-side detail across 5-8 dimensions |
| Calculator | 600 | 1,000-1,800 | Calculator itself drives engagement; article supports it |
| Lead-gen | 800 | 1,500-2,500 | Educational body wraps the CTA |
| Launch jack | 1,000 | 1,500-2,500 | First-mover advantage; speed beats depth |

## Where these templates live

Currently in `~/Projects/theyardscout/src/components/templates/`. Will be copied to:
- `~/Projects/llcforlandlords/src/components/templates/` when LLC starts using them (V2 brief queue includes some calculator and comparison opportunities)
- `~/Projects/{third-site}/src/components/templates/` when third site scaffolds (week 4+)
- Future sites as they spin up

Source reference (the Goldmine course material extracted): `~/leadility/clients/affiliate-portfolio/goldmine-synthesis/templates-extracted/`
