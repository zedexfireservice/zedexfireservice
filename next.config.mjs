import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**', // allow any HTTPS hostname
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        destination: '/:path*'
      },
      {
        source: '/blog',
        destination: '/'
      }
    ]
  }
};

export default withFlowbiteReact(nextConfig);