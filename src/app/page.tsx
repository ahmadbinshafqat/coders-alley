import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/marketing/Container";

const services = [
  {
    title: "Web Development",
    description:
      "Durable, secure front-ends and high-performance back-ends built for real users.",
    bullets: ["Next.js/React", "APIs & integrations", "Security by default"],
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform or native experiences with smooth UX and maintainable architecture.",
    bullets: ["iOS & Android", "Offline-ready flows", "App store readiness"],
  },
  {
    title: "AI Engineering",
    description:
      "From LLM integration to production pipelines—automation that improves speed and outcomes.",
    bullets: ["RAG & LLM workflows", "MLOps foundations", "Guardrails & evals"],
  },
  {
    title: "Cloud & Security",
    description:
      "Resilient systems designed for uptime, governance, and long-term scaling.",
    bullets: ["Cloud architecture", "DevSecOps practices", "Monitoring & cost control"],
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We map goals, constraints, and data reality—then define the fastest path to value.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Architecture, UX, and delivery plans that reduce risk and keep stakeholders aligned.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Implementation with clean engineering standards, security checks, and quality gates.",
  },
  {
    step: "04",
    title: "Launch & Improve",
    description:
      "Deployment, monitoring, and iterative enhancements so your system keeps getting better.",
  },
];

const testimonials = [
  {
    quote:
      "Coders Alley turned our AI idea into a working system with strong guardrails and clear metrics.",
    name: "Product Lead",
    role: "FinTech",
  },
  {
    quote:
      "They modernized our web platform without breaking workflows—and performance jumped noticeably.",
    name: "CTO",
    role: "Logistics",
  },
  {
    quote:
      "From discovery to delivery, the process felt disciplined and transparent. The result shipped on time.",
    name: "Operations Director",
    role: "Healthcare",
  },
];

export default function Home() {
  return (
    <div className="space-y-4 pb-6">
      <section className="relative overflow-hidden pb-8 pt-16 sm:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(14,116,217,0.18),transparent_34%),radial-gradient(circle_at_30%_100%,rgba(34,197,94,0.16),transparent_35%)]" />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold text-sky-700 backdrop-blur">
                Full-stack + AI engineering for modern businesses
              </div>

              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
                Cool products. Clean code.{" "}
                <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                  Real business impact.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
                Coders Alley builds eye-catching digital experiences backed by robust engineering—
                across web, mobile, AI, and cloud.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/contact" className="btn-primary">
                  Start your project
                </Link>
                <Link href="/services" className="btn-secondary">
                  Explore services
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="brand-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">Launch speed</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">Fast & focused</p>
                </div>
                <div className="brand-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Design quality</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">Modern UX</p>
                </div>
                <div className="brand-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Engineering</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">Built to scale</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-sky-500/25 blur-2xl" />
              <div className="absolute -right-10 top-0 h-48 w-48 rounded-full bg-emerald-500/25 blur-2xl" />
              <div className="mt-8 mb-8 hidden max-w-md lg:block ml-auto">
                {/* <div className="mb-2 text-sm font-semibold text-slate-700">
                  A disciplined process — from discovery to launch
                </div> */}
                <p className="mt-3 max-w-2xl text-slate-600">
                  From discovery to launch, we reduce risk, improve clarity, and keep delivery predictable.
                </p>
                
                {/* <p className="mt-3 max-w-2xl text-slate-600">
                  We reduce risk, improve clarity, and keep delivery predictable.
                </p> */}
                <div className="relative pl-5">
                  <div className="absolute left-1.5 top-0 h-full w-[2px] bg-gradient-to-b from-sky-300 via-cyan-300 to-emerald-300" />
                  <ul className="space-y-4">
                    {process.slice(0, 4).map((p) => (
                      <li key={p.step} className="relative">
                        <div className="absolute -left-[11px] top-2 h-3.5 w-3.5 rounded-full bg-white ring-2 ring-sky-400" />
                        <div className="rounded-xl bg-white/75 px-4 py-3 ring-1 ring-slate-100 backdrop-blur">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-r from-sky-500/20 to-emerald-500/20 text-[10px] font-semibold text-slate-700 ring-1 ring-sky-100">
                              {p.step}
                            </span>
                            <span className="text-sm font-semibold text-slate-900">
                              {p.title}
                            </span>
                          </div>
                          <p className="mt-1.5 text-xs text-slate-600">{p.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="section-title">Services that turn vision into execution</h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Web, mobile, AI, and security—delivered as a cohesive engineering system.
              </p>
            </div>
            <Link
              href="/services"
              className="hidden text-sm font-semibold text-sky-700 underline underline-offset-4 hover:text-sky-800 sm:block"
            >
              See all services →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.title}
                className="brand-card transition hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(16,185,129,0.16)]"
              >
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.description}</p>
                <ul className="mt-5 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* <section className="bg-gradient-to-b from-sky-50/65 via-white to-emerald-50/35 py-16 sm:py-20">
        <Container>
          <div>
            <h2 className="section-title">A disciplined process—from discovery to launch</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              We reduce risk, improve clarity, and keep delivery predictable.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="brand-card relative overflow-hidden">
                <div className="absolute right-3 top-3 text-6xl font-semibold leading-none text-sky-100">
                  {p.step}
                </div>
                <div className="relative">
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section> */}

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="section-title">Proof that matters</h2>
              <p className="mt-3 text-slate-600">
                We focus on measurable outcomes: speed, reliability, adoption, and secure operations.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="brand-card p-5">
                  <p className="text-xs font-semibold text-slate-600">Delivery quality</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">Clean releases</p>
                </div>
                <div className="brand-card p-5">
                  <p className="text-xs font-semibold text-slate-600">AI reliability</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">Evaluated outputs</p>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/case-studies" className="btn-secondary">
                  View case studies →
                </Link>
              </div>
            </div>

            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                {testimonials.map((t) => (
                  <figure key={t.name + t.role} className="brand-card">
                    <blockquote className="text-sm leading-relaxed text-slate-700">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-4">
                      <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                      <div className="text-xs font-medium text-slate-600">{t.role}</div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20">
        <Container>
          <div className="glass-panel relative overflow-hidden border border-sky-100 p-8 sm:p-12">
            <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-sky-500/20 blur-2xl" />
            <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-emerald-500/20 blur-2xl" />

            <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="section-title">Ready to build your next system?</h2>
                <p className="mt-3 max-w-xl text-slate-600">
                  Share your goals and we’ll propose a clear plan—web, mobile, AI, or all of the above.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:items-end">
                <Link href="/contact" className="btn-primary">
                  Request a free trial call
                </Link>
                <p className="text-xs font-medium text-slate-600">
                  Typical response within 1 business day.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
