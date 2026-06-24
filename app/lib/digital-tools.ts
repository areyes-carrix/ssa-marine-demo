export type DigitalTool = {
    id: string;
    title: string;
    image: string;
    alt: string;
    subtitle?: string;
  };
  
  import { BASE_PATH } from "@/app/lib/base-path";
  export const digitalTools: DigitalTool[] = [
    {
      id: "presentacion-corporativa",
      title: "2024 SSA MARINE MÉXICO PRESENTACIÓN CORPORATIVA",
      image: `${BASE_PATH}/ssa/about/assets/images/eco-single-about-image/presentacion.JPG`,
      alt: "Presentación corporativa de SSA Marine México",
    },
    {
      id: "catalogo-servicios",
      title: "CATÁLOGO DE SERVICIOS NAVIEROS",
      image: `${BASE_PATH}/ssa/about/assets/images/eco-single-about-image/servicios.jpg`,
      alt: "Catálogo de servicios navieros",
    },
    {
      id: "informe-sostenibilidad",
      title: "INFORME DE SOSTENIBILIDAD",
      image: `${BASE_PATH}/ssa/about/assets/images/eco-single-about-image/InformeSostenibilidad.jpg`,
      alt: "Informe de sostenibilidad",
    },
    {
      id: "tutoriales",
      title: "TUTORIALES",
      subtitle: "Tutoriales Portal de Servicios",
      image: `${BASE_PATH}/ssa/about/assets/images/eco-single-about-image/TUTORIALES_WEBSITE.jpg`,
      alt: "Tutoriales del portal de servicios",
    },
  ];