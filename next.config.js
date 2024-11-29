/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',

  images: {
    domains: ["res.cloudinary.com", "media4.giphy.com"],
    unoptimized: true
  },
};
