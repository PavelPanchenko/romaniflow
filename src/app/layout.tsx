import type { Metadata, Viewport } from "next";
import { Spectral, Manrope, JetBrains_Mono } from "next/font/google";
import { AuthProvider } from "@/components/auth-provider";
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
  title: "RomaniFlow — изучайте цыганский язык",
  description:
    "Интерактивная платформа для изучения восточноевропейского варианта цыганского языка: карточки, мини-квизы, транскрипция и личный прогресс."
};

export const viewport: Viewport = {
  themeColor: "#F2EAD6"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${spectral.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <body
        style={{
          fontFamily: "var(--font-body-loaded), var(--font-body)"
        }}
      >
        <style>{`
          :root {
            --font-display: var(--font-display-loaded), 'Spectral', 'Times New Roman', serif;
            --font-body: var(--font-body-loaded), 'Manrope', system-ui, sans-serif;
            --font-mono: var(--font-mono-loaded), 'JetBrains Mono', ui-monospace, monospace;
          }
        `}</style>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
