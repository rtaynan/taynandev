import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

export function FeaturedArticleCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 transition hover:border-brand/60 hover:shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-900/40 dark:hover:border-brand-dark/60"
    >
      <div>
        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-brand dark:text-brand-dark">
          <span>Featured</span>
          <span aria-hidden className="h-px flex-1 bg-brand/30 dark:bg-brand-dark/30" />
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900 transition group-hover:text-brand dark:text-slate-100 dark:group-hover:text-brand-dark">
          {post.frontmatter.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          {post.frontmatter.description}
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <time dateTime={post.frontmatter.date}>
            {formatDate(post.frontmatter.date)}
          </time>
          <span aria-hidden>·</span>
          <span>{post.readingTimeMinutes} min</span>
        </div>
        <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-brand dark:group-hover:text-brand-dark" />
      </div>
    </Link>
  );
}
