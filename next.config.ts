import path from "node:path";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Other lockfiles exist above this directory; pin the workspace root to web/.
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
};

export default nextConfig;
