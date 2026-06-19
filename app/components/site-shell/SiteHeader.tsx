import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import HeaderScrollWatcher from "./HeaderScrollWatcher";

export const NAV_ITEMS = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/terminales", label: "Terminales" },
  { href: "/noticias", label: "Noticias" },
  { href: "/contacto", label: "Contacto" },
] as const;

// Will become real once add-i18n-es-en lands.
const ACTIVE_PATH = "/";
const ACTIVE_LANG: "ES" | "EN" = "EN";

export default function SiteHeader() {
  return (
    <header
      data-shell="site-header"
      data-scrolled="false"
      className="sticky top-0 z-50 w-full transition-shadow data-[scrolled=true]:shadow-md"
    >
      <HeaderScrollWatcher />

      {/* Top row — logo on white */}
      <div className="bg-ssa-surface">
        <div className="mx-auto flex max-w-ssa items-center justify-between px-6 py-4">
          <Link
            href="/"
            aria-label="SSA Marine México — inicio"
            className="flex items-center"
          >
            <Image
              src="/ssa/home/assets/images/eco-logo-area/logo.png"
              alt="SSA Marine México"
              width={160}
              height={40}
              priority
            />
          </Link>
          <MobileNav items={NAV_ITEMS} />
        </div>
      </div>

      {/* Dark nav bar — links + ES/EN, all on one line */}
      <div className="hidden bg-ssa-ink md:block">
        <div className="mx-auto flex max-w-ssa items-center justify-between px-6">
          <nav aria-label="Primary" className="flex items-stretch">
            {NAV_ITEMS.map((item) => {
              const active = item.href === ACTIVE_PATH;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-colors",
                    active
                      ? "bg-ssa-primary text-white"
                      : "text-ssa-surface/90 hover:bg-ssa-primary hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-stretch text-sm font-semibold">
            <button
              type="button"
              aria-label="Cambiar idioma a español"
              aria-pressed={ACTIVE_LANG === "ES"}
              className={[
                "px-4 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ssa-primary",
                ACTIVE_LANG === "ES"
                  ? "bg-ssa-primary text-white"
                  : "text-ssa-surface/90 hover:bg-ssa-primary hover:text-white",
              ].join(" ")}
            >
              ES
            </button>
            <button
              type="button"
              aria-label="Switch language to English"
              aria-pressed={ACTIVE_LANG === "EN"}
              className={[
                "px-4 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ssa-primary",
                ACTIVE_LANG === "EN"
                  ? "bg-ssa-primary text-white"
                  : "text-ssa-surface/90 hover:bg-ssa-primary hover:text-white",
              ].join(" ")}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}