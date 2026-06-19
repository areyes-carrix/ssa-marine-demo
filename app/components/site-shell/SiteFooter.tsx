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
      {/* Brand stripe */}
      <div className="h-1 w-full bg-ssa-primary" aria-hidden="true" />

      <div className="mx-auto grid max-w-ssa gap-10 px-6 py-section md:grid-cols-3">
        {/* Brand blurb */}
        <div className="flex flex-col gap-4">
          <Image
            src="/ssa/home/assets/images/eco-logo-area/logo.png"
            alt="SSA Marine México"
            width={160}
            height={40}
            className="brightness-0 invert"
          />
          <p className="text-sm leading-relaxed text-ssa-surface/80">
            {BLURB}
          </p>
        </div>

        {/* Enlaces externos */}
        <nav aria-labelledby="footer-external" className="flex flex-col gap-3">
  <h2
    id="footer-external"
    className="font-display text-sm font-semibold uppercase tracking-wider text-ssa-primary"
  >
    Enlaces externos
  </h2>
  <ul className="flex flex-col gap-2 text-sm">
    {EXTERNAL_LINKS.map((l) => (
      <li key={l.label}>
        <a
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ssa-surface/80 transition-colors hover:text-ssa-primary"
        >
          {l.label}
        </a>
      </li>
    ))}
    <li className="pt-2">
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="text-ssa-surface/80 transition-colors hover:text-ssa-primary"
      >
        {CONTACT_EMAIL}
      </a>
    </li>
  </ul>
</nav>

        {/* Social */}
        <div className="flex flex-col gap-3">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ssa-primary">
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
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-ssa-primary"
                >
                  <Image src={s.src} alt="" width={20} height={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Legal row */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-ssa flex-col gap-2 px-6 py-4 text-xs text-ssa-surface/70 md:flex-row md:items-center md:justify-between">
          <p>© {year}, Derechos reservados. SSA Marine México.</p>
          <Link href="/aviso-de-privacidad" className="hover:text-ssa-surface">
            Aviso de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}