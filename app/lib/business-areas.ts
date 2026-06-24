export type BusinessArea = {
    id: string;
    title: string;
    description: string;
    image: string;
    alt: string;
  };
  import { BASE_PATH } from "@/app/lib/base-path";
  export const businessAreas: BusinessArea[] = [
    {
      id: "autos",
      title: "AUTOS",
      description:
        "La operación de autos requiere la mejor tecnología, por ello trabajamos con sistemas especializados para rastreo de unidades en tiempo real. Nuestros servicios incluyen recepción/entrega a camión y ferrocarril, lavado, etiquetado, colocación de accesorios, reparaciones menores y pintado.",
      image: `${BASE_PATH}/ssa/home/assets/images/eco-single-about-image/about-1.webp`,
      alt: "Operación portuaria de autos",
    },
    {
      id: "carga-general",
      title: "CARGA GENERAL",
      description:
        "Nos especializamos en manejo de bobinas de acero empleadas para la industria automotriz, placas, tubos y vigas de acero, tabaestaca, rollos de alambrón, carga proyecto, carga estática y más; brindando servicios de carga y descarga de buques multipropósito, recepción y entrega de mercancías, segregaciones especiales y etiquetado.",
      image: `${BASE_PATH}/ssa/home/assets/images/eco-single-about-image/about-2.webp`,
      alt: "Manejo de carga general y bobinas de acero",
    },
    {
      id: "contenedores",
      title: "CONTENEDORES",
      description:
        "Nuestras terminales son líderes en la industria, ofreciendo ventajas competitivas sobresalientes por su privilegiada ubicación, eficiencia en operaciones, tecnología e infraestructura de vanguardia y personal capacitado en las mejores terminales del mundo.",
      image: `${BASE_PATH}/ssa/home/assets/images/eco-single-about-image/about-3.webp`,
      alt: "Operación de contenedores en terminal marítima",
    },
    {
      id: "cruceros",
      title: "CRUCEROS",
      description:
        "La ubicación privilegiada y la incomparable belleza de los puertos en donde SSA Marine México recibe cruceros atraen a turistas de todo el mundo. Los centros comerciales de nuestras terminales son el lugar ideal para hacer compras, además de encontrar operadores de tours, restaurantes, renta de automóviles, entre otros.",
      image: `${BASE_PATH}/ssa/home/assets/images/eco-single-about-image/about-4.webp`,
      alt: "Terminal de cruceros en México",
    },
  ];