import { WHY_CHOOSE_US } from "@/app/lib/why-choose-us";

export default function WhyChooseUsSection() {
  return (
    <section
      className="bg-ssa-surface py-section"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="mx-auto max-w-ssa px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ssa-primary">
          Por qué elegirnos
        </p>

        <h2
          id="why-choose-us-heading"
          className="mt-3 font-display text-3xl font-bold text-ssa-ink md:text-5xl"
        >
          La experiencia nos respalda
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {WHY_CHOOSE_US.map((item) => (
            <article
              key={item.id}
              className="border border-black/5 bg-white p-8 shadow-[0_6px_18px_rgba(0,0,0,0.05)]"
            >
              <div className="mb-5 h-1 w-14 bg-ssa-primary" aria-hidden="true" />
              <h3 className="font-display text-2xl font-semibold text-ssa-ink">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-ssa-ink/80">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}