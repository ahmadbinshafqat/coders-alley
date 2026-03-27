export const siteConfig = {
  name: "Coders Alley",
  tagline: "Custom Web, Mobile & AI Solutions for Your Business",
  description:
    "Coders Alley delivers mission-ready engineering across web, mobile, AI, and secure cloud systems—built to ship and built to last.",
  seoKeywords: [
    "custom software development",
    "web development",
    "mobile app development",
    "AI engineering",
    "LLM integration",
    "MLOps",
    "cloud infrastructure",
    "cybersecurity",
    "staff augmentation",
  ],
  contact: {
    email: "info@codersalley.com",
    phone: "+92 (322) 618-8545",
    address: "Global Delivery",
  },
  navLinks: [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type NavLink = (typeof siteConfig.navLinks)[number];

