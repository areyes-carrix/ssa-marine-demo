import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/app/components/home/SectionHeader";

const COUNTRIES = [
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

export default function AboutSection() {
  return (
    <section
      className="bg-[#efefef] py-16 md:py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-ssa gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="max-w-2xl">
          <SectionHeader
            id="about-heading"
            lines={["NOSOTROS", "Bienvenido a nuestras terminales"]}
            centered={false}
            className="mb-6"
          />

          <div className="space-y-4 text-base leading-7 text-ssa-ink/75">
            <p>
              Carrix y sus empresas filiales SSA Marine, Tideworks Technology y
              Rail Management Services conforman el mayor operador privado de
              terminales marítimas e intermodales del mundo.
            </p>

            <p>
              Hoy en día, SSA Marine, la división portuaria de Carrix, cuenta
              con terminales en:
            </p>

            <ul className="grid gap-2 py-2 text-ssa-ink">
              {COUNTRIES.map((country) => (
                <li
                  key={country}
                  className="flex items-center gap-3 text-base font-medium"
                >
                  <span aria-hidden="true" className="text-ssa-primary">
                    »
                  </span>
                  <span>{country}</span>
                </li>
              ))}
            </ul>

            <p>
              SSA tiene presencia en México desde 1995, donde se ha consolidado
              como el principal operador portuario a nivel nacional,
              desarrollando terminales para operación de automóviles, carga
              general, contenedores y cruceros, en los puertos más importantes
              del país.
            </p>
          </div>

          <Link
            href="/nosotros"
            className="mt-6 inline-block bg-ssa-primary px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-ssa-ink"
          >
            Ver más
          </Link>
        </div>

        <div className="relative overflow-hidden">
          <Image
            src="/ssa/home/assets/images/eco-single-about-image/about-1.jpg"
            alt="Operación portuaria SSA Marine México"
            width={700}
            height={520}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}