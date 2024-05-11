/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination:
          'https://morgana-english-admin.onrender.com/statistics/:path*', // Proxy API requests
      },
    ];
  },
};

export default nextConfig;
