import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Crimson_Pro } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display"
});

const crimson = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap", 
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Petra Elek — Soprano",
  description: "Official website of Petra Elek, classical soprano.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${crimson.variable}`}>
      <body>{children}</body>
    </html>
  );
}