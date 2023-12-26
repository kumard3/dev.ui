/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com", "media4.giphy.com"],
  },
  experimental: { nextScriptWorkers: true },
};
