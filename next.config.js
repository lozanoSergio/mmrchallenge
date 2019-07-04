const withPlugins = require("next-compose-plugins");
const css = require("@zeit/next-css");
const sass = require("@zeit/next-sass");

const nextConfig = {
  webpack: config => {
    config.module.rules.push({
      test: /\.(png|jpg|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 8192,
          publicPath: "/_next/static/",
          outputPath: "static/",
          name: "[name].[ext]"
        }
      }
    });
    return config;
  }
};

module.exports = withPlugins(
  [
    [css],
    [sass]
  ],
  nextConfig
);
