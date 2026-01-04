import Link from "next/link";
import { getContent } from "@/lib/content";
import { Locale, PageKey, localizedPath, alternatePath } from "@/lib/site";

interface NavigationProps {
  locale: Locale;
  page: PageKey;
}

const navItems: PageKey[] = ["home", "about", "work", "writing", "contact"];

export default function Navigation({ locale, page }: NavigationProps) {
  const copy = getContent(locale);

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-background/80 border-b border-gray-200/80">
      <nav className="container-base flex items-center justify-between py-4">
        <Link href={localizedPath("home", locale)} className="text-lg font-semibold text-heading">
          {copy.hero.heading}
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item}
              href={localizedPath(item, locale)}
              className={`transition-colors ${
                page === item ? "text-heading" : "text-text hover:text-accent"
              }`}
            >
              {copy.nav[item]}
            </Link>
          ))}
          <div className="h-6 w-px bg-gray-200" aria-hidden />
          <Link
            href={alternatePath(page, locale)}
            className="text-text hover:text-accent"
            aria-label={locale === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
          >
            <span className={`${locale === "es" ? "font-semibold" : "text-gray-500"}`}>ES</span>
            <span className="mx-1 text-gray-300">|</span>
            <span className={`${locale === "en" ? "font-semibold" : "text-gray-500"}`}>EN</span>
          </Link>
        </div>
        <div className="md:hidden flex items-center gap-4 text-sm">
          <Link
            href={alternatePath(page, locale)}
            className="text-text hover:text-accent"
            aria-label={locale === "es" ? "Cambiar a inglés" : "Switch to Spanish"}
          >
            {locale === "es" ? "EN" : "ES"}
          </Link>
          <Link
            href={localizedPath("contact", locale)}
            className="btn-primary whitespace-nowrap"
          >
            {copy.nav.contact}
          </Link>
        </div>
      </nav>
    </header>
  );
}
