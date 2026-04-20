import { siteConfig } from "@/lib/siteConfig";
import { formatDate } from "@/lib/posts";

export function NowBlock() {
  return (
    <section
      aria-labelledby="now-heading"
      className="rounded-xl border border-slate-200 p-6 dark:border-slate-800"
    >
      <div className="flex items-center justify-between">
        <h2
          id="now-heading"
          className="text-sm font-medium uppercase tracking-wider text-brand dark:text-brand-dark"
        >
          Currently
        </h2>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          Updated {formatDate(siteConfig.now.updatedAt)}
        </span>
      </div>
      <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
        {siteConfig.now.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              aria-hidden
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand dark:bg-brand-dark"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
