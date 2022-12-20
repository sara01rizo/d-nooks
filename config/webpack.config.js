const { merge } = require('webpack-merge');
  const common = require('./webpack.common.js');

  module.exports = merge(common, {
    mode: 'development',
    mode: 'production' //add this line here
  });

const dotenv = require("dotenv")

dotenv.config()
console.log(process.env.NODE_ENV)

process.exit(0)
