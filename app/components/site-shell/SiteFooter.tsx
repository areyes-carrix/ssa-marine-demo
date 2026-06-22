import Image from "next/image";
import Link from "next/link";

const SOCIAL = [
  { src: "/ssa/home/assets/images/misc/1.png", label: "Facebook", href: "#" },
  { src: "/ssa/home/assets/images/misc/2.png", label: "Twitter", href: "#" },
  { src: "/ssa/home/assets/images/misc/3.png", label: "LinkedIn", href: "#" },
  { src: "/ssa/home/assets/images/misc/4.png", label: "YouTube", href: "#" },
];

const EXTERNAL_LINKS = [
  { label: "SSA Marine", href: "https://www.ssamarine.com/" },
  { label: "Tideworks", href: "https://tideworks.com/" },
  { label: "OSS-PLS", href: "http://www.oss-pls.com/" },
];

const CONTACT_EMAIL = "contacto@ssamarine.com";

const BLURB =
  "SSA Marine México opera en los principales puertos mexicanos ofreciendo diversos servicios con terminales de automóviles, carga general, contenedores y cruceros.";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ssa-ink text-ssa-surface">
      <div className="h-1 w-full bg-ssa-primary" aria-hidden="true" />

      <div className="mx-auto grid max-w-ssa gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr_0.9fr]">
        <div className="flex flex-col gap-5">
          <Image
            src="/ssa/home/assets/images/eco-logo-area/logo.png"
            alt="SSA Marine México"
            width={200}
            height={50}
            className="brightness-0 invert"
          />
          <p className="max-w-md text-sm leading-8 text-ssa-surface/95">
            {BLURB}
          </p>
        </div>

        <nav aria-labelledby="footer-external" className="flex flex-col gap-4">
          <h2
            id="footer-external"
            className="text-xl font-light uppercase tracking-wide text-white"
          >
            ENLACES EXTERNOS
          </h2>
          <div className="h-1 w-32 bg-ssa-primary" aria-hidden="true" />

          <ul className="grid gap-4 text-lg">
            {EXTERNAL_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-ssa-primary"
                >
                  » {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="transition-colors hover:text-ssa-primary"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-light uppercase tracking-wide text-white">
            Síguenos
          </h2>

          <ul aria-label="Redes sociales" className="flex items-center gap-3">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-ssa-primary"
                >
                  <Image src={s.src} alt="" width={24} height={24} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-ssa flex-col gap-3 px-6 py-6 text-sm text-ssa-surface/90 md:flex-row md:items-center md:justify-between">
          <p>© {year}, Derechos reservados. SSA Marine México.</p>
          <Link href="/aviso-de-privacidad" className="hover:text-white">
            Aviso de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}