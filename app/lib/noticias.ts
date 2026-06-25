import { BASE_PATH } from "@/app/lib/base-path";
export type Noticia = {
    id: string;
    title: string;
    date: string;
    image: string;
  };
  
  export const noticias: Noticia[] = [
    {
      id: "ro-ro-tea",
      title: "El Ro-Ro más grande del mundo arriba a la TEA",
      date: "01/06/2026",
      image:  `${BASE_PATH}/ssa/noticias/assets/images/eco-blog-area-start/embedded-1.png`,
    },
    {
      id: "manuel-fernandez-astom",
      title: "Manuel Fernández Pérez asume la presidencia de ASTOM",
      date: "12/05/2026",
      image:  `${BASE_PATH}/ssa/noticias/assets/images/eco-blog-area-start/embedded-2.png`,
    },
    {
      id: "aviso-suplantacion",
      title: "Aviso importante de seguridad | Suplantación de identidad",
      date: "05/05/2026",
      image:  `${BASE_PATH}/ssa/noticias/assets/images/eco-blog-area-start/embedded-3.png`,
    },
    {
      id: "seatrade-veracruz",
      title:
        "SSA Marine México impulsa el posicionamiento de Veracruz en Seatrade Cruise Global 2026",
      date: "21/04/2026",
      image:  `${BASE_PATH}/ssa/noticias/assets/images/eco-blog-area-start/embedded-4.png`,
    },
    {
      id: "incendios-forestales",
      title:
        "SSA Marine México, IMADES y CONAFOR inician Campaña de Incendios Forestales 2026",
      date: "09/04/2026",
      image:  `${BASE_PATH}/ssa/noticias/assets/images/eco-blog-area-start/embedded-5.png`,
    },
    {
      id: "energia-solar",
      title:
        "SSA Marine México impulsa la sostenibilidad con energía solar en Manzanillo",
      date: "20/03/2026",
      image:  `${BASE_PATH}/ssa/noticias/assets/images/eco-blog-area-start/embedded-6.png`,
    },
    {
      id: "great-place-to-work",
      title:
        "Carrix obtiene la certificación Great Place to Work® 2026 en cinco países",
      date: "03/03/2026",
      image:  `${BASE_PATH}/ssa/noticias/assets/images/eco-blog-area-start/embedded-7.png`,
    },
    {
      id: "distintivo-esr",
      title:
        "SSA Marine México renueva su Distintivo ESR, reafirmando su compromiso con la responsabilidad social",
      date: "27/02/2026",
      image:  `${BASE_PATH}/ssa/noticias/assets/images/eco-blog-area-start/embedded-8.png`,
    },
  ];