"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/marketing/Container";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = useMemo(() => siteConfig.navLinks, []);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl ring-2 ring-sky-100 shadow-sm transition-transform group-hover:scale-105">
            <Image
              src="/logo.svg"
              alt={`${siteConfig.name} logo`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-sm font-bold tracking-wide text-slate-900 sm:text-base">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-sky-700"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-sky-600 to-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Talk to us
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-900"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="h-5 w-5">
              <div
                className={cn(
                  "relative top-0 h-[2px] w-full bg-slate-700 transition-transform",
                  open ? "top-1.5 rotate-45" : ""
                )}
              />
              <div
                className={cn(
                  "relative top-1 h-[2px] w-full bg-slate-700 transition-opacity",
                  open ? "opacity-0" : ""
                )}
              />
              <div
                className={cn(
                  "relative top-2 h-[2px] w-full bg-slate-700 transition-transform",
                  open ? "-top-[3px] -rotate-45" : ""
                )}
              />
            </div>
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "md:hidden",
          open
            ? "block border-t border-sky-100 bg-white/95 backdrop-blur"
            : "hidden"
        )}
      >
        <Container className="py-4">
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-sky-50"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-1 rounded-xl bg-gradient-to-r from-sky-600 to-emerald-600 px-3 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Request a free consultation
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}

