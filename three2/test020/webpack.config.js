module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'js/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'module': false}]
              ]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
};