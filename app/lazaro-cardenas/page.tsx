import PageHero from "@/app/components/shared/PageHero";
import PortOverviewSection from "@/app/components/instalaciones/PortOverviewSection";
import TerminalInfoSection from "@/app/components/instalaciones/TerminalInfoSection";
import PortGallery from "@/app/components/instalaciones/PortGallery";
import { lazaroCardenasData } from "@/app/lib/lazaro-cardenas";

export default function LazaroCardenasPage() {
  return (
    <main>
      <PageHero
        title={lazaroCardenasData.hero.title}
        backgroundImage={lazaroCardenasData.hero.backgroundImage}
        breadcrumbs={lazaroCardenasData.hero.breadcrumbs}
      />

      <PortOverviewSection
        title={lazaroCardenasData.overview.title}
        description={lazaroCardenasData.overview.description}
        secondaryText={lazaroCardenasData.overview.secondaryText}
        additionalText={lazaroCardenasData.overview.additionalText}
      />

      {lazaroCardenasData.informationSections.length > 0 && (
        <TerminalInfoSection
          sections={lazaroCardenasData.informationSections}
        />
      )}

      <PortGallery
        images={lazaroCardenasData.gallery}
      />
    </main>
  );
}