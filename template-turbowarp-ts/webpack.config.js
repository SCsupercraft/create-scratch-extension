const webpack = require('webpack');
const path = require('node:path');
const fs = require('node:fs');

const TerserPlugin = require('terser-webpack-plugin');

const extension = JSON.parse(
  fs.readFileSync(path.resolve('extension.json'), 'utf-8'),
);

const dynamicPlugins = [];

let banner = '';
if (extension.meta) {
  banner += extension.meta.reduce((p, c) => p + '// ' + c + '\n', '') + '\n';
}

if (extension.banner) {
  banner +=
    '/*\n' +
    extension.banner.reduce((p, c) => p + '  ' + c + '\n', '') +
    '*/\n';
}

if (banner.length != 0)
  dynamicPlugins.push(
    new webpack.BannerPlugin({
      banner,

      raw: true,
      stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
    }),
  );

const config = {
  entry: './src/extension.ts',
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ...dynamicPlugins,
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.(txt|md|css)$/i,
        use: ['raw-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: false,
          mangle: false,
          format: {
            comments: (node, comment) => {
              return (
                comment.type === 'comment1' &&
                comment.value !== ' webpackBootstrap' &&
                !comment.value.startsWith(' ./')
              );
            },
            beautify: true,
          },
        },
      }),
    ],
  },
  output: {
    filename: extension.filename,
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'production',
  devtool: false,
};

const minifiedConfig = {
  ...config,
  optimization: {
    minimize: true,
    minimizer: undefined,
  },
  output: {
    filename: extension.filename,
    path: path.resolve(__dirname, 'dist/min'),
    clean: true,
  },
};

module.exports = () => {
  return [config, minifiedConfig];
};
