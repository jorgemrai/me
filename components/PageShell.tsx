import type { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Locale, PageKey } from "@/lib/site";

interface PageShellProps {
  locale: Locale;
  page: PageKey;
  children: ReactNode;
}

export default function PageShell({ locale, page, children }: PageShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Navigation locale={locale} page={page} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
