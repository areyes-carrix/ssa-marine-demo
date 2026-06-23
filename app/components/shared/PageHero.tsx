import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  title: string;
  backgroundImage: string;
  breadcrumbs?: BreadcrumbItem[];
};

export default function PageHero({
  title,
  backgroundImage,
  breadcrumbs = [],
}: PageHeroProps) {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="page-hero-title"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

      <div className="relative mx-auto max-w-ssa px-6 py-14 md:px-8 md:py-20">
        <div className="max-w-2xl text-white">
          <h1
            id="page-hero-title"
            className="font-display text-4xl font-bold md:text-5xl"
          >
            {title}
          </h1>

          {breadcrumbs.length > 0 ? (
            <nav aria-label="Breadcrumb" className="mt-3">
              <ol className="flex flex-wrap items-center gap-2 text-sm md:text-base">
                {breadcrumbs.map((item, index) => {
                  const isLast = index === breadcrumbs.length - 1;

                  return (
                    <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                     
{item.href && !isLast ? (
  <Link href={item.href}>
    {item.label}
  </Link>
) : (

                        <span aria-current={isLast ? "page" : undefined}>
                          {item.label}
                        </span>
                      )}

                      {!isLast ? <span aria-hidden="true">/</span> : null}
                    </li>
                  );
                })}
              </ol>
            </nav>
          ) : null}
        </div>
      </div>
    </section>
  );
}