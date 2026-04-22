import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.author.name} — ${siteConfig.author.role} specializing in distributed systems, cloud cost efficiency, and operational observability.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        About
      </h1>
      <div className="prose prose-slate mt-8 dark:prose-invert">

        {/* Block 1 — Who I am */}
        <p>
          I&apos;m {siteConfig.author.name}, a software engineer with{" "}
          {siteConfig.author.yearsOfExperience}+ years building backend systems
          at scale. My work lives at the intersection of distributed systems
          design, cloud infrastructure efficiency, and operational observability
          — the domains where software engineering decisions have compounding,
          measurable effects on the organizations and users that depend on them.
        </p>
        <p>
          I&apos;ve held senior and staff roles at iFood (Latin America&apos;s
          largest food-delivery platform), Coinbase (NYSE-listed US crypto
          exchange), OOBJ (acquired by Avalara), and TOTVS (Brazil&apos;s
          largest enterprise software company), across engineering challenges
          that range from high-throughput event pipelines and financial-grade
          transaction consistency to platform-wide cost optimization and legacy
          infrastructure modernization.
        </p>

        {/* Block 2 — What I work on + national importance */}
        <h2>What I work on — and why it matters at scale</h2>
        <p>
          The technical domains I focus on are not narrow specializations — they
          are foundational infrastructure concerns that affect the reliability,
          security, and economic efficiency of digital systems across every
          sector of the US economy.
        </p>
        <ul>
          <li>
            <strong>Distributed systems resilience</strong> — designing for
            partial failure, idempotency, and graceful degradation under real
            traffic conditions. Reliable infrastructure is a national security
            concern: CISA&apos;s Critical Infrastructure Security and
            Resilience framework explicitly identifies operational continuity of
            digital systems as a priority for the US economy and public safety.
          </li>
          <li>
            <strong>Cloud cost efficiency</strong> — data-model-driven
            optimization and right-sizing that reduces infrastructure spend by
            orders of magnitude without sacrificing reliability. The GAO and
            OMB have repeatedly identified cloud overprovisioning as a major
            source of waste in both federal IT and commercial enterprise
            infrastructure — waste that engineering excellence can eliminate.
          </li>
          <li>
            <strong>Operational observability</strong> — structured logging,
            distributed tracing, and metric-driven alerting that make production
            systems debuggable under pressure. Executive Order 14028
            (&ldquo;Improving the Nation&apos;s Cybersecurity&rdquo;) mandates
            enhanced observability and logging standards across US government
            systems and their software supply chain, and these practices are
            now baseline requirements for any engineering organization serving
            regulated industries.
          </li>
          <li>
            <strong>AI-driven operational efficiency</strong> — applied machine
            learning for automating enterprise workflows and scaling support
            operations. Executive Order 14110 (&ldquo;Safe, Secure, and
            Trustworthy Development and Use of Artificial Intelligence&rdquo;)
            positions AI adoption as a strategic national priority; early
            applied work in this space — like the enterprise AI chatbot I built
            in 2017, before the current wave of LLM adoption — demonstrates
            the kind of ahead-of-curve execution that drives real competitive
            advantage.
          </li>
        </ul>

        {/* Block 3 — Track record */}
        <h2>Track record</h2>
        <p>
          The cases below are selected highlights from a broader body of work
          spanning backend architecture, platform engineering, data
          infrastructure, and cloud cost optimization across four companies and
          ten years. Each was chosen because it is documented, metric-driven,
          and representative of a repeatable pattern — not because it is the
          only example of its kind.
        </p>
        <ul>
          <li>
            <strong>Coinbase · Consulting Engineer · 2025–2026.</strong>{" "}
            Designed, built, and optimized backend services in Go for
            CoinBiz — Coinbase&apos;s business onboarding platform —
            processing KYC/KYB document validation workflows (driver&apos;s
            licenses, government IDs, W-9, business filings) at scale under
            US financial compliance requirements (FinCEN / BSA). Built
            event-driven pipelines on AWS Lambda, DynamoDB, and Kafka;
            hardened secure document storage; and developed Salesforce
            integrations and operational dashboards tracking onboarding
            volume, success rates, and compliance signals across
            high-throughput business customer flows.
          </li>
          <li>
            <strong>iFood · Staff Software Engineer · 2020–present.</strong>{" "}
            Redesigned the DynamoDB data model for an auction event pipeline
            processing 45 billion writes per month, reducing infrastructure cost
            from $20,000 to $1,800/month — a 91% reduction ($218,400/year
            saved) with no infrastructure migration.{" "}
            <Link href="/blog/dynamodb-cost-reduction-91-percent">
              Full case →
            </Link>
          </li>
          <li>
            <strong>iFood · Staff Software Engineer · 2020–present.</strong>{" "}
            Optimized a campaign messaging pipeline on AWS SQS FIFO in Go,
            increasing throughput from 7.7 messages/second to 462
            messages/second — a 60× improvement — through deterministic
            deduplication and batching.{" "}
            <Link href="/blog/fifo-sqs-60x-performance-golang">
              Full case →
            </Link>
          </li>
          <li>
            <strong>OOBJ (acq. by Avalara) · Software Engineer · 2018–2020.</strong> Led the migration of
            a decade of Subversion history to Git without losing a single
            commit, then rebuilt the Jenkins pipeline from the ground up —
            cutting customer release time from more than one full working day
            to a few hours, freeing ~400–600 engineer-hours per year previously
            consumed by release babysitting.{" "}
            <Link href="/blog/migrating-svn-to-git-10-years-history">
              Full case →
            </Link>
          </li>
          <li>
            <strong>TOTVS · Software Engineer · 2016–2018.</strong> Built a
            multi-channel enterprise AI chatbot that took first place in an
            internal hackathon — before LLMs made this approach mainstream — automating L1 support across
            Skype, Facebook Messenger, and WhatsApp with intent classification,
            confidence-based escalation, and knowledge base integration.{" "}
            <Link href="/blog/ai-chatbot-reducing-l1-support">
              Full case →
            </Link>
          </li>
        </ul>
        <p>
          These are the cases with numbers attached. Behind them sit a decade
          of architecture reviews, platform migrations, reliability
          improvements, and team-level technical decisions that don&apos;t
          always produce a single quotable metric — but collectively define
          the kind of engineer who shows up at the hardest problems first.
        </p>

        {/* Block 4 — How I think about the work */}
        <h2>How I think about the work</h2>
        <p>
          The best engineers make systems <em>simpler</em> over time, not more
          clever. My bias is toward writing less code, shipping smaller changes,
          and paying attention to the failure modes everyone else is ignoring.
          The highest-leverage moves I&apos;ve seen in a decade of production
          work aren&apos;t algorithmic breakthroughs — they&apos;re data model
          changes, batching strategies, and the decision to instrument a system
          so you can actually see what it&apos;s doing at 3am.
        </p>
        <p>
          I write about these patterns publicly because the gap between what
          practitioners know and what gets documented is where a lot of
          avoidable engineering waste lives. The writing on this site is an
          attempt to close that gap — case by case, with concrete numbers and
          reproducible techniques.
        </p>

        <h2>Elsewhere</h2>
        <p>
          You can find me on{" "}
          <Link href={siteConfig.social.linkedin}>LinkedIn</Link>. For direct
          messages, the <Link href="/contact">contact page</Link> is the
          fastest way to reach me.
        </p>
      </div>
    </div>
  );
}
