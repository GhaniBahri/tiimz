/** @type {import('next').NextConfig} */
import config from './next-i18next.config.mjs'
const {i18n}= config
const nextConfig = {
  reactStrictMode: true,
  i18n
};

export default nextConfig;
