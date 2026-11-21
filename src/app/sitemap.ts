import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/integracoes`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...["mercado-livre", "shopee", "amazon"].map((c) => ({ url: `${site.url}/integracoes/${c}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${site.url}/consultoria`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/privacidade`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/termos`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
