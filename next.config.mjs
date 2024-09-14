/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.codewars.com", "udemy-certificate.s3.amazonaws.com"],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
