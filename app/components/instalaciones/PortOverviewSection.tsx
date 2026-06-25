type PortOverviewSectionProps = {
    title: string;
    description: string;
    secondaryText: string;
    additionalText: string;
  };
  
  export default function PortOverviewSection({
    title,
    description,
    secondaryText,
    additionalText,
  }: PortOverviewSectionProps) {
    return (
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-ssa px-6 md:px-8">
        <div className="max-w-5xl">
            <h2 className="font-display text-4xl font-medium text-ssa-ink md:text-5xl">
              {title}
            </h2>
  
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-700">
              <p>{description}</p>
  
              <p>{secondaryText}</p>
  
              <p>{additionalText}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }