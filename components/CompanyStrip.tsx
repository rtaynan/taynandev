import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function CompanyStrip() {
  if ((siteConfig.companies as readonly unknown[]).length === 0) return null;

  return (
    <div className="flex flex-col gap-3 border-y border-slate-200 py-6 sm:flex-row sm:items-center sm:gap-6 dark:border-slate-800">
      <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
        Previously
      </p>
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {siteConfig.companies.map((company) => (
          <li key={company.name}>
            <Link
              href={company.url}
              className="text-sm font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
            >
              {company.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
