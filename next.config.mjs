/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Types are now inlined in src/lib/types.ts — no workspace dep needed for Vercel
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.credly.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.unsplash.com' },
    ],
  },
};

export default nextConfig;
