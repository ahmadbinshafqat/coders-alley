import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/marketing/Container";

export function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-gradient-to-b from-white via-sky-50/35 to-emerald-50/25">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl ring-2 ring-sky-100 shadow-sm">
                <Image
                  src="/logo.svg"
                  alt={`${siteConfig.name} logo`}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-bold tracking-wide text-slate-900 sm:text-base">
                {siteConfig.name}
              </span>
            </Link>
            <p className="max-w-sm text-sm text-slate-600">
              {siteConfig.description}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              Solutions
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              {siteConfig.navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-slate-600 transition-colors hover:text-sky-700"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              Contact
            </h3>
            <div className="text-sm text-slate-600">
              <p>
                Email:{" "}
                <a
                  className="font-semibold text-slate-900 underline underline-offset-4"
                  href={`mailto:${siteConfig.contact.email}`}
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="mt-2">
                Phone:{" "}
                <a
                  className="font-semibold text-slate-900 underline underline-offset-4"
                  href={`tel:${siteConfig.contact.phone}`}
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="mt-2">{siteConfig.contact.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-sky-100/90 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="md:text-right">
            Built with Next.js · Secure by design · Ready to launch
          </p>
        </div>
      </Container>
    </footer>
  );
}

