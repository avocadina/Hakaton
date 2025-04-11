import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  sassOptions: {
    includePaths: [path.join(__dirname, "src")],
    prependData: `
      @use "app/style/global/colors.scss" as *;
      @use "app/style/global/sizes.scss" as *;
      @use "app/style/global/text.scss" as *;
    `,
  },

  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  output: "standalone",
};

export default nextConfig;
