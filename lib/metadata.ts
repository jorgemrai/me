import { Metadata } from "next";
import { PageKey, SITE_URL } from "./site";
import { getContent } from "./content";
import { Locale, routeMap } from "./site";

const baseTitles: Record<Locale, string> = {
  es: "Jorge Mendoza | Datos, Analítica y Arquitectura de IA",
  en: "Jorge Mendoza | Data, Analytics & AI Architecture",
};

const descriptions: Record<Locale, string> = {
  es: "Líder en datos, analítica y arquitectura de IA. Construyo plataformas y equipos que convierten datos en decisiones ejecutivas.",
  en: "Data and analytics leader building platforms and teams that turn data into executive decisions.",
};

const pageTitles: Record<PageKey, Record<Locale, string>> = {
  home: {
    es: "Inicio",
    en: "Home",
  },
  about: {
    es: "Sobre mí",
    en: "About",
  },
  work: {
    es: "Experiencia",
    en: "Work",
  },
  writing: {
    es: "Escritura",
    en: "Writing",
  },
  contact: {
    es: "Contacto",
    en: "Contact",
  },
};

export function buildPageMetadata(locale: Locale, page: PageKey): Metadata {
  const content = getContent(locale);
  const baseTitle = baseTitles[locale];
  const title = `${pageTitles[page][locale]} | ${content.hero.heading}`;
  const description = descriptions[locale];

  const esPath = routeMap[page].es === "/" ? "" : routeMap[page].es;
  const enPath = routeMap[page].en === "/" ? "" : routeMap[page].en;
  const canonicalPath = locale === "es" ? esPath : enPath;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}${canonicalPath || "/"}`,
      languages: {
        es: `${SITE_URL}${esPath || "/"}`,
        en: `${SITE_URL}${enPath || "/"}`,
      },
    },
    openGraph: {
      title: title,
      description,
      url: `${SITE_URL}${canonicalPath || "/"}`,
      siteName: content.hero.heading,
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
