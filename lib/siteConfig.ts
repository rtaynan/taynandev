export const siteConfig = {
  name: "Taynan Rezende",
  title: "Taynan Rezende — Software Engineer",
  description:
    "Senior software engineer specializing in distributed systems, cloud cost optimization, and operational observability. Writing about backend engineering at scale.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://taynan.dev",

  author: {
    name: "Taynan Rezende",
    email: "taynan.rezende@gmail.com",
    role: "Senior Software Engineer",
    bio: "Ten years building backend systems at scale — distributed event pipelines, cloud cost optimization, and operational observability for platforms serving millions of users. I write about the failure modes I've shipped around and the patterns that held up under real traffic.",
    location: "Brazil",
    yearsOfExperience: 10,
  },

  // Companies you've worked at — shown as a proof strip under the hero.
  // Order: most recent / most relevant first.
  companies: [
    { name: "iFood", url: "https://institucional.ifood.com.br/sobre/" },
    { name: "Coinbase", url: "https://www.coinbase.com/" },
    { name: "OOBJ (acq. by Avalara)", url: "https://www.avalara.com/us/en/index.html" },
    { name: "TOTVS", url: "https://www.totvs.com/" },
  ],

  // One-line impact statements — concrete, metric-driven, company-attached.
  impact: [
    "Reduced DynamoDB spend 91% ($218k/year) redesigning the data model for a 45B-write/month auction pipeline — no infrastructure migration.",
    "Increased campaign messaging throughput 60× (120 s → 2 s) by optimizing AWS SQS FIFO batching in Go.",
    "Migrated a decade of SVN history to Git and rebuilt the CI/CD pipeline, cutting customer release time from a full working day to a few hours.",
  ],

  // "What I'm currently doing" — update this every few weeks. Keeps the site
  // feeling alive and gives visitors a reason to come back.
  now: {
    updatedAt: "2026-04-22",
    items: [
      "Writing about distributed systems tradeoffs I keep seeing in production.",
      "Exploring deterministic simulation testing for backend services.",
      "Open to senior / staff engineering conversations — tech-forward teams.",
    ],
  },

  // Drop a PDF at public/resume.pdf (or change this path).
  resumeUrl: "/resume.pdf",

  phones: [
    { number: "+55 (62) 98250-4105", label: "Call or text", href: "tel:+5562982504105" },
    { number: "+1 (305) 481-7460", label: "Text", href: "sms:+13054817460" },
  ],

  social: {
    github: "https://github.com/taynandev",
    linkedin: "https://www.linkedin.com/in/taynanrezende/",
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
