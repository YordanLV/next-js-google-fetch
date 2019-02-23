/* eslint-disable */
const withSASS = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const withImages = require('next-images');


module.exports = withSASS(withImages(withFonts({
  cssModules: true,
  distDir: 'dist',

  webpack(config, options) {
    config.module.rules.push({
      // shader import support
      test: /\.glsl$/,
      use: [{
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]',
        },
      },
      'babel-loader',
      'webpack-glsl-loader'
      ]
    }
    );
    return config;
  },
})));