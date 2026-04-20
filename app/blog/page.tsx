import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { ArticleCard } from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays and notes on software engineering, distributed systems, and the craft of building reliable software.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Writing
        </h1>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Essays and notes on software engineering — distributed systems, clean
          architecture, developer experience, and lessons from shipping real
          production code.
        </p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map(({ tag, count }) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {tag} · {count}
              </span>
            ))}
          </div>
        )}
      </header>

      <section className="mt-10">
        {posts.length === 0 ? (
          <p className="py-8 text-slate-500 dark:text-slate-400">
            No articles yet.
          </p>
        ) : (
          posts.map((post) => <ArticleCard key={post.slug} post={post} />)
        )}
      </section>
    </div>
  );
}
