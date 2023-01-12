/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['scontent-ham3-1.cdninstagram.com']
  },
  i18n: {
    locales: ['de'],
    defaultLocale: 'de'
  }
};

module.exports = nextConfig;
