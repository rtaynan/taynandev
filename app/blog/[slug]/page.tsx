import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";
import { MDXContent } from "@/components/MDXContent";
import { siteConfig } from "@/lib/siteConfig";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const url = `${siteConfig.url}/blog/${post.slug}`;
  const ogImage = `/og?title=${encodeURIComponent(
    post.frontmatter.title,
  )}&subtitle=${encodeURIComponent(post.frontmatter.description)}&tag=${encodeURIComponent(
    post.frontmatter.tags?.[0] ?? "Essay",
  )}`;
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      publishedTime: post.frontmatter.date,
      authors: [siteConfig.author.name],
      tags: post.frontmatter.tags as string[] | undefined,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [ogImage],
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Back to writing
      </Link>

      <header className="mt-6 space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
          <time dateTime={post.frontmatter.date}>
            {formatDate(post.frontmatter.date)}
          </time>
          <span aria-hidden>·</span>
          <span>{post.readingTimeMinutes} min read</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          {post.frontmatter.title}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          {post.frontmatter.description}
        </p>
        {post.frontmatter.tags && (
          <div className="flex flex-wrap gap-2">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose prose-slate mt-10 dark:prose-invert">
        <MDXContent source={post.content} />
      </div>

      <footer className="mt-16 border-t border-slate-200 pt-8 dark:border-slate-800">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Thanks for reading. If this was useful, consider subscribing via{" "}
          <Link
            href="/feed.xml"
            className="text-brand dark:text-brand-dark"
          >
            RSS
          </Link>{" "}
          or the newsletter on the{" "}
          <Link href="/" className="text-brand dark:text-brand-dark">
            home page
          </Link>
          .
        </p>
      </footer>
    </article>
  );
}
