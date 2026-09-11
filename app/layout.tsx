import type { Metadata, Viewport } from "next";

import "./globals.css";
import { PRODUCT_NAME, site } from "@/lib/copy";

export const metadata: Metadata = {
  title: {
    default: `${PRODUCT_NAME} — ${site.tagline}`,
    template: `%s — ${PRODUCT_NAME}`,
  },
  description: site.description,
  applicationName: PRODUCT_NAME,
};

export const viewport: Viewport = {
  themeColor: "#f7f7f4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen bg-bg text-fg antialiased">{children}</body>
    </html>
  );
}
