import Link from "next/link";
import { Github, Linkedin, Rss } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 py-10 dark:border-slate-800">
      <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {siteConfig.author.name}
        </p>
        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
          <Link
            href={siteConfig.social.github}
            aria-label="GitHub"
            className="transition hover:text-slate-900 dark:hover:text-slate-100"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href={siteConfig.social.linkedin}
            aria-label="LinkedIn"
            className="transition hover:text-slate-900 dark:hover:text-slate-100"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href="/feed.xml"
            aria-label="RSS feed"
            className="transition hover:text-slate-900 dark:hover:text-slate-100"
          >
            <Rss className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
