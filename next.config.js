/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
  },
  env: {
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT || 'http://localhost:8080/graphql',
    GRPC_ENDPOINT: process.env.GRPC_ENDPOINT || 'localhost:9090',
  },
}

module.exports = nextConfig
