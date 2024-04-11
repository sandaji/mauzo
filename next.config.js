/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Allow images from Cloudinary with HTTPS protocol
      },
      {
        protocol: "http",
        hostname: "localhost", // Allow images from localhost with HTTP protocol
      },
      {
        protocol: "https", // Define protocol
        hostname: "images.pexels.com", // Allow images from Pexels domain
      },
    ],
  },
};

module.exports = nextConfig;

