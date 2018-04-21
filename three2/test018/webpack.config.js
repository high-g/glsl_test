module.exports = {
  mode: 'development', // development, production
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js','.ts']
  },
  devServer: {
    contentBase: 'dist',
    open: true
  }
};
