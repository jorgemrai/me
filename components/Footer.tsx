import Link from "next/link";
import { getContent } from "@/lib/content";
import { Locale, routeMap } from "@/lib/site";

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const copy = getContent(locale);

  return (
    <footer className="border-t border-gray-200/80 bg-white mt-12">
      <div className="container-base py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-heading font-semibold">{copy.hero.heading}</p>
          <p className="text-sm text-gray-600">{copy.footer.rights}</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-text">
          <span className="font-semibold text-heading">{copy.footer.quickLinks}:</span>
          <Link href={routeMap.home[locale]} className="hover:text-accent">
            {copy.nav.home}
          </Link>
          <Link href={routeMap.work[locale]} className="hover:text-accent">
            {copy.nav.work}
          </Link>
          <Link href={routeMap.writing[locale]} className="hover:text-accent">
            {copy.nav.writing}
          </Link>
          <Link href={routeMap.contact[locale]} className="hover:text-accent">
            {copy.nav.contact}
          </Link>
        </div>
      </div>
    </footer>
  );
}
