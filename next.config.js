/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Suppress Supabase Webpack warning
  webpack: (config) => {
    config.module.exprContextCritical = false;
    return config;
  },
};

module.exports = nextConfig;
