import AboutCarousel from "@/app/components/nosotros/AboutCarousel";
import type { AboutCarouselSlide } from "@/app/lib/about-carousel-slides";

const countries = [
  "Canadá",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Estados Unidos",
  "México",
  "Nueva Zelanda",
  "Panamá",
  "Sudáfrica",
  "Vietnam",
];

type WelcomeSectionProps = {
  slides: AboutCarouselSlide[];
};

export default function WelcomeSection({ slides }: WelcomeSectionProps) {
  return (
    <section className="bg-white py-8 md:py-10">
      <div className="mx-auto max-w-ssa px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(380px,560px)] lg:items-start">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-ssa-ink">
              <span
                aria-hidden="true"
                className="inline-block h-5 w-5 rounded-full bg-ssa-primary"
              />
              NOSOTROS
            </p>

            <h2 className="mt-2 font-display text-3xl font-medium leading-tight text-ssa-ink md:text-4xl">
              Bienvenido a nuestras terminales
            </h2>

            <p className="mt-5 text-[13px] leading-6 text-neutral-600 md:text-sm">
              Carrix y sus empresas filiales SSA Marine, Tideworks Technology y Rail
              Management Services conforman el mayor operador privado de terminales
              marítimas e intermodales del mundo.
            </p>

            <p className="mt-6 text-[13px] leading-6 text-neutral-600 md:text-sm">
              Hoy en día, SSA Marine, la división portuaria de Carrix, cuenta con
              terminales en:
            </p>

            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {countries.map((country) => (
                <li
                  key={country}
                  className="flex items-start gap-3 text-[13px] font-semibold text-neutral-700 md:text-sm"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 text-ssa-primary"
                  >
                    »
                  </span>
                  <span>{country}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 text-[13px] leading-6 text-neutral-600 md:text-sm">
              SSA tiene presencia en México desde 1995, donde se ha consolidado como
              el principal operador portuario a nivel nacional, desarrollando terminales
              para operación de automóviles, carga general, contenedores y cruceros, en
              los puertos más importantes del país.
            </p>
          </div>

          <AboutCarousel slides={slides} />
        </div>
      </div>
    </section>
  );
}