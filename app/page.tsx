import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import { buildPageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildPageMetadata("es", "home");
export const dynamic = "error";

export default function HomePage() {
  const highlights = [
    {
      title: "Estrategia a entrega",
      description:
        "Traduzco objetivos ejecutivos en hojas de ruta de datos, modelos y analítica que se pueden ejecutar y medir.",
    },
    {
      title: "Plataformas que escalan",
      description:
        "Arquitecturas limpias, observabilidad y gobierno práctico para crecer sin deuda técnica innecesaria.",
    },
    {
      title: "IA aplicada",
      description:
        "Casos concretos de recomendación, scoring y automatización que reducen tiempos de respuesta y costos.",
    },
  ];

  return (
    <PageShell locale="es" page="home">
      <Hero locale="es" />
      <section className="container-base section-padding">
        <SectionHeader
          eyebrow="ENFOQUE"
          title="Datos al servicio de la decisión"
          subtitle="Acompaño a líderes y equipos a construir bases de datos, analítica y productos de IA que entregan resultados visibles."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div key={item.title} className="card p-6 space-y-3">
              <h3 className="text-xl font-semibold text-heading">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container-base section-padding">
        <div className="card p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-gray-500 mb-2">Próximos pasos</p>
            <h3 className="text-2xl font-semibold text-heading mb-3">Construyamos algo útil</h3>
            <p className="text-gray-700 max-w-2xl">
              Podemos empezar con una revisión de arquitectura, un roadmap de datos o un piloto de IA aplicada. Lo importante es
              entregar valor rápido.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Conversemos
            </Link>
            <Link href="/work" className="btn-secondary">
              Ver experiencia
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
