// // const withMDX = require("@next/mdx")({
// //   extension: /\.mdx?$/,
// // });
// // module.exports = withMDX({
// //   pageExtensions: ["js", "jsx", "md", "mdx"],
// //   i18n: {
// //     locales: ["en-US", "es"],
// //     defaultLocale: "en-US",
// //   },
// // });
// const nextConfig = {
//   reactStrictMode: true,
//   // image: {
//   //   loader: "akamai",
//   //   path: "https://noop/",
//   // },
//   images: {
//     unoptimized: true,
//   },
//   // basePath: "/nextjs-pages",
//   // assetPrefix: "/nextjs-pages",
//   exportPathMap: () => ({
//     "/": {
//       page: "/",
//     },
//   }),
//   // future: { webpack5: true },
// };
// module.exports = nextConfig;

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "/";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
};
