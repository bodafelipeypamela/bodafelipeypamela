import type {NextConfig} from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = '/bodafelipeypamela';

const nextConfig: NextConfig = {
  output: 'export',
  // basePath le dice a Next.js que la app vive en esa subcarpeta
  basePath: isProd ? repoName : '',
  // assetPrefix ayuda con los archivos de sistema (_next/...)
  assetPrefix: isProd ? repoName : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
