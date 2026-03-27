import Link from "next/link";

import { Container } from "@/components/marketing/Container";

type CaseStudy = {
  title: string;
  summary: string;
  tags: string[];
};

const studies: CaseStudy[] = [
  {
    title: "AI Support Assistant with Guardrails",
    summary:
      "Built an LLM workflow with evaluation, retrieval, and safety checks to improve response quality for customer support.",
    tags: ["LLM", "RAG", "Evals"],
  },
  {
    title: "Modernized Web Platform Performance",
    summary:
      "Re-architected critical front-end flows and API endpoints to reduce latency and improve reliability for a high-traffic product.",
    tags: ["Next.js", "APIs", "Observability"],
  },
  {
    title: "Secure Cloud Foundations for Growth",
    summary:
      "Introduced DevSecOps practices, monitoring, and governance controls to support future scaling without operational surprises.",
    tags: ["Security", "Cloud", "DevSecOps"],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="py-10 sm:py-14">
      <Container>
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-sky-700">
            Case Studies
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Proof of disciplined engineering
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            A few examples of how we help teams ship secure, scalable systems.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {studies.map((s) => (
            <article key={s.title} className="brand-card">
              <h2 className="text-lg font-semibold text-slate-900">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-gradient-to-r from-sky-100 to-emerald-100 px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 underline underline-offset-4 hover:text-sky-800"
                >
                  Discuss a similar project →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[28px] border border-sky-100 bg-gradient-to-r from-sky-100 via-white to-emerald-100 p-8 shadow-[0_10px_30px_rgba(14,116,217,0.12)] sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Want a custom plan?
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            We’ll help you define milestones, architecture, and delivery scope for your next release.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Request a consultation
            </Link>
            <Link
              href="/services"
              className="btn-secondary"
            >
              Review services
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

