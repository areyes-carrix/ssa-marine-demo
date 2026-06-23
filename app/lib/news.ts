export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  href: string;
  date: string;
  image: string;
  category: string;
};
import { BASE_PATH } from "@/app/lib/base-path";

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "glovis-leader",
    title: "LAZARO CARDENAS",
    summary:
      "El Ro-Ro más grande del mundo arriba a la TEA. El pasado 30 de mayo de 2026, la Terminal Especializada de Automóviles recibió por primera vez al buque GLOVIS LEADER.",
    href: "#",
    date: "Actualidad",
    image: `${BASE_PATH}/ssa/home/assets/images/eco-single-about-image/about-1.webp`,
    category: "LAZARO CARDENAS",
  },
  {
    id: "corporativo-astom",
    title: "CORPORATIVO",
    summary:
      "Manuel Fernández Pérez asume la presidencia de ASTOM en una etapa clave para la asociación de terminales y operadores portuarios.",
    href: "#",
    date: "Actualidad",
    image: `${BASE_PATH}/ssa/home/assets/images/eco-single-about-image/about-2.webp`,
    category: "CORPORATIVO",
  },
  {
    id: "seguridad-identidad",
    title: "CORPORATIVO",
    summary:
      "Aviso importante de seguridad por suplantación de identidad. Se detectó la circulación de mensajes fraudulentos vía WhatsApp y Telegram.",
    href: "#",
    date: "Actualidad",
    image: `${BASE_PATH}/ssa/home/assets/images/eco-single-about-image/about-3.webp`,
    category: "CORPORATIVO",
  },
];