import type { Metadata } from "next";
import "./globals.css";
import { getGoogleFontsUrl } from "../utils/fonts";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Sakujitsu - Creative Portfolio | クリエイティブポートフォリオ",
  description:
    "Creative Frontend Engineerのポートフォリオサイト。視覚的表現の可能性を探求し、写真・デザイン・アートを通じて物語を紡ぐ。React、Next.js、TypeScriptを使用したモダンなWeb開発。",
  keywords: [
    "Creative Frontend Engineer",
    "ポートフォリオ",
    "Web開発",
    "React",
    "Next.js",
    "TypeScript",
    "デザイン",
    "写真",
    "アート",
    "クリエイティブ",
    "フロントエンド",
    "UI/UX",
    "視覚的表現",
  ],
  authors: [{ name: "Sakujitsu" }],
  creator: "Sakujitsu",
  publisher: "Sakujitsu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sakujitsu.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sakujitsu - Creative Portfolio",
    description:
      "Creative Frontend Engineerのポートフォリオサイト。視覚的表現の可能性を探求し、写真・デザイン・アートを通じて物語を紡ぐ。",
    url: "https://sakujitsu.com",
    siteName: "Sakujitsu Portfolio",
    images: [
      {
        url: "/assets/hero.png",
        width: 1200,
        height: 630,
        alt: "Sakujitsu Portfolio Hero Image",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakujitsu - Creative Portfolio",
    description: "Creative Frontend Engineerのポートフォリオサイト",
    images: ["/assets/hero.png"],
    creator: "@sakujitsu_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Qgf1UbbajxqeBLpDut7BCTzGSl9",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <head>
        <link href={getGoogleFontsUrl()} rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
