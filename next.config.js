/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['scontent-ham3-1.cdninstagram.com', 'buddekaffee.de', 'www.buddekaffee.de']
  },
  i18n: {
    locales: ['de'],
    defaultLocale: 'de'
  }
};

module.exports = nextConfig;
