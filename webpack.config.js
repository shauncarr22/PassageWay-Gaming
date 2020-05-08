const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?(jsx|js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /npm\.js$/,
        loader: 'string-replace-loader',
        include: path.resolve('node_modules/firebaseui/dist'),
        options: {
          search: 'require(\'firebase/app\');',
          replace: 'require(\'firebase/app\').default;',
        },
      },
    ]
  },
  devServer: {
    // Display only errors to reduce the amount of output.
    stats: "errors-only",
    contentBase: path.join(__dirname, 'dist'),

    // Parse host and port from env to allow customization.
    //
    // If you use Docker, Vagrant or Cloud9, set
    // host: "0.0.0.0";
    //
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    open: true, // Open the page in browser
  }
};

