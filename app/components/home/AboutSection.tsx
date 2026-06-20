import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      className="bg-ssa-surface py-section"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-ssa gap-10 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ssa-primary">
            Nosotros
          </p>

          <h2
            id="about-heading"
            className="mt-3 font-display text-3xl font-bold text-ssa-ink md:text-5xl"
          >
            Bienvenido a nuestras terminales
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-ssa-ink/85">
            <p>
              Carrix y sus empresas filiales SSA Marine, Tideworks Technology y
              Rail Management Services conforman el mayor operador privado de
              terminales marítimas e intermodales del mundo.
            </p>
            <p>
              Hoy en día, SSA Marine, la división portuaria de Carrix, cuenta
              con terminales en Canadá, Chile, Colombia, Costa Rica, Estados
              Unidos, México, Nueva Zelanda, Panamá, Sudáfrica y Vietnam.
            </p>
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
            className="mt-8 inline-block bg-ssa-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-ssa-ink"
          >
            Ver más
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-sm">
          <Image
            src="/ssa/home/assets/images/eco-single-about-image/about-1.jpg"
            alt="SSA Marine México terminal operations"
            width={900}
            height={700}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}