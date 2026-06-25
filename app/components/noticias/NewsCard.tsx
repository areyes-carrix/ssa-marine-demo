import Image from "next/image";

type NewsCardProps = {
  title: string;
  date: string;
  image: string;
};

export default function NewsCard({
  title,
  date,
  image,
}: NewsCardProps) {
  return (
    <article className="bg-white">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="pt-4">
        <h2 className="font-display text-[22px] font-medium leading-tight text-ssa-ink">
          {title}
        </h2>

        <p className="mt-3 text-sm font-medium text-ssa-primary">
          {date}
        </p>
      </div>
    </article>
  );
}