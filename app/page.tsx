import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { getAllPosts, getFeaturedPosts } from "@/lib/posts";
import { ArticleCard } from "@/components/ArticleCard";
import { FeaturedArticleCard } from "@/components/FeaturedArticleCard";
import { CompanyStrip } from "@/components/CompanyStrip";
import { NowBlock } from "@/components/NowBlock";
// import { NewsletterForm } from "@/components/NewsletterForm";
import { siteConfig } from "@/lib/siteConfig";

export default function HomePage() {
  const featured = getFeaturedPosts(2);
  const featuredSlugs = new Set(featured.map((p) => p.slug));
  const latest = getAllPosts()
    .filter((p) => !featuredSlugs.has(p.slug))
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      {/* Hero */}
      <section className="space-y-6">
        <p className="text-sm font-medium uppercase tracking-wider text-brand dark:text-brand-dark">
          {siteConfig.author.role} · {siteConfig.author.yearsOfExperience}+ years
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-slate-100">
          Hi, I&apos;m {siteConfig.author.name.split(" ")[0]}. I build
          distributed systems at scale — and write about the failure modes that
          don&apos;t make it into the docs.
        </h1>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          {siteConfig.author.bio}
        </p>

        {/* Impact bullets — scannable in 5 seconds */}
        <ul className="grid gap-2 pt-2 sm:grid-cols-1">
          {siteConfig.impact.map((line) => (
            <li
              key={line}
              className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
            >
              <span
                aria-hidden
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand dark:bg-brand-dark"
              />
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
          >
            Read the writing <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={siteConfig.resumeUrl}
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <FileText className="h-4 w-4" /> Download CV
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Company proof strip */}
      <div className="mt-14">
        <CompanyStrip />
      </div>

      {/* Featured articles */}
      {featured.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            Featured writing
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {featured.map((post) => (
              <FeaturedArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Now block */}
      <div className="mt-16">
        <NowBlock />
      </div>

      {/* Latest writing */}
      <section className="mt-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            Latest writing
          </h2>
          <Link
            href="/blog"
            className="text-sm font-medium text-brand dark:text-brand-dark"
          >
            View all →
          </Link>
        </div>
        <div className="mt-4">
          {latest.length === 0 ? (
            <p className="py-8 text-slate-500 dark:text-slate-400">
              Nothing else yet — check back soon.
            </p>
          ) : (
            latest.map((post) => <ArticleCard key={post.slug} post={post} />)
          )}
        </div>
      </section>

      {/* Newsletter — disabled until provider is wired up
      <section className="mt-20 rounded-xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/50">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Get new writing in your inbox
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Roughly one email every two weeks. Practical engineering notes, no
          fluff. Unsubscribe anytime.
        </p>
        <div className="mt-6">
          <NewsletterForm />
        </div>
      </section>
      */}
    </div>
  );
}
