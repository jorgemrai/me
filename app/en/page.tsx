import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import { buildPageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = buildPageMetadata("en", "home");
export const dynamic = "error";

export default function HomePageEn() {
  const highlights = [
    {
      title: "Strategy to delivery",
      description:
        "Translate executive goals into data, models, and analytics roadmaps that can be executed and measured.",
    },
    {
      title: "Platforms that scale",
      description:
        "Clean architectures with observability and pragmatic governance so teams grow without unnecessary debt.",
    },
    {
      title: "Applied AI",
      description:
        "Concrete recommendation, scoring, and automation use cases that cut response times and operating costs.",
    },
  ];

  return (
    <PageShell locale="en" page="home">
      <Hero locale="en" />
      <section className="container-base section-padding">
        <SectionHeader
          eyebrow="FOCUS"
          title="Data in service of decisions"
          subtitle="I partner with leaders and teams to build the data, analytics, and AI foundations that deliver visible outcomes."
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
            <p className="text-sm uppercase tracking-[0.18em] text-gray-500 mb-2">Next steps</p>
            <h3 className="text-2xl font-semibold text-heading mb-3">Let's build something useful</h3>
            <p className="text-gray-700 max-w-2xl">
              We can start with an architecture review, a data roadmap, or an applied AI pilot. The priority is delivering value fast.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/en/contact" className="btn-primary">
              Contact
            </Link>
            <Link href="/en/work" className="btn-secondary">
              See work
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
