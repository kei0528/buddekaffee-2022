/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['scontent-ham3-1.cdninstagram.com']
  }
};

module.exports = nextConfig;
