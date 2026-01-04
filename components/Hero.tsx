import Image from "next/image";
import Link from "next/link";
import { Locale, localizedPath } from "@/lib/site";
import { getContent } from "@/lib/content";

interface HeroProps {
  locale: Locale;
}

export default function Hero({ locale }: HeroProps) {
  const copy = getContent(locale);

  return (
    <section className="container-base section-padding grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.18em] text-gray-500">{copy.hero.subheading}</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-heading">{copy.hero.heading}</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">{copy.hero.summary}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href={localizedPath("contact", locale)} className="btn-primary">
            {copy.hero.ctaPrimary}
          </Link>
          <Link href={localizedPath("writing", locale)} className="btn-secondary">
            {copy.hero.ctaSecondary}
          </Link>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-subtle border border-gray-200 bg-white">
          <Image
            src="/profile.svg"
            alt={copy.hero.photoAlt}
            fill
            sizes="(max-width: 768px) 18rem, 20rem"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
