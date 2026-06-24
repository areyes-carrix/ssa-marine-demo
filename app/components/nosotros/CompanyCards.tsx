import type { AboutCompanyCard } from "@/app/lib/about-company-cards";

type CompanyCardsProps = {
  items: AboutCompanyCard[];
};

export default function CompanyCards({ items }: CompanyCardsProps) {
  return (
    <section className="bg-[#f3f3f3] py-12 md:py-14">
      <div className="mx-auto max-w-ssa px-6 md:px-8">
        <div className="grid gap-7 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="relative border-b-4 border-ssa-primary bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="h-9 bg-ssa-primary" aria-hidden="true" />

              <div
                className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ssa-ink"
                aria-hidden="true"
              />

              <div className="px-5 pb-5 pt-4">
                <h2 className="text-xl font-medium leading-tight text-ssa-primary">
                  {item.title}
                </h2>

                <p className="mt-5 text-[13px] leading-6 text-neutral-600">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}