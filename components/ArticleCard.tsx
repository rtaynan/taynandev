import Link from "next/link";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

export function ArticleCard({ post }: { post: Post }) {
  return (
    <article className="group border-b border-slate-200 py-8 last:border-b-0 dark:border-slate-800">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
          <time dateTime={post.frontmatter.date}>
            {formatDate(post.frontmatter.date)}
          </time>
          <span aria-hidden>·</span>
          <span>{post.readingTimeMinutes} min read</span>
          {post.frontmatter.tags?.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="mt-2 text-xl font-semibold text-slate-900 transition group-hover:text-brand dark:text-slate-100 dark:group-hover:text-brand-dark">
          {post.frontmatter.title}
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          {post.frontmatter.description}
        </p>
      </Link>
    </article>
  );
}
