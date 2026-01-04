import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";
import { getContent } from "@/lib/content";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata("es", "about");
export const dynamic = "error";

export default function AboutPage() {
  const copy = getContent("es");

  return (
    <PageShell locale="es" page="about">
      <section className="container-base section-padding space-y-8">
        <SectionHeader title={copy.about.title} subtitle="Más contexto" />
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            {copy.about.paragraphs.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <div className="card p-6 space-y-4 text-gray-800">
            <h3 className="text-xl font-semibold text-heading">Cómo trabajo</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Diagnóstico rápido para priorizar, no solo inventariar problemas.</li>
              <li>Diseño modular para iterar sin romper lo que funciona.</li>
              <li>Comunicación clara con ejecutivos y equipos técnicos.</li>
              <li>Métricas de impacto desde el inicio.</li>
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
