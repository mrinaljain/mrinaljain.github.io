import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import React from "react";
import AmplitudeProvider from "../components/AmplitudeProvider";
import { siteMetadata } from "@/lib/seo";
import ThemeProvider from "../components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <AmplitudeProvider />
          {children}
        </ThemeProvider>
        {/* <GoogleAnalytics gaId="G-DY3RQS5E8M" /> */}

        <GoogleTagManager gtmId="GTM-5GJ3RWV" />

      </body>
    </html>
  );
}
