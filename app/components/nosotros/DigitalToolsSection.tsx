import Image from "next/image";
import type { DigitalTool } from "@/app/lib/digital-tools";

type DigitalToolsSectionProps = {
  items: DigitalTool[];
};

export default function DigitalToolsSection({
  items,
}: DigitalToolsSectionProps) {
  return (
    <section className="bg-[#f3f3f3] pb-20 md:pb-24">
      <div className="mx-auto max-w-ssa px-6 md:px-8">
        <div className="max-w-2xl">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-ssa-primary">
            <span
              aria-hidden="true"
              className="inline-block h-3 w-3 rounded-full bg-ssa-primary"
            />
            Herramientas Digitales
          </p>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              
<div className="relative aspect-[4/3] w-full">
  <Image
    src={item.image}
    alt={item.alt}
    fill
    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
    className="object-cover"
  />
</div>


              <div className="p-6">
                {item.subtitle ? (
                  <p className="text-sm font-semibold text-neutral-500">
                    {item.subtitle}
                  </p>
                ) : null}

                <h3 className="mt-2 text-xl font-medium uppercase text-ssa-primary">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button
            type="button"
            className="inline-flex min-w-[160px] items-center justify-center bg-ssa-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-ssa-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ssa-primary focus-visible:ring-offset-2"
          >
            Ver Más
          </button>
        </div>
      </div>
    </section>
  );
}