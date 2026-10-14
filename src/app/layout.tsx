import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Crimson_Pro } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_DESCRIPTION_HU } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  // latin-ext covers Hungarian ő/ű/Ő/Ű — without it those glyphs fall back
  // to the system serif, breaking mixed-font rendering mid-word.
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display"
});

const crimson = Crimson_Pro({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-body"
});

// Site default is Hungarian (matches LanguageProvider default); the client
// TitleManager swaps title/lang on language switch.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Elek Petra — Szoprán",
  description:
    SITE_DESCRIPTION_HU,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Elek Petra",
    title: "Elek Petra — Szoprán",
    description: SITE_DESCRIPTION_HU,
    locale: "hu_HU",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elek Petra — szoprán",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elek Petra — Szoprán",
    description: SITE_DESCRIPTION_HU,
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Elek Petra",
  alternateName: "Petra Elek",
  jobTitle: "Soprano",
  url: SITE_URL,
  image: `${SITE_URL}/portrait.jpg`,
  sameAs: ["https://www.instagram.com/elektra.579"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${cormorant.variable} ${crimson.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}