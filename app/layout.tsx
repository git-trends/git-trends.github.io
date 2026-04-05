import React from "react";
import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GoogleAnalytics } from "@/components/google/analytics";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "GitTrends - Discover Trending GitHub Repositories",
  description:
    "Explore the hottest open-source projects on GitHub. Track daily, weekly, and monthly trending repositories across all programming languages.",
  keywords: [
    "github",
    "trending",
    "repositories",
    "open-source",
    "programming",
    "languages",
  ],
  icons: {
    icon: [
      {
        url: "/favicon.png",
      },
    ],
    apple: "/favicon.png",
  },
  verification: {
    google: "nScZP2sBUKhxwKfvtKwCxQkPMCIOOvYNT35E5W2pDn8",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1319",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
