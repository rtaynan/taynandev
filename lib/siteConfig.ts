export const siteConfig = {
  name: "Taynan Rezende",
  title: "Taynan Rezende — Software Engineer",
  description:
    "Senior software engineer writing about distributed systems, clean architecture, developer experience, and practical engineering.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://taynan.dev",

  author: {
    name: "Taynan Rezende",
    email: "taynan.rezende@gmail.com",
    role: "Senior Software Engineer",
    bio: "I build reliable software and write about the craft. I care about systems that are simple to reason about, a pleasure to operate, and fast enough that nobody has to think about performance.",
    location: "Brazil",
    yearsOfExperience: 10,
  },

  // Companies you've worked at — shown as a subtle proof strip under the hero.
  // Order matters (most relevant first). Keep to 3–6 entries.
  companies: [
    { name: "Company A", url: "https://example.com" },
    { name: "Company B", url: "https://example.com" },
    { name: "Company C", url: "https://example.com" },
  ],

  // One-line impact statements recruiters / clients can scan in 2 seconds.
  // Aim for concrete numbers. Keep to 2–4 bullets.
  impact: [
    "Shipped distributed systems handling 100M+ events/day.",
    "Led backend architecture for products serving 5M+ users.",
    "Built developer platforms that cut deploy time from hours to minutes.",
  ],

  // "What I'm currently doing" — update this every few weeks. Keeps the site
  // feeling alive and gives visitors a reason to come back.
  now: {
    updatedAt: "2026-04-20",
    items: [
      "Writing about distributed systems tradeoffs I keep seeing in production.",
      "Exploring deterministic simulation testing for backend services.",
      "Open to senior / staff engineering conversations — tech-forward teams.",
    ],
  },

  // Drop a PDF at public/resume.pdf (or change this path).
  resumeUrl: "/resume.pdf",

  social: {
    github: "https://github.com/taynandev",
    linkedin: "https://www.linkedin.com/in/taynan-rezende/",
    x: "https://x.com/taynandev",
  },

  nav: [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Writing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
