import type { Metadata, Viewport } from "next";
import { Spectral, Manrope, JetBrains_Mono } from "next/font/google";
import { AuthProvider } from "@/components/auth-provider";
import { getSiteUrl, siteMetadataBase } from "@/lib/site-url";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from "@/lib/seo-constants";
import "./globals.css";

const spectral = Spectral({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display-loaded",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body-loaded",
  display: "swap"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-loaded",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: siteMetadataBase(),
  title: {
    default: SITE_TITLE,
    template: `%s · ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "цыганский язык",
    "романи",
    "Romani",
    "Eastern Romani",
    "обучение",
    "карточки",
    "диалекты цыганского",
    SITE_NAME
  ],
  authors: [{ name: SITE_NAME, url: getSiteUrl() }],
  creator: SITE_NAME,
  icons: {
    icon: [{ url: "/brand-glyph.svg", type: "image/svg+xml" }]
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
  category: "education"
};

export const viewport: Viewport = {
  themeColor: "#F2EAD6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${spectral.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <body className="font-body">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
