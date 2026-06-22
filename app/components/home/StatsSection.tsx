import Image from "next/image";
import { STATS } from "@/app/lib/stats";
import SectionHeader from "@/app/components/home/SectionHeader";

export default function StatsSection() {
  return (
    <section aria-labelledby="stats-heading" className="bg-[#efefef]">
      <div className="mx-auto max-w-ssa px-6 pt-12 md:pt-16">
        <SectionHeader
          id="stats-heading"
          lines={["OPERADOR PORTUARIO", "LÍDER EN MÉXICO"]}
          greenLineIndexes={[1]}
          centered={true}
          className="mb-10"
        />

        <p className="text-center text-5xl font-light text-ssa-primary md:text-6xl">
          2025
        </p>
      </div>

      <div className="relative mt-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/ssa/home/assets/images/eco-slider-area-start/slider-4.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-ssa-primary/65" />

        <div className="relative mx-auto grid max-w-ssa gap-6 px-6 py-12 md:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/8 px-6 py-8 text-center backdrop-blur-[1px]"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-white">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>

              <p className="mt-6 text-5xl font-bold leading-none text-white">
                {stat.value}
              </p>

              <p className="mt-4 text-[1.05rem] font-medium uppercase leading-tight text-white">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}