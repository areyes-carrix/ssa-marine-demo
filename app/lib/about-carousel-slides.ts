export type AboutCarouselSlide = {
    id: string;
    image: string;
    alt: string;
  };

  import { BASE_PATH } from "@/app/lib/base-path";
  
  export const aboutCarouselSlides: AboutCarouselSlide[] = [
    {
      id: "about-1",
      image: `${BASE_PATH}/ssa/home/assets/images/eco-single-about-image/about-1.webp`,
      alt: "Bobinas de acero almacenadas en terminal",
    },
    {
      id: "about-2",
      image:  `${BASE_PATH}/ssa/home/assets/images/eco-single-about-image/about-2.webp`,
      alt: "Instalaciones y operaciones portuarias",
    },
    {
      id: "about-3",
      image: `${BASE_PATH}/ssa/home/assets/images/eco-single-about-image/about-3.webp`,
      alt: "Infraestructura logística y marítima",
    },
    {
      id: "about-4",
      image: `${BASE_PATH}/ssa/home/assets/images/eco-single-about-image/about-4.webp`,
      alt: "Operaciones de SSA Marine México",
    },
  ];