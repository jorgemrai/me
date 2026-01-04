import "./globals.css";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jorge Mendoza | Datos, Analítica y Arquitectura de IA",
    template: "%s | Jorge Mendoza",
  },
  description:
    "Líder en datos, analítica y arquitectura de IA. Construyo plataformas y equipos que convierten datos en decisiones ejecutivas.",
  openGraph: {
    title: "Jorge Mendoza | Datos, Analítica y Arquitectura de IA",
    description:
      "Líder en datos, analítica y arquitectura de IA. Construyo plataformas y equipos que convierten datos en decisiones ejecutivas.",
    url: SITE_URL,
    siteName: "Jorge Mendoza",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorge Mendoza | Datos, Analítica y Arquitectura de IA",
    description:
      "Líder en datos, analítica y arquitectura de IA. Construyo plataformas y equipos que convierten datos en decisiones ejecutivas.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
