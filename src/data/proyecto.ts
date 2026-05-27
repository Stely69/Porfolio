import GEDAC from "@/assets/images/GEDAC.png";
import Distribuidora from "@/assets/images/Distribuidora.png";
import BotGames from "@/assets/images/GamerPower.jpg";

export const proyectos = [
  {
    titulo: " Sistema de Gestión de Activos",
    descripcion: "Una página web para gestionar activos de una empresa.",
    imagen: GEDAC,
    tecnologias: ["PHP", "TailwindCSS", "HTML"],
    demo: "#",
    codigo: "https://github.com/Stely69/mesa-de-ayuda"
  },
  {
    titulo: "Ecommerce Distribuidora",
    descripcion: "Una plataforma de comercio electrónico para una distribuidora.",
    imagen: Distribuidora,
    tecnologias: ["React", "Hono", "TailwindCSS", "TypeScript", "SQLite"],
    demo: "https://damigofeng.dogalyir.workers.dev",
  },
  {
    titulo: "Bot de Telegram",
    descripcion: "Un bot de Telegram para notificar videojuegos gratis.",
    imagen: BotGames,
    tecnologias: ["typescript", "API"],
    demo: "https://t.me/gamerpowerdogalyir",
  },
  {
    titulo: "Bot de Telegram",
    descripcion: "Un bot de Telegram para llevar un control de horas laborales.",
    imagen: Distribuidora,
    tecnologias: ["typescript", "API"],
    demo: "https://t.me/Work_times24_bot",
  }
];
