module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://tarea-3-mjadresic.onrender.com/api/:path*' // Proxy to Backend
      }
    ];
  }
};
