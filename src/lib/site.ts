export const SITE = {
  name: "The Yard Scout",
  domain: "theyardscout.com",
  url: "https://theyardscout.com",
  tagline: "Honest reviews of backyard wellness gear — hot tubs, saunas, and cold plunges.",
  description:
    "Honest, operator-tested reviews of hot tubs, saunas, cold plunges, and the wellness gear that turns a backyard into a recovery space.",
  author: "The Yard Scout team",
  ogImage: "/og-default.svg",
  twitterHandle: "@theyardscout",
  gaMeasurementId: "G-VBEZ3ZRJ8F",
} as const;

export const NAV = [
  { label: "Reviews", href: "/" },
  { label: "Editorial Standards", href: "/editorial-standards" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
