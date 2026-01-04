import { Locale } from "./site";

export type Experience = {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
  tech: string[];
};

export type Content = {
  nav: {
    home: string;
    about: string;
    work: string;
    writing: string;
    contact: string;
    languageLabel: string;
  };
  hero: {
    heading: string;
    subheading: string;
    summary: string;
    ctaPrimary: string;
    ctaSecondary: string;
    photoAlt: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  work: {
    title: string;
    subtitle: string;
    experiences: Experience[];
    logosHeading: string;
  };
  writing: {
    title: string;
    intro: string;
    fallback: string;
    button: string;
    readMore: string;
  };
  contact: {
    title: string;
    intro: string;
    emailLabel: string;
    linksLabel: string;
  };
  footer: {
    rights: string;
    quickLinks: string;
  };
};

export const content: Record<Locale, Content> = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      work: "Experiencia",
      writing: "Escritura",
      contact: "Contacto",
      languageLabel: "ES",
    },
    hero: {
      heading: "Jorge Mendoza",
      subheading: "Arquitectura de Datos & IA · Liderazgo Analítico",
      summary:
        "Lidero plataformas de datos y equipos que convierten información en decisiones ejecutivas. Combino visión estratégica con ejecución técnica para acelerar productos, analítica y automatización.",
      ctaPrimary: "Hablemos",
      ctaSecondary: "Ver publicaciones",
      photoAlt: "Retrato de Jorge Mendoza",
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Soy Jorge Mendoza Rivilla, ingeniero y líder de datos enfocado en crear bases sólidas para la toma de decisiones y la innovación con IA.",
        "He construido y dirigido equipos de analítica y datos, desde plataformas cloud y modelado semántico hasta productos que llegan a negocio.",
        "Mi enfoque es pragmático: diseño arquitecturas que escalan, limpio la complejidad organizacional y aseguro entregables con impacto medible.",
        "Disfruto trabajar cerca de ejecutivos y equipos técnicos, conectando estrategia con hojas de ruta accionables.",
      ],
    },
    work: {
      title: "Experiencia",
      subtitle: "Trayectoria con impacto",
      logosHeading: "Experiencia con",
      experiences: [
        {
          company: "XTRIM",
          role: "Head of Data & Analytics",
          dates: "2022 - Actualidad",
          bullets: [
            "Diseñé la plataforma de datos unificada para producto, operaciones y finanzas, acelerando lanzamientos y reporting ejecutivo",
            "Construí el equipo de datos multidisciplinario (ingeniería, analítica, BI) y establecí gobierno, SLAs y estándares de calidad",
            "Implementé casos de IA aplicada (recomendaciones, scoring y automatización) reduciendo tiempos de respuesta y costos operativos",
          ],
          tech: ["Databricks", "dbt", "Airflow", "Power BI", "Azure"],
        },
        {
          company: "MAPFRE Ecuador",
          role: "Systems Analyst / Transformación Digital",
          dates: "2019 - 2022",
          bullets: [
            "Lideré iniciativas de transformación digital con foco en integraciones y modernización de procesos core",
            "Diseñé y ejecuté tableros ejecutivos y flujos ETL que redujeron tiempos de reporte de semanas a horas",
            "Coordiné squads multifuncionales para entregar releases frecuentes con trazabilidad y pruebas automatizadas",
          ],
          tech: ["SQL Server", "Power BI", "Azure DevOps", "API REST"],
        },
        {
          company: "Righttek / Claro Ecuador",
          role: "Software Engineer (Consulting)",
          dates: "2017 - 2019",
          bullets: [
            "Desarrollé software de soporte a operaciones y automatización de procesos de red",
            "Integré fuentes heterogéneas (APIs, SOAP, bases transaccionales) para visibilidad de performance",
            "Implementé pipelines de datos y monitoreo que mejoraron tiempos de diagnóstico",
          ],
          tech: ["Java", "Spring", "PostgreSQL", "Linux"],
        },
      ],
    },
    writing: {
      title: "Escritura",
      intro:
        "Comparto ideas sobre datos, analítica y la aplicación práctica de IA. Aquí tienes las últimas publicaciones en Substack.",
      fallback: "No pude cargar el feed ahora mismo. Puedes leer todas las publicaciones directamente en Substack.",
      button: "Ir a Substack",
      readMore: "Leer en Substack",
    },
    contact: {
      title: "Contacto",
      intro:
        "Si buscas apoyo en arquitectura de datos, analítica o proyectos de IA aplicada, será un gusto conversar.",
      emailLabel: "Correo directo",
      linksLabel: "Otras formas de conectar",
    },
    footer: {
      rights: "Todos los derechos reservados",
      quickLinks: "Enlaces",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      work: "Work",
      writing: "Writing",
      contact: "Contact",
      languageLabel: "EN",
    },
    hero: {
      heading: "Jorge Mendoza",
      subheading: "Data & AI Architecture · Analytics Leadership",
      summary:
        "I build data platforms and teams that turn information into executive-grade decisions. Strategic vision with hands-on execution to accelerate products, analytics, and automation.",
      ctaPrimary: "Contact",
      ctaSecondary: "See writing",
      photoAlt: "Portrait of Jorge Mendoza",
    },
    about: {
      title: "About",
      paragraphs: [
        "I'm Jorge Mendoza Rivilla, a data leader focused on solid foundations for decision-making and AI-driven products.",
        "I've built and led analytics and data teams—from cloud platforms and semantic modeling to products that ship to the business.",
        "My approach is pragmatic: clear architectures that scale, reduced organizational friction, and deliverables with measurable impact.",
        "I enjoy working close to executives and technical squads, turning strategy into actionable roadmaps.",
      ],
    },
    work: {
      title: "Work",
      subtitle: "Credibility through delivery",
      logosHeading: "Experience with",
      experiences: [
        {
          company: "XTRIM",
          role: "Head of Data & Analytics",
          dates: "2022 - Present",
          bullets: [
            "Designed the unified data platform for product, operations, and finance, accelerating launches and executive reporting",
            "Built the multidisciplinary data team (engineering, analytics, BI) with governance, SLAs, and quality standards",
            "Implemented applied AI use cases (recommendations, scoring, automation) reducing response times and operating costs",
          ],
          tech: ["Databricks", "dbt", "Airflow", "Power BI", "Azure"],
        },
        {
          company: "MAPFRE Ecuador",
          role: "Systems Analyst / Digital Transformation",
          dates: "2019 - 2022",
          bullets: [
            "Led digital transformation initiatives focused on integrations and modernization of core processes",
            "Designed and delivered executive dashboards and ETL flows that cut reporting times from weeks to hours",
            "Coordinated cross-functional squads to ship frequent releases with traceability and automated tests",
          ],
          tech: ["SQL Server", "Power BI", "Azure DevOps", "REST APIs"],
        },
        {
          company: "Righttek / Claro Ecuador",
          role: "Software Engineer (Consulting)",
          dates: "2017 - 2019",
          bullets: [
            "Developed software for operations support and network process automation",
            "Integrated heterogeneous sources (APIs, SOAP, transactional databases) to improve performance visibility",
            "Implemented data pipelines and monitoring that improved diagnosis times",
          ],
          tech: ["Java", "Spring", "PostgreSQL", "Linux"],
        },
      ],
    },
    writing: {
      title: "Writing",
      intro:
        "I write about data, analytics, and practical AI. Here are the latest Substack posts.",
      fallback: "The feed is unavailable right now. You can read everything directly on Substack.",
      button: "Go to Substack",
      readMore: "Read on Substack",
    },
    contact: {
      title: "Contact",
      intro: "If you need support with data architecture, analytics, or applied AI projects, let's talk.",
      emailLabel: "Email",
      linksLabel: "Other ways to connect",
    },
    footer: {
      rights: "All rights reserved",
      quickLinks: "Links",
    },
  },
};

export function getContent(locale: Locale): Content {
  return content[locale];
}
