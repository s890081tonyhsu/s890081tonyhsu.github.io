// vue.config.js

const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(jpe?g|png)$/i,
          type: 'asset'
        },
        {
          type: 'asset/resource',
          test: /\.md$/i,
          generator: {
            outputPath: 'markdown/',
            publicPath: 'markdown/',
            filename: '[name][ext]'
          }
        }
      ]
    },
    optimization: {
      minimizer: [
        '...',
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.sharpMinify
          }
        })
      ]
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'OtomeSound - Build a website based on user experience, which makes users satisfied.'
        return args
      })
  }
}
