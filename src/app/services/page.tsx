import Link from "next/link";

import { Container } from "@/components/marketing/Container";

const serviceCards = [
  {
    title: "Web Development",
    description:
      "High-performance web apps, secure APIs, and clean integration layers.",
    highlights: ["UX-first UI", "API design", "Observability"],
  },
  {
    title: "Mobile Development",
    description:
      "Reliable mobile experiences designed for performance, retention, and maintainability.",
    highlights: ["Cross-platform/mobile", "Analytics-ready", "Release support"],
  },
  {
    title: "AI-Driven Engineering",
    description:
      "LLM integration, RAG, and production AI workflows with guardrails and evaluation.",
    highlights: ["RAG & LLM apps", "Evals & monitoring", "MLOps readiness"],
  },
  {
    title: "Cloud & Security",
    description:
      "Resilient architecture, DevSecOps practices, and secure operational foundations.",
    highlights: ["Cloud architecture", "Security automation", "Cost controls"],
  },
];

export default function ServicesPage() {
  return (
    <div className="py-10 sm:py-14">
      <Container>
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-sky-700">
            Solutions to propel your mission
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Services built for delivery
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            Coders Alley connects engineering, AI, and security into a single execution system.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {serviceCards.map((c) => (
            <article
              key={c.title}
              className="brand-card"
            >
              <h2 className="text-lg font-semibold text-slate-900">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.description}</p>
              <ul className="mt-5 space-y-2">
                {c.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[28px] border border-sky-100 bg-gradient-to-r from-sky-100 via-white to-emerald-100 p-8 shadow-[0_10px_30px_rgba(14,116,217,0.12)] sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Not sure where to start?
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Tell us what you’re building. We’ll recommend the right plan—web, mobile, AI, or all of the above.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Request a consultation
            </Link>
            <Link
              href="/case-studies"
              className="btn-secondary"
            >
              View case studies
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

