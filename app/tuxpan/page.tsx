import PageHero from "@/app/components/shared/PageHero";
import PortOverviewSection from "@/app/components/instalaciones/PortOverviewSection";
import TerminalInfoSection from "@/app/components/instalaciones/TerminalInfoSection";
import PortGallery from "@/app/components/instalaciones/PortGallery";
import { tuxpanData } from "@/app/lib/tuxpan";

export default function TuxpanPage() {
  return (
    <main>
      <PageHero
        title={tuxpanData.hero.title}
        backgroundImage={tuxpanData.hero.backgroundImage}
        breadcrumbs={tuxpanData.hero.breadcrumbs}
      />

      <PortOverviewSection
        title={tuxpanData.overview.title}
        description={tuxpanData.overview.description}
        secondaryText={tuxpanData.overview.secondaryText}
        additionalText={tuxpanData.overview.additionalText}
      />

      {tuxpanData.informationSections.length > 0 && (
        <TerminalInfoSection
          sections={tuxpanData.informationSections}
        />
      )}

      <PortGallery
        images={tuxpanData.gallery}
      />
    </main>
  );
}