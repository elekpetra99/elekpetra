import type { Metadata } from "next";
import { Crimson_Pro, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const crimson = Crimson_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "[Full Name] — Classical Musician",
  description: "Official website of [Full Name], classical musician and performer.",
  keywords: ["classical music", "musician", "performer", "chamber music", "orchestral"],
  authors: [{ name: "[Full Name]" }],
  openGraph: {
    title: "[Full Name] — Classical Musician",
    description: "Official website of [Full Name], classical musician and performer.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${crimson.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}