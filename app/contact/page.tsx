import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { NewsletterForm } from "@/components/NewsletterForm";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.author.name}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Get in touch
      </h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
        Interesting work, speaking opportunities, or just want to trade notes? I
        read everything — you can email{" "}
        <Link
          href={`mailto:${siteConfig.author.email}`}
          className="text-brand dark:text-brand-dark"
        >
          {siteConfig.author.email}
        </Link>{" "}
        directly, or use the form below.
      </p>

      <section className="mt-10">
        <ContactForm />
      </section>

      <section className="mt-16 rounded-xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Prefer the newsletter?
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          No pitches, no tracking pixels — just new writing when it&apos;s
          ready.
        </p>
        <div className="mt-6">
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
