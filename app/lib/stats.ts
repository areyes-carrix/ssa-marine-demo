export type StatItem = {
  id: string;
  value: string;
  label: string;
  icon: string;
};

export const STATS: StatItem[] = [
  {
    id: "autos",
    value: "1.2",
    label: "MILLONES DE AUTOS",
    icon: "/ssa/home/assets/images/eco-project-counter-area-start/Ico-autos.png",
  },
  {
    id: "cruceros",
    value: "2",
    label: "MILLONES DE PASAJEROS DE CRUCEROS",
    icon: "/ssa/home/assets/images/eco-project-counter-area-start/Ico-pasajeros.png",
  },
  {
    id: "carga-general",
    value: "186",
    label: "MIL TONELADAS DE CARGA GENERAL",
    icon: "/ssa/home/assets/images/eco-project-counter-area-start/Ico-general.png",
  },
  {
    id: "teus",
    value: "2",
    label: "MILLONES DE TEUS",
    icon: "/ssa/home/assets/images/eco-project-counter-area-start/Ico-TEUs.png",
  },
];