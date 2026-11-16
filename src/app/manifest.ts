import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION_HU } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Elek Petra — Szoprán",
    short_name: "Elek Petra",
    description: SITE_DESCRIPTION_HU,
    start_url: "/",
    display: "standalone",
    background_color: "#faf6f0",
    theme_color: "#8a1f2b",
    lang: "hu",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
