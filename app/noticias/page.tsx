import PageHero from "@/app/components/shared/PageHero";
import NewsGrid from "@/app/components/noticias/NewsGrid";
import { noticias } from "@/app/lib/noticias";

export default function NoticiasPage() {
  return (
    <main className="bg-[#f3f3f3]">
      <PageHero
        title="Noticias"
        backgroundImage="/ssa/noticias/assets/images/eco-breadcum-area-start/breadcum-not.jpg"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Noticias" },
        ]}
      />

      <NewsGrid items={noticias} />
    </main>
  );
}