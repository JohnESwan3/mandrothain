/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
