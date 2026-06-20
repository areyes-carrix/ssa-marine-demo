export type StatItem = {
    id: string;
    value: string;
    label: string;
    icon: string;
  };
  
  export const STATS: StatItem[] = [
    {
      id: "autos",
      value: "620K",
      label: "Capacidad de autos",
      icon: "/ssa/home/assets/images/eco-project-counter-area-start/Ico-autos.png",
    },
    {
      id: "general",
      value: "Carga",
      label: "Carga general",
      icon: "/ssa/home/assets/images/eco-project-counter-area-start/Ico-general.png",
    },
    {
      id: "pasajeros",
      value: "Cruceros",
      label: "Pasajeros",
      icon: "/ssa/home/assets/images/eco-project-counter-area-start/Ico-pasajeros.png",
    },
    {
      id: "teus",
      value: "TEUs",
      label: "Contenedores",
      icon: "/ssa/home/assets/images/eco-project-counter-area-start/Ico-TEUs.png",
    },
  ];