import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jorge Mendoza | Data, Analytics & AI Architecture",
    template: "%s | Jorge Mendoza",
  },
  description:
    "Data and analytics leader building platforms and teams that turn data into executive decisions.",
  openGraph: {
    title: "Jorge Mendoza | Data, Analytics & AI Architecture",
    description: "Data and analytics leader building platforms and teams that turn data into executive decisions.",
    url: `${SITE_URL}/en`,
    siteName: "Jorge Mendoza",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorge Mendoza | Data, Analytics & AI Architecture",
    description: "Data and analytics leader building platforms and teams that turn data into executive decisions.",
  },
  alternates: {
    canonical: `${SITE_URL}/en`,
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
