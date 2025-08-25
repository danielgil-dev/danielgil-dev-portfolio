// src/data/projects.ts
import Neo from "../assets/images/NeoAvatar.png";
import Ecolink from "../assets/images/MookupEcolink.png"

export const projects = [
  {
    title: "Ecolink",
    image: Ecolink,
    description: "Proyecto Final de Grado: EcoLink, una plataforma web que conecta startups con empresas mediante un marketplace, perfiles personalizados y funciones sociales.",
    tags: [
      {
        name: "Angular",
        icon: "AngularIcon"
      },
      {
        name: "Spring Boot",
        icon: "SpringBootIcon"
      }
    ],
    githubLink: "https://github.com/danielgil-dev/ecolink",
    demoLink: "https://ecolink-demo.netlify.app"
  },
  {
    title: "Portfolio Personal",
    image: Neo,
    description: "Portfolio personal desarrollado con Astro y Tailwind CSS para mostrar mis proyectos y habilidades como desarrollador full-stack.",
    tags: [
      {
        name: "Astro",
        icon: "AstroIcon"
      },
      {
        name: "Tailwind CSS",
        icon: "TailwindIcon"
      }
    ],
    githubLink: "https://github.com/danielgil-dev/portfolio",
    demoLink: "https://danielgil.dev"
  }
];