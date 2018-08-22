const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const file = require('./base-file.js')

const config = require('./webpack.dev.js');
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost',
  port: file.dev.port
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(file.dev.port, 'localhost', () => {
  console.log('dev server listening on port 8006');
});