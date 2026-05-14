export const SITE = {
  name: "The Yard Scout",
  domain: "theyardscout.com",
  url: "https://theyardscout.com",
  tagline: "Honest reviews of backyard wellness gear — hot tubs, saunas, and cold plunges.",
  description:
    "Honest, operator-tested reviews of hot tubs, saunas, cold plunges, and the wellness gear that turns a backyard into a recovery space.",
  author: "The Yard Scout team",
  logoUrl: "/logo.svg",
  ogImage: "/og-default.svg",
  twitterHandle: "@theyardscout",
  gaMeasurementId: "G-VBEZ3ZRJ8F",
  founded: "2025",
  // Social profile URLs. Empty strings are ignored by schema sameAs.
  // Fill these in as the accounts are created — they immediately feed
  // the Organization entity's sameAs array for Google + AI search engines.
  socials: {
    facebook: "",
    instagram: "",
    youtube: "",
    pinterest: "",
    twitter: "",
  },
} as const;

export const ENTITY_IDS = {
  organization: `${SITE.url}/#organization`,
  website: `${SITE.url}/#website`,
  logo: `${SITE.url}/#logo`,
} as const;

export const NAV = [
  { label: "Reviews", href: "/" },
  { label: "Editorial Standards", href: "/editorial-standards" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
