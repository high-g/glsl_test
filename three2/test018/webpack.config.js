module.exports = {
  mode: 'development', // development, production
  entry: './src/main.ts',
  // output: {
  //   path: `${__dirname}/dist`,
  //   filename:'bundle.js'
  // },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json']
  }
};
