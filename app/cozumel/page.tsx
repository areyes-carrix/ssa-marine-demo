import PageHero from "@/app/components/shared/PageHero";
import PortOverviewSection from "@/app/components/instalaciones/PortOverviewSection";
import TerminalInfoSection from "@/app/components/instalaciones/TerminalInfoSection";
import PortGallery from "@/app/components/instalaciones/PortGallery";
import { cozumelData } from "@/app/lib/cozumel";

export default function CozumelPage() {
  return (
    <main>
      <PageHero
        title={cozumelData.hero.title}
        backgroundImage={cozumelData.hero.backgroundImage}
        breadcrumbs={cozumelData.hero.breadcrumbs}
      />

      <PortOverviewSection
        title={cozumelData.overview.title}
        description={cozumelData.overview.description}
        secondaryText={cozumelData.overview.secondaryText}
        additionalText={cozumelData.overview.additionalText}
      />

      <TerminalInfoSection
        sections={cozumelData.informationSections}
      />

      <PortGallery
        images={cozumelData.gallery}
      />
    </main>
  );
}