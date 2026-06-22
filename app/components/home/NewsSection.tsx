import Image from "next/image";
import Link from "next/link";
import { NEWS_ITEMS } from "@/app/lib/news";
import SectionHeader from "@/app/components/home/SectionHeader";

export default function NewsSection() {
  return (
    <section
      className="bg-[#efefef] py-16 md:py-20"
      aria-labelledby="news-heading"
    >
      <div className="mx-auto max-w-ssa px-6">
        <SectionHeader
          id="news-heading"
          lines={["NOTICIAS RECIENTES"]}
          centered={true}
          className="mb-14"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {NEWS_ITEMS.map((item) => (
            <article
              key={item.id}
              className="border border-[#ececec] bg-white"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <p className="text-[1.6rem] font-light uppercase leading-none text-ssa-primary">
                  {item.category}
                </p>

                <p className="mt-5 text-[1rem] leading-8 text-ssa-ink/85">
                  {item.summary}
                </p>

                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-ssa-primary hover:underline"
                >
                  <span aria-hidden="true">»</span>
                  Ver más
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}