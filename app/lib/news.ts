export type NewsItem = {
    id: string;
    title: string;
    summary: string;
    href: string;
    date: string;
  };
  
  export const NEWS_ITEMS: NewsItem[] = [
    {
      id: "esr-2025",
      title:
        "SSA Marine México reafirma compromiso como Empresa Socialmente Responsable",
      summary:
        "La compañía fue reconocida por su compromiso con la responsabilidad social y el desarrollo sostenible en distintas terminales del país.",
      href: "#",
      date: "22 Mayo 2025",
    },
    {
      id: "infraestructura",
      title: "Inversiones continuas en infraestructura y tecnología",
      summary:
        "SSA Marine México continúa fortaleciendo la eficiencia operativa y la experiencia del cliente mediante inversiones estratégicas.",
      href: "#",
      date: "Actualidad",
    },
    {
      id: "puertos",
      title: "Presencia en los principales puertos mexicanos",
      summary:
        "La operación nacional abarca servicios para automóviles, carga general, contenedores y cruceros en puertos clave de México.",
      href: "#",
      date: "Actualidad",
    },
  ];