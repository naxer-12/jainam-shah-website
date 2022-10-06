const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
});
