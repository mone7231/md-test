import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig  : NextConfig = {
     reactStrictMode: true,
     distDir: "build",
     //basePath: "/md-test",
};
 
export default withNextIntl(nextConfig);