import PageHero from "@/app/components/shared/PageHero";
import PortOverviewSection from "@/app/components/instalaciones/PortOverviewSection";
import TerminalInfoSection from "@/app/components/instalaciones/TerminalInfoSection";
import PortGallery from "@/app/components/instalaciones/PortGallery";
import { manzanilloData } from "@/app/lib/manzanillo";

export default function ManzanilloPage() {
  return (
    <main>
      <PageHero
        title={manzanilloData.hero.title}
        backgroundImage={manzanilloData.hero.backgroundImage}
        breadcrumbs={manzanilloData.hero.breadcrumbs}
      />

      <PortOverviewSection
        title={manzanilloData.overview.title}
        description={manzanilloData.overview.description}
        secondaryText={manzanilloData.overview.secondaryText}
        additionalText={manzanilloData.overview.additionalText}
      />

      {manzanilloData.informationSections.length > 0 && (
        <TerminalInfoSection
          sections={manzanilloData.informationSections}
        />
      )}

      <PortGallery
        images={manzanilloData.gallery}
      />
    </main>
  );
}