import type { Metadata } from "next";
import "./globals.css";
import { getGoogleFontsUrl } from "../utils/fonts";

export const metadata: Metadata = {
  title: "昨日 - sakujitsu",
  description: "昨日の話",
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
