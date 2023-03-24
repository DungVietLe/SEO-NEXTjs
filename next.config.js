/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['choixehop.com', 'autopro8.mediacdn.vn', 'www.motortrend.com'],
  },
}

module.exports = nextConfig
