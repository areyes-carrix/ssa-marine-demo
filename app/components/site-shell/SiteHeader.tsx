import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import HeaderScrollWatcher from "./HeaderScrollWatcher";
import { BASE_PATH } from "@/app/lib/base-path";

export const NAV_ITEMS = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/terminales", label: "Terminales" },
  { href: "/noticias", label: "Noticias" },
  { href: "/contacto", label: "Contacto" },
] as const;

const ACTIVE_PATH = "/";
const SHOW_LANGUAGE_CTA = "INGLÉS";

export default function SiteHeader() {
  return (
    <header
      data-shell="site-header"
      data-scrolled="false"
      className="sticky top-0 z-50 w-full transition-shadow data-[scrolled=true]:shadow-md"
    >
      <HeaderScrollWatcher />

      <div className="bg-ssa-surface">
        <div className="mx-auto flex max-w-ssa items-center justify-between px-6 py-4 md:py-5">
          <Link
            href="/"
            aria-label="SSA Marine México — inicio"
            className="flex items-center"
          >
            <Image
              src={`${BASE_PATH}/ssa/home/assets/images/eco-logo-area/logo.png`}
              alt="SSA Marine México"
              width={190}
              height={44}
              priority
            />
          </Link>
          <MobileNav items={NAV_ITEMS} />
        </div>
      </div>

      <div className="hidden bg-ssa-ink md:block">
        <div className="mx-auto flex max-w-ssa items-stretch justify-between px-6">
          <nav aria-label="Primary" className="flex items-stretch">
            {NAV_ITEMS.map((item) => {
              const active = item.href === ACTIVE_PATH;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "px-8 py-5 text-sm font-semibold uppercase tracking-wide transition-colors",
                    active
                      ? "bg-ssa-primary text-white"
                      : "text-ssa-surface/95 hover:bg-ssa-primary hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label="Cambiar idioma a inglés"
            className="bg-ssa-primary px-8 py-5 text-sm font-semibold uppercase tracking-wide text-white"
          >
            {SHOW_LANGUAGE_CTA}
          </button>
        </div>
      </div>
    </header>
  );
}