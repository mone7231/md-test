import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig  : NextConfig = {
     reactStrictMode: true,
     //distDir: "build", // -- commend for deploy to production Vercel , open for deploy to github
     //basePath: "/md-test", 
};
 
export default withNextIntl(nextConfig);