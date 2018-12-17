const path = require('path');
const merge = require('webpack-merge');
const externals = require('webpack-node-externals');
const base = require('./server.webpack.config.base');

module.exports = merge(base, {
    mode: 'production',
    entry: [path.resolve(__dirname, "../src/server/index.js")],
    externals: [externals()],
    node: {
        console: true,
        global: true,
        process: true,
        __dirname: false,
        __filename: false
    },
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'index.js'
    },
    stats: {
        chunks: false
    }
});
