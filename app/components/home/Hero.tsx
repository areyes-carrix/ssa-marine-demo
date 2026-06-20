import { HERO_SLIDES } from "@/app/lib/hero-slides";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return <HeroCarousel slides={HERO_SLIDES} />;
}