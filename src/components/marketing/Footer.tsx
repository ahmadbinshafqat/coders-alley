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
          <a
            href="https://www.linkedin.com/company/codersalley"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-slate-600 transition-colors hover:text-sky-700 md:text-right"
            aria-label="Visit Coders Alley on LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            >
              <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 10.2H5.66V18H8.34V10.2ZM7 5.95A1.56 1.56 0 1 0 7 9.07A1.56 1.56 0 1 0 7 5.95ZM18.34 13.47C18.34 11.11 17.08 10.02 15.39 10.02C14.03 10.02 13.42 10.76 13.08 11.28V10.2H10.5C10.53 10.91 10.5 18 10.5 18H13.08V13.67C13.08 13.44 13.1 13.2 13.17 13.04C13.35 12.57 13.74 12.08 14.44 12.08C15.36 12.08 15.73 12.78 15.73 13.8V18H18.34V13.47Z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}

