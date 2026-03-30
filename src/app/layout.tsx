import type { Metadata } from "next";

import "./globals.css";
import { Footer } from "@/components/marketing/Footer";
import { Navbar } from "@/components/marketing/Navbar";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://codersalley.com"),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  keywords: [...siteConfig.seoKeywords],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.tagline,
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <div className="min-h-dvh bg-white text-slate-900 antialiased">
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
