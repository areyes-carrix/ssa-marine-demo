import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/app/components/home/SectionHeader";
import { BASE_PATH } from "@/app/lib/base-path";
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
      className="bg-[#efefef] py-12 sm:py-14 md:py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-ssa gap-6 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:items-start">
        <div className="max-w-2xl">
          <SectionHeader
            id="about-heading"
            lines={["NOSOTROS", "Bienvenido a nuestras terminales"]}
            centered={false}
            className="mb-5"
          />

          {/* Intro text */}
          <div className="space-y-3 text-[0.95rem] leading-6 text-ssa-ink/75 sm:text-base sm:leading-7">
            <p>
              Carrix y sus empresas filiales SSA Marine, Tideworks Technology y
              Rail Management Services conforman el mayor operador privado de
              terminales marítimas e intermodales del mundo.
            </p>

            <p>
              Hoy en día, SSA Marine, la división portuaria de Carrix, cuenta
              con terminales en:
            </p>
          </div>

          {/* Image moved earlier on mobile for better flow */}
          <div className="relative mt-5 overflow-hidden lg:hidden">
            <Image
              src={`${BASE_PATH}/ssa/home/assets/images/eco-single-about-image/about-1.jpg`}
              alt="Operación portuaria SSA Marine México"
              width={700}
              height={520}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Countries list */}
          <ul className="mt-4 grid gap-1 py-1 text-ssa-ink">
            {COUNTRIES.map((country) => (
              <li
                key={country}
                className="flex items-center gap-3 text-sm sm:text-base"
              >
                <span aria-hidden="true" className="text-ssa-primary">
                  »
                </span>
                <span>{country}</span>
              </li>
            ))}
          </ul>

          {/* Closing paragraph */}
          <div className="mt-4 text-[0.95rem] leading-6 text-ssa-ink/75 sm:text-base sm:leading-7">
            <p>
              SSA tiene presencia en México desde 1995, donde se ha consolidado
              como el principal operador portuario a nivel nacional,
              desarrollando terminales para operación de automóviles, carga
              general, contenedores y cruceros.
            </p>
          </div>

          <Link
            href="/nosotros"
            className="mt-5 inline-block bg-ssa-primary px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-ssa-ink"
          >
            Ver más
          </Link>
        </div>

        {/* Desktop image stays on the right */}
        <div className="relative hidden overflow-hidden lg:block">
          <Image
            src={`${BASE_PATH}/ssa/home/assets/images/eco-single-about-image/about-1.jpg`}
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