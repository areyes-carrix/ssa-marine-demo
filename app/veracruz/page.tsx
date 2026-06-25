import PageHero from "@/app/components/shared/PageHero";
import PortOverviewSection from "@/app/components/instalaciones/PortOverviewSection";
import TerminalInfoSection from "@/app/components/instalaciones/TerminalInfoSection";
import PortGallery from "@/app/components/instalaciones/PortGallery";
import { veracruzData } from "@/app/lib/veracruz";

export default function VeracruzPage() {
  return (
    <main>
      <PageHero
        title={veracruzData.hero.title}
        backgroundImage={veracruzData.hero.backgroundImage}
        breadcrumbs={veracruzData.hero.breadcrumbs}
      />

      <PortOverviewSection
        title={veracruzData.overview.title}
        description={veracruzData.overview.description}
        secondaryText={veracruzData.overview.secondaryText}
        additionalText={veracruzData.overview.additionalText}
      />

      {veracruzData.informationSections.length > 0 && (
        <TerminalInfoSection
          sections={veracruzData.informationSections}
        />
      )}

      <PortGallery
        images={veracruzData.gallery}
      />
    </main>
  );
}