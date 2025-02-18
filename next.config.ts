import createNextIntlPlugin from 'next-intl/plugin';
import { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    reactStrictMode: true,
    distDir: 'build',
    output: "export",
    async rewrites() {
     return [
         { source: "/en/:path*", destination: "/:path*" },
         { source: "/cn/:path*", destination: "/:path*" }
     ];
 }
};

export default withNextIntl(nextConfig);
