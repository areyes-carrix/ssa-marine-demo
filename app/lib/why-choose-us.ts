export type WhyChooseUsItem = {
  id: string;
  title: string;
  description: string;
  icon: "experience" | "focus" | "infrastructure";
};

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "experiencia",
    title: "LA EXPERIENCIA NOS RESPALDA",
    description:
      "Contamos con más de 70 años de experiencia en la industria portuaria mundial y más de 25 años en México.",
    icon: "experience",
  },
  {
    id: "cliente",
    title: "ENFOQUE EN EL CLIENTE",
    description:
      "Operamos con sistemas amigables, desarrollados a la medida de las necesidades de nuestros clientes.",
    icon: "focus",
  },
  {
    id: "infraestructura",
    title: "INFRAESTRUCTURA DE VANGUARDIA",
    description:
      "Inversiones en tecnología, infraestructura y recursos humanos nos han acompañado a través de los años.",
    icon: "infrastructure",
  },
];