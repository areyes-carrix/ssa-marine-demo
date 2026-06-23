export type HeroSlide = {
    id: string;
    image: string;
    title: string;
    description: string;
    href: string;
  };

  import { BASE_PATH } from "@/app/lib/base-path";
  const IMG = `${BASE_PATH}/ssa/home/assets/images/eco-slider-area-start`;
  
  export const HERO_SLIDES: HeroSlide[] = [
    {
      id: "cozumel",
      image: `${IMG}/slider-2.jpg`,
      title: "Puerto COZUMEL",
      description:
        "Su privilegiada ubicación dentro del Caribe mexicano y su incomparable belleza la mantienen como uno de los principales destinos de cruceros a nivel mundial.",
      href: "#",
    },
    {
      id: "lazaro-cardenas",
      image: `${IMG}/slider-3.jpg`,
      title: "Puerto LÁZARO CÁRDENAS",
      description:
        "El puerto del Pacífico mexicano más importante en manejo de automóviles.",
      href: "#",
    },
    {
      id: "manzanillo",
      image: `${IMG}/slider-4.jpg`,
      title: "Puerto MANZANILLO",
      description:
        "SSA Marine México opera la Terminal Especializada de Contenedores líder a nivel nacional.",
      href: "#",
    },
    {
      id: "progreso",
      image: `${IMG}/slider-5.jpg`,
      title: "Puerto PROGRESO",
      description:
        "Es la principal entrada a la Península de Yucatán, conocida por sus destinos únicos que atraen a turistas de todo el mundo.",
      href: "#",
    },
    {
      id: "tuxpan",
      image: `${IMG}/slider-6.jpg`,
      title: "Puerto TUXPAN",
      description:
        "El puerto más cercano a la zona centro del país, lo que significa grandes ahorros en costos logísticos. En donde SSA Marine México opera una de las terminales portuarias más modernas de Latino América, Tuxpan Port Terminal.",
      href: "#",
    },
    {
      id: "veracruz",
      image: `${IMG}/slider-7.jpg`,
      title: "Puerto VERACRUZ",
      description:
        "Puerto líder en movimiento de automóviles en el país. SSA Marine México brinda servicios especializados para la industria de vehículos terminados y de carga general.",
      href: "#",
    },
  ];