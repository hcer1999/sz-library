/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.bingkele.cc',
        pathname: '/sz-hero/**',
      },
    ],
  },
}

module.exports = nextConfig 