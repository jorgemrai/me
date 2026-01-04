import PageShell from "@/components/PageShell";
import SectionHeader from "@/components/SectionHeader";
import PostCard from "@/components/PostCard";
import { getContent } from "@/lib/content";
import { fetchSubstackFeed } from "@/lib/rss";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata("en", "writing");
export const dynamic = "error";

function formatDate(date?: string, locale: "es" | "en" = "en") {
  if (!date) return undefined;
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return undefined;
  return new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsed);
}

export default async function WritingPageEn() {
  const copy = getContent("en");
  const posts = await fetchSubstackFeed();
  const hasPosts = posts.length > 0;

  return (
    <PageShell locale="en" page="writing">
      <section className="container-base section-padding space-y-8">
        <SectionHeader title={copy.writing.title} subtitle={copy.writing.intro} />
        {hasPosts ? (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <PostCard
                key={post.link}
                post={{
                  title: post.title,
                  link: post.link,
                  date: formatDate(post.published, "en"),
                  excerpt: post.excerpt,
                }}
                readMoreLabel={copy.writing.readMore}
              />
            ))}
          </div>
        ) : (
          <div className="card p-6 space-y-3 text-gray-700">
            <p>{copy.writing.fallback}</p>
            <a
              className="btn-primary inline-flex w-fit"
              href="https://jorgemendoza.substack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.writing.button}
            </a>
          </div>
        )}
      </section>
    </PageShell>
  );
}
