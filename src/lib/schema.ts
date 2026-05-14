import { SITE, ENTITY_IDS } from "./site";

const abs = (path: string) => (path.startsWith("http") ? path : new URL(path, SITE.url).toString());

// === Foundational entities ===

export const organizationEntity = () => {
  const sameAs = Object.values(SITE.socials).filter((s) => s && s.length > 0);
  return {
    "@type": "Organization",
    "@id": ENTITY_IDS.organization,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    foundingDate: SITE.founded,
    logo: {
      "@type": "ImageObject",
      "@id": ENTITY_IDS.logo,
      url: abs(SITE.logoUrl),
      contentUrl: abs(SITE.logoUrl),
      width: "320",
      height: "48",
      caption: SITE.name,
    },
    image: { "@id": ENTITY_IDS.logo },
    ...(sameAs.length > 0 && { sameAs }),
  };
};

export const websiteEntity = () => ({
  "@type": "WebSite",
  "@id": ENTITY_IDS.website,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  publisher: { "@id": ENTITY_IDS.organization },
  inLanguage: "en-US",
});

export const baseGraph = () => ({
  "@context": "https://schema.org",
  "@graph": [organizationEntity(), websiteEntity()],
});

// === Page-specific entities ===

export interface ArticleSchemaParams {
  url: string;
  title: string;
  description: string;
  publishedAt: Date;
  updated: Date;
  image?: string;
  schemaType?: "Article" | "HowTo" | "Review" | "FAQPage";
  wordCount?: number;
  articleSection?: string;
  authorName?: string;
}

export const articleEntity = (params: ArticleSchemaParams) => ({
  "@context": "https://schema.org",
  "@type": params.schemaType ?? "Article",
  "@id": `${params.url}#article`,
  headline: params.title,
  description: params.description,
  url: params.url,
  datePublished: params.publishedAt.toISOString(),
  dateModified: params.updated.toISOString(),
  author: { "@id": ENTITY_IDS.organization, name: params.authorName ?? SITE.author },
  publisher: { "@id": ENTITY_IDS.organization },
  mainEntityOfPage: { "@type": "WebPage", "@id": params.url },
  isPartOf: { "@id": ENTITY_IDS.website },
  inLanguage: "en-US",
  ...(params.image && {
    image: {
      "@type": "ImageObject",
      url: abs(params.image),
      width: "1200",
      height: "630",
    },
  }),
  ...(params.wordCount && { wordCount: params.wordCount }),
  ...(params.articleSection && { articleSection: params.articleSection }),
});

export interface BreadcrumbItem {
  name: string;
  url?: string;
}

export const breadcrumbListEntity = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: item.name,
    ...(item.url && { item: item.url.startsWith("http") ? item.url : new URL(item.url, SITE.url).toString() }),
  })),
});

// === Product / Review entities (TYS reviews) ===

export interface ProductReviewSchemaParams {
  productName: string;
  brand?: string;
  category?: string;
  description?: string;
  image?: string;
  priceRange?: string;
  affiliateHref?: string;
  ratingValue?: number; // 0-5
  ratingCount?: number;
  reviewUrl: string;
  reviewTitle: string;
  reviewBody?: string;
}

export const productReviewEntity = (params: ProductReviewSchemaParams) => {
  const productId = `${params.reviewUrl}#product`;
  const product: Record<string, unknown> = {
    "@type": "Product",
    "@id": productId,
    name: params.productName,
    ...(params.description && { description: params.description }),
    ...(params.brand && { brand: { "@type": "Brand", name: params.brand } }),
    ...(params.category && { category: params.category }),
    ...(params.image && {
      image: params.image.startsWith("http") ? params.image : new URL(params.image, SITE.url).toString(),
    }),
    ...(params.priceRange && params.affiliateHref && {
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        priceRange: params.priceRange,
        url: params.affiliateHref,
      },
    }),
    ...(params.ratingValue !== undefined && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: params.ratingValue.toFixed(1),
        bestRating: "5",
        worstRating: "0",
        ratingCount: params.ratingCount ?? 1,
      },
    }),
  };

  const review = {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${params.reviewUrl}#review`,
    itemReviewed: { "@id": productId },
    name: params.reviewTitle,
    url: params.reviewUrl,
    author: { "@id": ENTITY_IDS.organization, name: SITE.author },
    publisher: { "@id": ENTITY_IDS.organization },
    ...(params.ratingValue !== undefined && {
      reviewRating: {
        "@type": "Rating",
        ratingValue: params.ratingValue.toFixed(1),
        bestRating: "5",
        worstRating: "0",
      },
    }),
    ...(params.reviewBody && { reviewBody: params.reviewBody }),
  };

  return { product, review };
};
