const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  // js
  {
    watch: true,
    resolve: {
      alias: {
        'three/TDSLoader':  `${__dirname}/node_modules/three/examples/js/loaders/TDSLoader.js`,
        'three/OrbitControls':  `${__dirname}/node_modules/three/examples/js/controls/OrbitControls.js`,
      }
    },
    entry: {
      js: ['babel-polyfill', './src/babel/entry.js']
    },
    output: {
      path: `${__dirname}/public/js/`,
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['env', {'modules': false}]
                ]
              }
            }
          ],
          exclude: /node_modules/,
        }
      ]
    },
    devtool: 'source-map'
  },

  // scss
  {
    entry: {
      'main': './src/scss/main.scss',
    },
    output: {
      path: `${__dirname}/public/css/`,
      filename: '[name].css'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader',
                  options: { sourceMap: true }
                },
                {
                  loader: 'sass-loader',
                  options: { sourceMap: true }
                }
              ]
            }
          )
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css')
    ]
  }
];