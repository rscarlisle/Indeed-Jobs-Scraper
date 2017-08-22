const libpath = require('path');
const rimraf = require('rimraf');
const getConfig = require('hjs-webpack');

function path(path) {
  return libpath.join(__dirname, path);
}

rimraf.sync(path('public/static/app.js'));

module.exports = getConfig({
  target: 'web',
  in: path('src/index.js'),
  out: {
    path: path('public/static'),
    pathinfo: true,
    filename: 'app.js',
    isDev: process.env.NODE_ENV !== 'production'
  },
  module: {
    rules: [
      {
        include: path('src'),
        test: /\.js$/,
        enforce: 'pre',
        use: ['eslint-loader']
      }
    ]
  }
});
