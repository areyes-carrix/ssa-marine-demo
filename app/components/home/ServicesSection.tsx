import Image from "next/image";
import { SERVICES } from "@/app/lib/services";
import SectionHeader from "@/app/components/home/SectionHeader";

export default function ServicesSection() {
  return (
    <section
      className="bg-[#efefef] py-16 md:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-ssa px-6">
        <SectionHeader
          id="services-heading"
          lines={["NUESTROS", "SERVICIOS"]}
          greenLineIndexes={[1]}
          centered={false}
          className="mb-12"
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="overflow-hidden border border-[#ececec] bg-white"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-[2rem] font-light uppercase leading-none text-ssa-primary">
                  {service.title}
                </h3>

                <p className="mt-4 text-[0.95rem] leading-7 text-ssa-ink/70">
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