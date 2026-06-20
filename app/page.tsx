import Hero from "@/app/components/home/Hero";
import AboutSection from "@/app/components/home/AboutSection";
import ServicesSection from "@/app/components/home/ServicesSection";
import WhyChooseUsSection from "@/app/components/home/WhyChooseUsSection";
import StatsSection from "@/app/components/home/StatsSection";
import NewsSection from "@/app/components/home/NewsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <StatsSection />
      <NewsSection />
    </>
  );
}