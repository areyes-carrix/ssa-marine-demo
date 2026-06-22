import { WHY_CHOOSE_US } from "@/app/lib/why-choose-us";
import SectionHeader from "@/app/components/home/SectionHeader";

function Icon({ kind }: { kind: "experience" | "focus" | "infrastructure" }) {
  if (kind === "experience") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="4" y="4" width="16" height="16" rx="1.5" />
        <path d="M8 8h2M12 8h2M16 8h0M8 12h2M12 12h2M16 12h0M8 16h2M12 16h2" />
      </svg>
    );
  }

  if (kind === "focus") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="11" cy="11" r="6.5" />
        <path d="M16 16l4 4" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 16c4-2 6-5 8-9 2 4 4 7 8 9" />
      <path d="M6 16h12" />
      <path d="M10 7V5h4v2" />
      <path d="M8 19h8" />
    </svg>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section
      className="bg-[#efefef] py-12 sm:py-14 md:py-20"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="mx-auto max-w-ssa px-6">
        <SectionHeader
          id="why-choose-us-heading"
          lines={["POR QUÉ ELEGIRNOS"]}
          centered={true}
          className="mb-8 sm:mb-9 md:mb-10"
        />

        <div className="grid gap-5 sm:gap-6 md:grid-cols-3 md:gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <article
              key={item.id}
              className="rounded-sm border border-[#e8d7d7] bg-white p-4 sm:p-5 md:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-md bg-ssa-primary sm:h-18 sm:w-18 md:h-20 md:w-20">
                <Icon kind={item.icon} />
              </div>

              <h3 className="mt-5 text-center text-[1rem] font-light uppercase leading-snug text-ssa-ink sm:text-[1.1rem] md:text-[1.3rem]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-ssa-ink/70 sm:text-[0.95rem] sm:leading-7 md:mt-6 md:leading-8">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}