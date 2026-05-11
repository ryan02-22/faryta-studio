import { siteConfig } from "@/lib/site-data";

export default function sitemap() {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date()
    }
  ];
}
