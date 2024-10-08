/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image-cdn-ak.spotifycdn.com",
      },
      {
        protocol: "https",
        hostname: "mosaic.scdn.co",
      },
      {
        protocol: "https",
        hostname: "i2o.scdn.co"
      },
      {
        protocol: "https",
        hostname: "image-cdn-fa.spotifycdn.com"
      }
    ],
  },
};

export default nextConfig;
