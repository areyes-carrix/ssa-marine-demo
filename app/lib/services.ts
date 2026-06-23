export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

import { BASE_PATH } from "@/app/lib/base-path";

export const SERVICES: ServiceItem[] = [
  {
    id: "autos",
    title: "AUTOS",
    description:
      "La operación de autos requiere la mejor tecnología, por ello trabajamos con sistemas especializados para rastreo de unidades en tiempo real.",
      image: `${BASE_PATH}/ssa/home/assets/images/eco-single-about-image/about-1.jpg`,
  },
  {
    id: "carga-general",
    title: "CARGA GENERAL",
    description:
      "Nos especializamos en manejo de bobinas de acero empleadas para la industria automotriz, placas, tubos y vigas de acero, tablaestaca, rollos de alambrón, carga proyecto y carga estática.",
      image: `${BASE_PATH}/ssa/home/assets/images/eco-single-about-image/about-2.jpg`,
  },
  {
    id: "contenedores",
    title: "CONTENEDORES",
    description:
      "Nuestras terminales son líderes en la industria, ofreciendo ventajas competitivas por su privilegiada ubicación, eficiencia en operaciones, tecnología e infraestructura de vanguardia.",
    image: `${BASE_PATH}/ssa/home/assets/images/eco-single-about-image/about-3.jpg`,
  },
  {
    id: "cruceros",
    title: "CRUCEROS",
    description:
      "La ubicación privilegiada y la incomparable belleza de los puertos atraen a turistas de todo el mundo.",
    image:`${BASE_PATH}/ssa/home/assets/images/eco-single-about-image/about-4.jpg`,
  },
];