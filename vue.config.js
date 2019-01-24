const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  outputDir: './dist',
  baseUrl: "./",

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 75,
            propList: ['*'],
            unitPrecision: 5,
            selectorBlackList: ['van-'],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
          })
        ]
      }
    }
  },

  lintOnSave: true,

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@a', resolve('src/assets'))
      .set('@c', resolve('src/components'))
      .set('@dist', resolve('static/dist'))
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        resolve('src/less/*.less')
      ]
    }
  },
};
