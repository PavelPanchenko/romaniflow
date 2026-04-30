import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/seo-constants";

/** Schema.org WebSite для главной (индексация, rich results). */
export function buildHomeWebSiteJsonLd(baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: baseUrl,
    description: SITE_DESCRIPTION,
    inLanguage: "ru-RU"
  };
}
