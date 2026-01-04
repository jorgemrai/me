import { XMLParser } from "fast-xml-parser";

export type FeedPost = {
  title: string;
  link: string;
  published?: string;
  excerpt?: string;
};

const FEED_URL = "https://jorgemendoza.substack.com/feed";

export async function fetchSubstackFeed(limit = 8): Promise<FeedPost[]> {
  try {
    const response = await fetch(FEED_URL, { cache: "force-cache" });
    if (!response.ok) throw new Error(`Feed request failed: ${response.status}`);

    const xml = await response.text();
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "" });
    const parsed = parser.parse(xml);

    const items = parsed?.rss?.channel?.item ?? [];
    const normalized = Array.isArray(items) ? items : [items];

    return normalized.slice(0, limit).map((item: any) => ({
      title: item.title ?? "",
      link: item.link ?? "",
      published: item.pubDate ?? item["atom:updated"],
      excerpt: cleanExcerpt(item.description || item["content:encoded"] || ""),
    }));
  } catch (error) {
    console.error("Failed to fetch Substack feed", error);
    return [];
  }
}

function cleanExcerpt(text: string): string | undefined {
  if (!text) return undefined;
  const withoutHtml = text.replace(/<[^>]+>/g, " ").replace(/&[^;]+;/g, " ");
  const trimmed = withoutHtml.replace(/\s+/g, " ").trim();
  return trimmed.length > 220 ? `${trimmed.slice(0, 200)}…` : trimmed;
}
