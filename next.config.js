/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/design-your-site",
        permanent: true,
      },
    ];
  },

}

module.exports = nextConfig
