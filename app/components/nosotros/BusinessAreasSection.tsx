import Image from "next/image";
import type { BusinessArea } from "@/app/lib/business-areas";

type BusinessAreasSectionProps = {
  items: BusinessArea[];
};

export default function BusinessAreasSection({
  items,
}: BusinessAreasSectionProps) {
  return (
    <section className="bg-white py-12 md:py-14">
      <div className="mx-auto max-w-ssa px-6 md:px-8">
        <div className="grid items-stretch gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.id}
              className="flex h-full flex-col overflow-hidden bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="relative aspect-[4/3] w-full shrink-0">
              
<Image
  src={item.image}
  alt={item.alt}
  fill
  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
  className="object-cover"
/>

              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-medium uppercase leading-tight text-ssa-primary">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-neutral-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}