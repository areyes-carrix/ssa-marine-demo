type InformationSection = {
    title: string;
    items: string[];
  };
  
  type TerminalInfoSectionProps = {
    sections: InformationSection[];
  };
  
  export default function TerminalInfoSection({
    sections,
  }: TerminalInfoSectionProps) {
    return (
      <section className="bg-[#f7f7f7] py-14 md:py-20">
        <div className="mx-auto max-w-ssa px-6 md:px-8">
          <h2 className="mb-10 font-display text-3xl font-medium text-ssa-ink md:text-4xl">
            Terminal de Cruceros
          </h2>
  
          <div className="grid gap-8 md:grid-cols-3">
            {sections.map((section) => (
              <article
                key={section.title}
                className="border border-[#e5e5e5] bg-white p-8"
              >
                <h3 className="mb-6 font-display text-2xl font-medium text-[#999999]">
                  {section.title}
                </h3>
  
                <ul className="space-y-3 text-slate-700">
                  {section.items.map((item) => (
                   
<li
  key={item}
  className="flex gap-3 leading-relaxed text-slate-700"
>
  <span className="mt-[2px] text-[#51A120]">
    ❯
  </span>

  <span>{item}</span>
</li>

                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }