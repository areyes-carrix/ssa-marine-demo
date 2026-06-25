import type { Noticia } from "@/app/lib/noticias";
import NewsCard from "./NewsCard";

type NewsGridProps = {
  items: Noticia[];
};

export default function NewsGrid({
  items,
}: NewsGridProps) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-ssa px-6 md:px-8">
        <div className="grid gap-x-10 gap-y-14 lg:grid-cols-2">
          {items.map((item) => (
            <NewsCard
              key={item.id}
              title={item.title}
              date={item.date}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}