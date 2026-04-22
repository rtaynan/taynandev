import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
// import { NewsletterForm } from "@/components/NewsletterForm";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.author.name}.`,
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.author.email,
    note: "Best for detailed conversations",
    href: `mailto:${siteConfig.author.email}`,
  },
  ...siteConfig.phones.map((p) => ({
    icon: Phone,
    label: p.number,
    note: p.label,
    value: p.number,
    href: p.href,
  })),
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "taynan-rezende",
    note: "Connect professionally",
    href: siteConfig.social.linkedin,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Get in touch
      </h1>
      <p className="mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-400">
        Interesting work, consulting, speaking opportunities, or just want to
        trade notes — I read everything.
      </p>

      {/* Contact cards */}
      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {contactMethods.map((method) => (
          <Link
            key={method.href}
            href={method.href}
            className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-brand/50 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-brand-dark/50"
          >
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition group-hover:border-brand/40 group-hover:text-brand dark:border-slate-700 dark:text-slate-400 dark:group-hover:border-brand-dark/40 dark:group-hover:text-brand-dark">
              <method.icon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {method.label}
              </p>
              <p className="mt-0.5 truncate text-sm font-medium text-slate-900 dark:text-slate-100">
                {method.value}
              </p>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                {method.note}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Contact form — disabled until email provider is wired up
      <section className="mt-16">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Send a message
        </h2>
        <div className="mt-6">
          <ContactForm />
        </div>
      </section>
      */}

      {/* Newsletter — disabled until provider is wired up
      <section className="mt-16 rounded-xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/50">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Prefer the newsletter?
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          No pitches, no tracking pixels — just new writing when it&apos;s ready.
        </p>
        <div className="mt-6">
          <NewsletterForm />
        </div>
      </section>
      */}
    </div>
  );
}
