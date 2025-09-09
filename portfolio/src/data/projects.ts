// src/data/projects.ts
import Neo from "../assets/images/NeoAvatar.png";
import Ecolink from "../assets/images/MookupEcolink.png"
import Clarity from "../assets/images/MookupClarity.png"

export const projects = [
  {
    title: "Ecolink",
    image: Ecolink,
    description:" Proyecto Final de Grado: una plataforma web que conecta startups sostenibles con empresas a través de un marketplace, perfiles personalizados, funciones sociales y una IA que ayuda a optimizar los perfiles de usuario.",
    tags: [
      {
        name: "Angular",
        icon: "AngularIcon"
      },
      {
        name: "Spring Boot",
        icon: "SpringBootIcon"
      },
      {
        name: "Docker",
        icon: "DockerIcon"
      },
      {
        name: "Bootstrap",
        icon: "BootstrapIcon"
      }
    ],
    githubLink: "https://github.com/danielgil-dev/ecolink-backend-daniel",
    demoLink: ""
  },
  {
    title: "Portfolio Personal",
    image: Neo,
    description: "Portfolio personal desarrollado con un diseño minimalista y responsive, donde muestro mis proyectos, experiencia y habilidades de forma clara y profesional.",
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
  },
  {
     title: "Clarity",
    image: Clarity,
    description: "Clarity es una tienda online con un enfoque minimalista, donde desarrollé funcionalidades de gestión de usuarios, autenticación, carrito de compras y un panel de administración para productos.",
    tags: [
      {
        name: "Spring Boot",
        icon: "SpringBootIcon"
      },
      {
        name: "Bootstrap",
        icon: "BootstrapIcon"
      }
    ],
    githubLink: "https://github.com/danielgil-dev/claritySpring",
    demoLink: ""
  }
];