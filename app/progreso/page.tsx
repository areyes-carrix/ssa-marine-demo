import PageHero from "@/app/components/shared/PageHero";
import PortOverviewSection from "@/app/components/instalaciones/PortOverviewSection";
import TerminalInfoSection from "@/app/components/instalaciones/TerminalInfoSection";
import PortGallery from "@/app/components/instalaciones/PortGallery";
import { progresoData } from "@/app/lib/progreso";

export default function ProgresoPage() {
  return (
    <main>
      <PageHero
        title={progresoData.hero.title}
        backgroundImage={progresoData.hero.backgroundImage}
        breadcrumbs={progresoData.hero.breadcrumbs}
      />

      <PortOverviewSection
        title={progresoData.overview.title}
        description={progresoData.overview.description}
        secondaryText={progresoData.overview.secondaryText}
        additionalText={progresoData.overview.additionalText}
      />

      {progresoData.informationSections.length > 0 && (
        <TerminalInfoSection
          sections={progresoData.informationSections}
        />
      )}

      <PortGallery
        images={progresoData.gallery}
      />
    </main>
  );
}