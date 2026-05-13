import { ReactNode } from "react";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { APP_CONFIG } from "@/config/app-config";
import { ThemeBootScript } from "@/scripts/theme-boot";
import { PreferencesStoreProvider } from "@/stores/preferences/preferences-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(APP_CONFIG.url),
  title: {
    default: APP_CONFIG.meta.title,
    template: `%s · ${APP_CONFIG.name}`,
  },
  description: APP_CONFIG.meta.description,
  keywords: APP_CONFIG.meta.keywords,
  applicationName: APP_CONFIG.name,
  generator: "Next.js",
  authors: [{ name: APP_CONFIG.name }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: APP_CONFIG.locale,
    url: APP_CONFIG.url,
    siteName: APP_CONFIG.name,
    title: APP_CONFIG.meta.title,
    description: APP_CONFIG.meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: APP_CONFIG.meta.title,
    description: APP_CONFIG.meta.description,
  },
  icons: { icon: "/icon.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN" className="light" data-theme-preset="default" suppressHydrationWarning>
      <head>
        {/* RootLayout stays static. Theme (mode + preset) is applied with this script to avoid extra RSC calls and cookie-based rerenders. */}
        <ThemeBootScript />
      </head>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <PreferencesStoreProvider themeMode="light" themePreset="default">
          {children}
          <Toaster />
        </PreferencesStoreProvider>
      </body>
    </html>
  );
}
