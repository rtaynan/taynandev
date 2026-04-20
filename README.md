# taynan.dev

Personal site and blog for Taynan Rezende — Next.js 14 (App Router), TypeScript, Tailwind, MDX.

## Stack

- **Next.js 14** (App Router, RSC)
- **TypeScript**
- **Tailwind CSS** + `@tailwindcss/typography`
- **MDX** articles via `next-mdx-remote/rsc`
- **Syntax highlighting** via `rehype-pretty-code` (Shiki)
- **Dark mode** via `next-themes`
- **RSS** via `feed`, plus `sitemap.xml` / `robots.txt` built in

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Useful scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Writing articles

Create a new file in `content/posts/<slug>.mdx`:

```mdx
---
title: "My new article"
description: "One sentence describing it — shows up in previews and SEO."
date: "2026-04-20"
tags: ["engineering", "typescript"]
---

Write in Markdown / MDX here.
```

Supported frontmatter:

| Field | Type | Notes |
|---|---|---|
| `title` | string | required |
| `description` | string | required — used for OpenGraph / meta description |
| `date` | ISO date (`YYYY-MM-DD`) | required |
| `tags` | string[] | optional |
| `draft` | boolean | optional — drafts are excluded from the site |

Code blocks support titles and line highlights via `rehype-pretty-code`:

````md
```ts title="example.ts" {3}
const x = 1;
const y = 2;
const z = x + y; // highlighted
```
````

## Customizing

Everything visitor-facing is centralized in **`lib/siteConfig.ts`**:

- `author` — name, role, bio, years of experience
- `companies` — shown in the home "Previously" strip (max 3–6)
- `impact` — one-line achievements with numbers (scannable in 5s)
- `now` — "Currently" block on the home page; bump `updatedAt` when you change it
- `resumeUrl` — link used by the Header "Resume" button and home "Download CV" CTA
- `social` — GitHub / LinkedIn / X URLs

Other knobs:
- **Theme**: edit `tailwind.config.ts` (`colors.brand`) and `app/globals.css`.
- **Newsletter provider**: wire up `app/api/newsletter/route.ts` to ConvertKit, Buttondown, Resend, etc.
- **Contact form delivery**: wire up `app/api/contact/route.ts` to your email provider (Resend, Postmark, SES).

## Featured articles

Add `featured: true` to the frontmatter of any article you want promoted on the
home page. The top 2 featured posts render as large cards above the latest
writing list.

## Dynamic Open Graph images

Every article and the home page ship a **generated OG image** at build time via
`next/og` (edge runtime, route: `/og?title=…&subtitle=…&tag=…`). This is what
LinkedIn / X / Slack show when your link is pasted — a huge CTR multiplier
compared to a plain link.

To preview: run `npm run dev`, then visit
`http://localhost:3000/og?title=Hello&subtitle=World`.

To customize the design, edit `app/og/route.tsx`.

## Resume

Drop your CV at `public/resume.pdf`. The Header and home page both link to
`/resume.pdf`. If you prefer a different path (or a LinkedIn link), change
`resumeUrl` in `lib/siteConfig.ts`.

## Environment variables

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SITE_URL` — canonical URL used for SEO / OG / RSS (e.g. `https://taynan.dev`).

## Deployment

Designed for **Vercel**:

```bash
npx vercel
```

The site builds cleanly as fully static (the MDX pipeline runs at build time, the API routes are small edge-friendly handlers). It'll also run fine on Netlify, Cloudflare Pages, or any Node host.

## Structure

```
app/                      # Next.js App Router pages + API routes
├── layout.tsx            # root layout with header/footer + theme provider
├── page.tsx              # home
├── about/                # about page
├── blog/                 # blog index + [slug] post page
├── contact/              # contact form
├── api/
│   ├── newsletter/       # newsletter subscribe endpoint
│   └── contact/          # contact form endpoint
├── sitemap.ts            # sitemap.xml
├── robots.ts             # robots.txt
└── feed.xml/route.ts     # RSS feed
components/               # shared UI (Header, Footer, forms, article card)
content/posts/            # MDX articles (this is where you write)
lib/
├── siteConfig.ts         # single source of truth for site identity
├── posts.ts              # reads / sorts MDX posts
└── mdx.ts                # MDX plugin config
```

## License

Code is MIT. Content in `content/` is © Taynan Rezende, all rights reserved unless otherwise noted.
