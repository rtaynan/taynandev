import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: now, priority: 1 },
    { url: `${siteConfig.url}/blog`, lastModified: now, priority: 0.9 },
    { url: `${siteConfig.url}/about`, lastModified: now, priority: 0.7 },
    { url: `${siteConfig.url}/contact`, lastModified: now, priority: 0.6 },
  ];

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    priority: 0.8,
  }));

  return [...staticRoutes, ...postRoutes];
}
