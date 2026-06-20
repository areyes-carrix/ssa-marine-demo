import Image from "next/image";
import { SERVICES } from "@/app/lib/services";

export default function ServicesSection() {
  return (
    <section
      className="bg-ssa-subtle py-section"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-ssa px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ssa-primary">
          Nuestros servicios
        </p>

        <h2
          id="services-heading"
          className="mt-3 font-display text-3xl font-bold text-ssa-ink md:text-5xl"
        >
          Soluciones portuarias especializadas
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="overflow-hidden bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-ssa-ink">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-ssa-ink/80">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}