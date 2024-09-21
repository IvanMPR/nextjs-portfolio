/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/nextjs-portfolio",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  images: {
    domains: ["www.codewars.com", "udemy-certificate.s3.amazonaws.com"],
    dangerouslyAllowSVG: true,
    unoptimized: true,
  },
};

export default nextConfig;
