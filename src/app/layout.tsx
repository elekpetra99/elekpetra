import type { Metadata } from "next";
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
  title: "Elek Petra — Soprano",
  description: "Official website of Elek Petra, classical soprano.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${crimson.variable}`}>
      <body>{children}</body>
    </html>
  );
}