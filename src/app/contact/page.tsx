import { Container } from "@/components/marketing/Container";
import { ContactForm } from "@/components/marketing/ContactForm";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="py-10 sm:py-14">
      <Container>
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-sky-700">
            Contact
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Let’s build something mission-ready
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            Share your goals and we’ll propose a clear plan for web, mobile, AI, or all of the above.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3">
            <div className="rounded-[28px] border border-sky-100 bg-white/90 p-6 shadow-[0_8px_30px_rgba(14,116,217,0.08)] sm:p-8">
              <ContactForm />
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-[28px] border border-sky-100 bg-gradient-to-b from-sky-50 to-emerald-50/40 p-6 shadow-[0_8px_30px_rgba(16,185,129,0.08)] sm:p-8">
              <h2 className="text-lg font-semibold text-slate-900">Reach us</h2>
              <div className="mt-4 space-y-4 text-sm text-slate-700">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Email
                  </div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="mt-1 inline-flex font-semibold text-slate-900 underline underline-offset-4"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Phone
                  </div>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="mt-1 inline-flex font-semibold text-slate-900 underline underline-offset-4"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Address
                  </div>
                  <p className="mt-1 font-semibold text-slate-900">{siteConfig.contact.address}</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-white p-4 ring-1 ring-sky-100">
                <p className="text-sm font-semibold text-slate-900">What to include</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500" />
                    <span>Goals and current system context</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500" />
                    <span>Timeline and constraints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500" />
                    <span>Any security or compliance needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}

