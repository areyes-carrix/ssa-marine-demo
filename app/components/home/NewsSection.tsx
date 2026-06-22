import Image from "next/image";
import Link from "next/link";
import { NEWS_ITEMS } from "@/app/lib/news";
import SectionHeader from "@/app/components/home/SectionHeader";

export default function NewsSection() {
  return (
    <section
      className="bg-[#efefef] py-12 sm:py-14 md:py-20"
      aria-labelledby="news-heading"
    >
      <div className="mx-auto max-w-ssa px-6">
        <SectionHeader
          id="news-heading"
          lines={["NOTICIAS RECIENTES"]}
          centered={true}
          className="mb-10 sm:mb-12 md:mb-14"
        />

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {NEWS_ITEMS.map((item) => (
            <article
              key={item.id}
              className="border border-[#ececec] bg-white"
            >
              <div className="relative h-56 w-full overflow-hidden sm:h-64 md:h-72">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="p-4 sm:p-5">
                <p className="text-[1.35rem] font-light uppercase leading-none text-ssa-primary sm:text-[1.5rem] md:text-[1.6rem]">
                  {item.category}
                </p>

                <p className="mt-4 text-sm leading-6 text-ssa-ink/85 sm:text-[0.95rem] sm:leading-7 md:mt-5 md:text-[1rem] md:leading-8">
                  {item.summary}
                </p>

                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-ssa-primary hover:underline sm:text-sm md:mt-6"
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
  )}