// const withMDX = require("@next/mdx")({
//   extension: /\.mdx?$/,
// });
// module.exports = withMDX({
//   pageExtensions: ["js", "jsx", "md", "mdx"],
//   i18n: {
//     locales: ["en-US", "es"],
//     defaultLocale: "en-US",
//   },
// });
const nextConfig = {
  reactStrictMode: true,
  // image: {
  //   loader: "akamai",
  //   path: "https://noop/",
  // },
  images: {
    unoptimized: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
  // future: { webpack5: true },
};
module.exports = nextConfig;
