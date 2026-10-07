import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin Turbopack root to this project so stray parent lockfiles
  // (e.g. D:\hireurbania\package-lock.json) are ignored in `next dev`.
  turbopack: {
    root: __dirname,
  },
  trailingSlash: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/delhi/tempo-traveller-fare-in-punjabi-bagh',
        destination: '/delhi/urbania-fare-in-punjabi-bagh',
        permanent: true,
      },
      {
        source: '/:city/tempo-traveller-fare-in-:locality',
        destination: '/:city/urbania-fare-in-:locality',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.hireurbaniatempotraveller.com',
          },
        ],
        destination: 'https://hireurbaniatempotraveller.com/:path*',
        permanent: true,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: '192.168.1.29',
      },
    ],
  },
};

export default nextConfig;
