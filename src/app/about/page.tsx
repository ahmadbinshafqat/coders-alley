import Link from "next/link";

import { Container } from "@/components/marketing/Container";

export default function AboutPage() {
  return (
    <div className="py-10 sm:py-14">
      <Container>
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-sky-700">
            About Coders Alley
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Connecting vision with precision
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            We’re a custom engineering partner delivering secure web, mobile, and AI systems.
            Our focus is disciplined execution: clear scope, measurable outcomes, and reliable delivery.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-start">
          <div className="brand-card">
            <h2 className="text-lg font-semibold text-slate-900">Our principles</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                <span>
                  <span className="font-semibold text-slate-900">Precision</span> in architecture and delivery.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <span>
                  <span className="font-semibold text-slate-900">Discipline</span> across planning, engineering, and QA.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                <span>
                  <span className="font-semibold text-slate-900">Integrity</span> through transparency and measurable progress.
                </span>
              </li>
            </ul>
          </div>

          <div className="brand-card lg:col-span-2">
            <h2 className="text-lg font-semibold text-slate-900">How we work</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-sky-50/60 p-4">
                <p className="text-sm font-semibold text-slate-900">AI as a strategy</p>
                <p className="mt-2 text-sm text-slate-600">
                  LLM integration is only the beginning—we help you build durable AI workflows.
                </p>
              </div>
              <div className="rounded-2xl bg-emerald-50/60 p-4">
                <p className="text-sm font-semibold text-slate-900">Security & reliability</p>
                <p className="mt-2 text-sm text-slate-600">
                  Guardrails, testing, and resilient systems so your product stays dependable.
                </p>
              </div>
              <div className="rounded-2xl bg-sky-50/60 p-4">
                <p className="text-sm font-semibold text-slate-900">Actionable outcomes</p>
                <p className="mt-2 text-sm text-slate-600">
                  We focus on practical metrics: adoption, performance, and operational efficiency.
                </p>
              </div>
              <div className="rounded-2xl bg-emerald-50/60 p-4">
                <p className="text-sm font-semibold text-slate-900">Delivery predictability</p>
                <p className="mt-2 text-sm text-slate-600">
                  Clear milestones, quality gates, and disciplined iteration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[28px] border border-sky-100 bg-gradient-to-r from-sky-100 via-white to-emerald-100 p-8 shadow-[0_10px_30px_rgba(14,116,217,0.12)] sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Want a mission-ready plan?
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Tell us your goals and constraints. We’ll propose a practical architecture and delivery path.
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

