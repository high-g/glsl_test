module.exports = {
  mode: 'development', // development, production
  entry: './src/Main.ts',
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
