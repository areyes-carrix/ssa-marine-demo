import CompanyCards from "@/app/components/nosotros/CompanyCards";
import BusinessAreasSection from "@/app/components/nosotros/BusinessAreasSection";
import DigitalToolsSection from "@/app/components/nosotros/DigitalToolsSection";
import WelcomeSection from "@/app/components/nosotros/WelcomeSection";
import PageHero from "@/app/components/shared/PageHero";
import { aboutCompanyCards } from "@/app/lib/about-company-cards";
import { aboutCarouselSlides } from "@/app/lib/about-carousel-slides";
import { businessAreas } from "@/app/lib/business-areas";
import { digitalTools } from "@/app/lib/digital-tools";
import { BASE_PATH } from "@/app/lib/base-path";

export default function NosotrosPage() {
  return (
    <main className="bg-[#f3f3f3]">
      <PageHero
        title="Nosotros"
       backgroundImage={`${BASE_PATH}/ssa/about/assets/images/eco-breadcum-area-start/breadcum-nos.jpg`}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Nosotros" },
        ]}
      />

      <CompanyCards items={aboutCompanyCards} />
      <WelcomeSection slides={aboutCarouselSlides} />
      <BusinessAreasSection items={businessAreas} />
      <DigitalToolsSection items={digitalTools} />
    </main>
  );
}