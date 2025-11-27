/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    // Disable webpack persistent caching
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;
