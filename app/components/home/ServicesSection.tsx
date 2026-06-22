import Image from "next/image";
import { SERVICES } from "@/app/lib/services";
import SectionHeader from "@/app/components/home/SectionHeader";

export default function ServicesSection() {
  return (
    <section
      className="bg-[#efefef] py-12 sm:py-14 md:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-ssa px-6">
        <SectionHeader
          id="services-heading"
          lines={["NUESTROS", "SERVICIOS"]}
          greenLineIndexes={[1]}
          centered={false}
          className="mb-8 sm:mb-10 md:mb-12"
        />

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
        {SERVICES.map((service) => (
  <article
    key={service.id}
    className="overflow-hidden border border-[#ececec] bg-white"
  >
    <div className="relative h-56 w-full overflow-hidden sm:h-64 md:h-72">
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
    </div>

    <div className="p-4 sm:p-5 md:p-6">
      <h3 className="text-[1.5rem] font-light uppercase leading-none text-ssa-primary sm:text-[1.75rem] md:text-[2rem]">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-ssa-ink/70 sm:text-[0.95rem] sm:leading-7">
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