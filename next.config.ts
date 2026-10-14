import type { NextConfig } from "next";

// Content-versioned static images (?v=N in src) — allow browsers to keep
// them without revalidating on every visit. Swap rule: always bump ?v= when
// changing image content.
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:name.jpg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;