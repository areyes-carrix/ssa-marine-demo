import Image from "next/image";
import { STATS } from "@/app/lib/stats";

export default function StatsSection() {
  return (
    <section
      className="bg-ssa-primary py-14 text-white"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-ssa px-6">
        <h2 id="stats-heading" className="sr-only">
          SSA Marine México statistics
        </h2>

        <div className="grid gap-8 text-center md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              <Image
                src={stat.icon}
                alt=""
                width={72}
                height={72}
                className="h-[72px] w-[72px] object-contain"
              />
              <p className="mt-4 font-display text-3xl font-bold md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/90">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}