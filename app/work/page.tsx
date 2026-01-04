import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";
import ExperienceCard from "@/components/ExperienceCard";
import LogoStrip from "@/components/LogoStrip";
import { getContent } from "@/lib/content";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata("es", "work");
export const dynamic = "error";

export default function WorkPage() {
  const copy = getContent("es");

  return (
    <PageShell locale="es" page="work">
      <section className="container-base section-padding space-y-10">
        <SectionHeader eyebrow={copy.work.title} title={copy.work.subtitle} />
        <LogoStrip heading={copy.work.logosHeading} />
        <div className="grid gap-6">
          {copy.work.experiences.map((exp) => (
            <ExperienceCard key={`${exp.company}-${exp.role}`} experience={exp} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
