/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/error/:path*",
        destination: "/about",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:moviesId",
        destination: `https://api.themoviedb.org/3/movie/:moviesId?api_key=${API_KEY}`,
      },
      {
        source: "/api/images/:name",
        destination: `https://image.tmdb.org/t/p/w500/:name`,
      },
    ];
  },
};

module.exports = nextConfig;
