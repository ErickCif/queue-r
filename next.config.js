/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  async rewrites() {
    return [
      {
        source: '/room/:name',
        destination: '/room/[name]',
      },
    ]
  }
}

module.exports = nextConfig
