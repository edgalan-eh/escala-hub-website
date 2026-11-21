import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./consultoria.css";
import { site } from "@/lib/consultoria-site";
import { CalModalProvider } from "@/components/consultoria/CalModal";
import { Nav } from "@/components/consultoria/Nav";
import { Footer } from "@/components/consultoria/Footer";
import { WhatsAppFab } from "@/components/consultoria/WhatsAppFab";
import { CookieConsent } from "@/components/consultoria/CookieConsent";
import { RevealObserver } from "@/components/consultoria/Reveal";

const sora = Sora({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-sora", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s | Escala Hub" },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>
        <CalModalProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <WhatsAppFab />
          <CookieConsent />
          <RevealObserver />
        </CalModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
