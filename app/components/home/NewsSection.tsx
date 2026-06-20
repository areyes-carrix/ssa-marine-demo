import Link from "next/link";
import { NEWS_ITEMS } from "@/app/lib/news";

export default function NewsSection() {
  return (
    <section
      className="bg-ssa-subtle py-section"
      aria-labelledby="news-heading"
    >
      <div className="mx-auto max-w-ssa px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ssa-primary">
              Noticias
            </p>
            <h2
              id="news-heading"
              className="mt-3 font-display text-3xl font-bold text-ssa-ink md:text-5xl"
            >
              Últimas noticias
            </h2>
          </div>

          <Link
            href="/noticias"
            className="text-sm font-semibold uppercase tracking-wide text-ssa-primary transition-colors hover:text-ssa-ink"
          >
            Ver todas
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {NEWS_ITEMS.map((item) => (
            <article
              key={item.id}
              className="border border-black/5 bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-ssa-primary">
                {item.date}
              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-ssa-ink">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-ssa-ink/80">
                {item.summary}
              </p>

              <Link
                href={item.href}
                className="mt-6 inline-block text-sm font-semibold uppercase tracking-wide text-ssa-primary transition-colors hover:text-ssa-ink"
              >
                Leer más
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}