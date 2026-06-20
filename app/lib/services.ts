export type ServiceItem = {
    id: string;
    title: string;
    description: string;
    image: string;
  };
  
  export const SERVICES: ServiceItem[] = [
    {
      id: "autos",
      title: "Autos",
      description:
        "La operación de autos requiere la mejor tecnología, por ello trabajamos con sistemas especializados para rastreo de unidades en tiempo real. Nuestros servicios incluyen recepción y entrega a camión y ferrocarril, lavado, etiquetado, colocación de accesorios, reparaciones menores y pintado.",
      image: "/ssa/home/assets/images/eco-single-about-image/about-1.jpg",
    },
    {
      id: "carga-general",
      title: "Carga General",
      description:
        "Nos especializamos en manejo de bobinas de acero, placas, tubos y vigas de acero, tablaestaca, rollos de alambrón, carga proyecto y carga estática; brindando servicios de carga y descarga de buques multipropósito, recepción y entrega de mercancías, segregaciones especiales y etiquetado.",
      image: "/ssa/home/assets/images/eco-single-about-image/about-2.jpg",
    },
    {
      id: "contenedores",
      title: "Contenedores",
      description:
        "Nuestras terminales son líderes en la industria, ofreciendo ventajas competitivas por su privilegiada ubicación, eficiencia en operaciones, tecnología e infraestructura de vanguardia y personal capacitado.",
      image: "/ssa/home/assets/images/eco-single-about-image/about-3.jpg",
    },
    {
      id: "cruceros",
      title: "Cruceros",
      description:
        "La ubicación privilegiada y la incomparable belleza de los puertos atraen a turistas de todo el mundo. Las terminales ofrecen espacios comerciales, operadores de tours, restaurantes y renta de automóviles.",
      image: "/ssa/home/assets/images/eco-single-about-image/about-4.jpg",
    },
  ];