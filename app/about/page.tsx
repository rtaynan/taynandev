import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.author.name} — ${siteConfig.author.role}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        About
      </h1>
      <div className="prose prose-slate mt-8 dark:prose-invert">
        <p>
          I&apos;m {siteConfig.author.name}, a {siteConfig.author.role.toLowerCase()}{" "}
          based in {siteConfig.author.location}. I&apos;ve spent my career
          building backend systems, data platforms, and the tooling that keeps
          engineering teams shipping.
        </p>

        <h2>What I work on</h2>
        <p>
          My sweet spot is the messy seam between product and infrastructure —
          the place where clean code meets real traffic, partial failures, and
          deadlines. I care about:
        </p>
        <ul>
          <li>
            <strong>Distributed systems</strong> — designing for partial
            failure, idempotency, and operability from day one.
          </li>
          <li>
            <strong>Clean architecture</strong> — as a tool to keep business
            rules independent of the frameworks carrying them, not as dogma.
          </li>
          <li>
            <strong>Developer experience</strong> — fast feedback loops, sharp
            types, boring tooling. The compounding kind of productivity.
          </li>
          <li>
            <strong>Observability</strong> — systems you can actually debug at
            3am with the information at hand.
          </li>
        </ul>

        <h2>How I work</h2>
        <p>
          I believe the best engineers make systems <em>simpler</em> over time,
          not more clever. I&apos;m biased toward writing less code, shipping
          smaller changes, and paying attention to the failure modes everyone
          else is ignoring.
        </p>

        <h2>Consulting</h2>
        <p>
          Alongside my full-time work I occasionally take on select consulting
          engagements — typically for teams navigating complex backend
          challenges: distributed systems design, cloud cost optimization,
          platform migrations, or architecture reviews. If you have something
          interesting, the{" "}
          <Link href="/contact">contact page</Link> is the right place to start.
        </p>

        <h2>Elsewhere</h2>
        <p>
          You can find me on{" "}
          <Link href={siteConfig.social.github}>GitHub</Link>,{" "}
          <Link href={siteConfig.social.linkedin}>LinkedIn</Link>, and{" "}
          <Link href={siteConfig.social.x}>X</Link>. For direct messages, the{" "}
          <Link href="/contact">contact page</Link> is the fastest way to reach
          me.
        </p>
      </div>
    </div>
  );
}
