import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig  : NextConfig = {
     reactStrictMode: true,
     //async redirects() {
     //     return [
     //       {
     //         source: '/dashboard',
     //         destination: '/',
     //         permanent: true, // 如果为 true，表示永久重定向，浏览器和搜索引擎会缓存
     //       },
     //     ];
     //   },
     //distDir: "build", // -- commend for deploy to production Vercel , open for deploy to github
     //basePath: "/md-test", 
};
 
export default withNextIntl(nextConfig);