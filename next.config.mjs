/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/lumeria-web" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
