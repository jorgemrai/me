export const SITE_URL = "https://jorgemendoza.io";

export type Locale = "es" | "en";

export const defaultLocale: Locale = "es";

export const routeMap = {
  home: {
    es: "/",
    en: "/en",
  },
  about: {
    es: "/about",
    en: "/en/about",
  },
  work: {
    es: "/work",
    en: "/en/work",
  },
  writing: {
    es: "/writing",
    en: "/en/writing",
  },
  contact: {
    es: "/contact",
    en: "/en/contact",
  },
} as const satisfies Record<string, { es: string; en: string }>;

export type PageKey = keyof typeof routeMap;

export function alternatePath(page: PageKey, locale: Locale) {
  const target = locale === "es" ? "en" : "es";
  return routeMap[page][target];
}

export function localizedPath(page: PageKey, locale: Locale) {
  return routeMap[page][locale];
}
