import PageHero from "@/app/components/shared/PageHero";
import NewsGrid from "@/app/components/noticias/NewsGrid";
import { noticias } from "@/app/lib/noticias";
import { BASE_PATH } from "@/app/lib/base-path";

export default function NoticiasPage() {
  return (
    <main className="bg-[#f3f3f3]">
      <PageHero
        title="Noticias"
        backgroundImage={`${BASE_PATH}/ssa/noticias/assets/images/eco-breadcum-area-start/breadcum-not.webp`}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Noticias" },
        ]}
      />

      <NewsGrid items={noticias} />
    </main>
  );
}