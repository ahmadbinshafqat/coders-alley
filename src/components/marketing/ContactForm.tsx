"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { siteConfig } from "@/lib/site";

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
};

function isEmail(value: string) {
  // Lightweight email check for UX; server validates too.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function ContactForm() {
  const [payload, setPayload] = useState<ContactPayload>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const canSubmit = useMemo(() => {
    return (
      payload.name.trim().length >= 2 &&
      isEmail(payload.email) &&
      payload.message.trim().length >= 10
    );
  }, [payload]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit || status === "submitting") return;

    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || "Request failed");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" aria-label="Contact form">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-slate-900">Name</span>
          <input
            value={payload.name}
            onChange={(e) => setPayload((p) => ({ ...p, name: e.target.value }))}
            className="mt-2 w-full rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-500/20"
            placeholder="Your name"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-900">Email</span>
          <input
            value={payload.email}
            onChange={(e) =>
              setPayload((p) => ({ ...p, email: e.target.value }))
            }
            className="mt-2 w-full rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-500/20"
            placeholder="you@company.com"
            type="email"
            required
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-semibold text-slate-900">Company</span>
        <input
          value={payload.company}
          onChange={(e) =>
            setPayload((p) => ({ ...p, company: e.target.value }))
          }
          className="mt-2 w-full rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-500/20"
          placeholder="Company (optional)"
        />
      </label>

      <label className="block">
        <span className="text-sm font-semibold text-slate-900">Message</span>
        <textarea
          value={payload.message}
          onChange={(e) =>
            setPayload((p) => ({ ...p, message: e.target.value }))
          }
          className="mt-2 min-h-[140px] w-full resize-y rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-500/20"
          placeholder="Tell us what you want to build (scope, timeline, and goals)"
          required
        />
        <p className="mt-2 text-xs text-slate-500">
          Tip: Include your goals, timeline, and any constraints.
        </p>
      </label>

      {status === "success" ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm">
          Thanks! We’ll reach out to you soon. If you need to contact us directly, email{" "}
          <a className="font-semibold text-slate-900 underline underline-offset-4" href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>
          .
        </div>
      ) : (
        <>
          {status === "error" && (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {errorMessage || "Request failed. Please try again."}
            </div>
          )}

          <button
            type="submit"
            disabled={!canSubmit || status === "submitting"}
            className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-sky-600 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-sky-700 hover:to-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "submitting" ? "Sending..." : "Request a free consultation"}
          </button>
        </>
      )}
    </form>
  );
}

