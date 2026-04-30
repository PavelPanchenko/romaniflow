import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from "@/lib/seo-constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_TITLE,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#F2EAD6",
    theme_color: "#F2EAD6",
    lang: "ru",
    icons: [{ src: "/brand-glyph.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }]
  };
}
