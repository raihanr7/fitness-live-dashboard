/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* Jika ada error build karena folder kosong, ini akan mengabaikannya */
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
