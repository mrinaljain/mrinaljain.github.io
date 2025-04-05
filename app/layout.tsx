import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mrinaljain.com/"),
  title: { default: "Mrinal Jain | Tech Consultant, Speaker & Developer", template: '%s | Tech Consultant, Speaker & Developer' },
  description: "Tech Consultant, Developer, and Speaker with expertise in Flutter, React, and SaaS applications. Explore my projects, talks, and insights.",
  keywords: "Mrinal Jain, Tech Consultant, Flutter Developer, React Developer, Engineering Manager, Tech Speaker, Software Engineer",
  applicationName: "Mrinal Jain",
  authors: [{ name: "Mrinal Jain", url: "https://www.linkedin.com/in/mrinaljain/" }],
  robots: { index: true, follow: true },
  referrer: "no-referrer-when-downgrade",
  creator: "Mrinal Jain",
  publisher: "Mrinal Jain",
  alternates: {
    canonical: "https://mrinaljain.com/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  generator: "VSCode",
  openGraph: {
    title: "Mrinal Jain | Tech Consultant, Speaker & Developer",
    description: "Tech Consultant, Developer, and Speaker with expertise in Flutter, React, and SaaS applications. Explore my projects, talks, and insights",
    url: "https://mrinaljain.com/",
    siteName: "Mrinal Jain - Portfolio",
    type: "website",
    locale: "en_US",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false
  },
  verification: {
    google: "0e75-VwaqN5FEq06g4S0sJ5JVbV6OK5WShoxiy2Y2Fk",
    yandex: "63db5177f1385edc"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-DY3RQS5E8M" />

      </body>
    </html>
  );
}
