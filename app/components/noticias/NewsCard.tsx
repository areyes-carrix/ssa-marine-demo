type NewsCardProps = {
    title: string;
    date: string;
  };
  
  export default function NewsCard({
    title,
    date,
  }: NewsCardProps) {
    return (
      <article className="bg-white">
       <div className="relative aspect-[16/9] overflow-hidden bg-neutral-200">
  <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-400" />

  <div className="absolute inset-0 flex items-center justify-center">
    <span className="text-sm font-medium uppercase tracking-widest text-white/80">
      Noticias
    </span>
  </div>
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