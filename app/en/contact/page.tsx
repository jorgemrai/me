import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";
import { getContent } from "@/lib/content";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata("en", "contact");
export const dynamic = "error";

const EMAIL = "ai.jorgemr@gmail.com";
const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aijorgemendoza/" },
  { label: "Substack", href: "https://jorgemendoza.substack.com" },
  { label: "GitHub", href: "https://github.com/jorgemrai" },
];

export default function ContactPageEn() {
  const copy = getContent("en");

  return (
    <PageShell locale="en" page="contact">
      <section className="container-base section-padding space-y-8">
        <SectionHeader title={copy.contact.title} subtitle={copy.contact.intro} />
        <div className="card p-6 space-y-4 text-gray-800">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-gray-500">{copy.contact.emailLabel}</p>
            <a className="text-heading text-lg font-semibold hover:text-accent" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </div>
          <div className="separator" />
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.16em] text-gray-500">{copy.contact.linksLabel}</p>
            <div className="flex flex-wrap gap-3">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  className="btn-secondary"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
