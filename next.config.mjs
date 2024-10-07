/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.codewars.com", "udemy-certificate.s3.amazonaws.com"],
    dangerouslyAllowSVG: true,
    unoptimized: true,
  },
};

export default nextConfig;
