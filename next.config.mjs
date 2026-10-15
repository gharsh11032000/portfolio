import { withContentCollections } from "@content-collections/next";
import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.resolve("."),
  },
  async redirects() {
    // Posts that were live on harshgupta.xyz before being removed or replaced.
    const removedPosts = [
      "api-design-principles",
      "building-design-systems",
      "git-workflow-guide",
      "nextjs-performance-tips",
      "remote-work-productivity",
      "testing-react-apps",
      "typescript-best-practices",
    ];
    return [
      {
        source: "/blog/upgrading-production-storefront-to-nextjs-16",
        destination: "/blog/trimming-first-load-js-nextjs-storefront",
        permanent: true,
      },
      ...removedPosts.map((slug) => ({
        source: `/blog/${slug}`,
        destination: "/blog",
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
