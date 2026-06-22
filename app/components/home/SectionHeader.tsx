import Image from "next/image";

type SectionHeaderProps = {
  id: string;
  lines: string[];
  greenLineIndexes?: number[];
  centered?: boolean;
  className?: string;
};

export default function SectionHeader({
  id,
  lines,
  greenLineIndexes = [],
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={[
        "grid items-start gap-4 md:gap-6",
        centered
          ? "grid-cols-[56px_minmax(0,1fr)_56px]"
          : "grid-cols-[56px_minmax(0,1fr)]",
        className,
      ].join(" ")}
    >
      <div className="flex justify-start pt-1">
        <Image
          src="/ssa/home/assets/images/misc/ship-icon.png"
          alt=""
          width={40}
          height={40}
          className="h-10 w-auto object-contain"
        />
      </div>

      <div className={centered ? "text-center" : "text-left"}>
        <h2
          id={id}
          className="font-display text-[2rem] font-light leading-none text-ssa-ink md:text-[2.8rem]"
        >
          {lines.map((line, index) => (
            <span
              key={`${id}-${index}`}
              className={
                greenLineIndexes.includes(index)
                  ? "block text-ssa-primary"
                  : "block text-ssa-ink"
              }
            >
              {line}
            </span>
          ))}
        </h2>
      </div>

      {centered ? <div aria-hidden="true" className="h-10 w-10" /> : null}
    </div>
  );
}