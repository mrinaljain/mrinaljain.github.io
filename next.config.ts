import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from "next";

const isDeployedProduction =
  process.env.NODE_ENV === "production" &&
  (process.env.VERCEL === "1" || process.env.NETLIFY === "true");

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      new URL('https://i.ytimg.com/**'),
      new URL('https://img.youtube.com/**'),
      new URL('https://i3.ytimg.com/**'),
      new URL('https://avatars.githubusercontent.com/**'), // GitHub user avatars
    ],
  },
  // Enable Fast Refresh optimizations
  reactStrictMode: true,

};

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: "mrinal-v3",
  project: "javascript-nextjs",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  // Keep the tunnel enabled in real deployments, but avoid local prod-mode proxy TLS issues.
  tunnelRoute: isDeployedProduction ? "/monitoring" : undefined,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  webpack:{
    treeshake:{
      removeDebugLogging: true,
    },
    automaticVercelMonitors: true,
  },
  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
});