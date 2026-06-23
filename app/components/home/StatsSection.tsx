import Image from "next/image";
import { STATS } from "@/app/lib/stats";
import SectionHeader from "@/app/components/home/SectionHeader";
import { BASE_PATH } from "@/app/lib/base-path";

export default function StatsSection() {
  return (
    <section aria-labelledby="stats-heading" className="bg-[#efefef]">
      <div className="mx-auto max-w-ssa px-6 pt-10 sm:pt-12 md:pt-16">
        <SectionHeader
          id="stats-heading"
          lines={["OPERADOR PORTUARIO", "LÍDER EN MÉXICO"]}
          greenLineIndexes={[1]}
          centered={true}
          className="mb-8 sm:mb-9 md:mb-10"
        />

        <p className="text-center text-4xl font-light text-ssa-primary sm:text-5xl md:text-6xl">
          2025
        </p>
      </div>

      <div className="relative mt-5 overflow-hidden sm:mt-6">
        <div className="absolute inset-0">
          <Image
            src={`${BASE_PATH}/ssa/home/assets/images/eco-slider-area-start/slider-4.jpg`}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-ssa-primary/65" />

        <div className="relative mx-auto grid max-w-ssa gap-4 px-6 py-8 sm:gap-5 sm:py-10 md:grid-cols-4 md:gap-6 md:py-12">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/8 px-4 py-5 text-center backdrop-blur-[1px] sm:px-5 sm:py-6 md:px-6 md:py-8"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-white sm:h-18 sm:w-18 md:h-20 md:w-20">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={48}
                  height={48}
                  className="h-10 w-10 object-contain sm:h-11 sm:w-11 md:h-12 md:w-12"
                />
              </div>

              <p className="mt-4 text-4xl font-bold leading-none text-white sm:text-[2.75rem] md:mt-6 md:text-5xl">
                {stat.value}
              </p>

              <p className="mt-3 text-[1rem] font-medium uppercase leading-tight text-white sm:text-[1rem] md:mt-4 md:text-[1.05rem]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}