import type { MetadataRoute } from "next";
import { routeMap, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = new Set<string>();

  Object.values(routeMap).forEach((entry) => {
    paths.add(entry.es);
    paths.add(entry.en);
  });

  return Array.from(paths).map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: new Date(),
  }));
}
