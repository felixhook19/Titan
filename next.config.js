/** @type {import('next').NextConfig} */
// Empty for a custom domain served at root; "/" is normalised to "".
const rawBasePath = process.env.PAGES_BASE_PATH || "";
const basePath = rawBasePath === "/" ? "" : rawBasePath;

const nextConfig = {
  // Static HTML export so the site can be served from GitHub Pages / any CDN.
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  // Exposed to the client so raw <img src="/artwork/..."> can be base-path-prefixed.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
