import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";
import { getContent } from "@/lib/content";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata("en", "about");
export const dynamic = "error";

export default function AboutPageEn() {
  const copy = getContent("en");

  return (
    <PageShell locale="en" page="about">
      <section className="container-base section-padding space-y-8">
        <SectionHeader title={copy.about.title} subtitle="More context" />
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            {copy.about.paragraphs.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <div className="card p-6 space-y-4 text-gray-800">
            <h3 className="text-xl font-semibold text-heading">How I work</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Fast diagnostics to prioritize, not just catalog issues.</li>
              <li>Modular design to iterate without breaking what works.</li>
              <li>Clear communication with executives and technical squads.</li>
              <li>Impact metrics from day one.</li>
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
