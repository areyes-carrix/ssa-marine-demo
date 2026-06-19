import type { Metadata } from "next";
import { Kanit, Lato } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/app/components/site-shell/SiteHeader"
import SiteFooter from "@/app/components/site-shell/SiteFooter";

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SSA Marine México",
  description:
    "SSA Marine México opera en los principales puertos mexicanos ofreciendo servicios con terminales de automóviles, carga general, contenedores y cruceros.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${lato.variable} ${kanit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ssa-surface text-ssa-ink">
        <a
          href="#main"
          className="sr-only rounded bg-ssa-primary px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[100]"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}