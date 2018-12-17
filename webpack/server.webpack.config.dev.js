const path = require('path');

const merge = require('webpack-merge');
const base = require('./server.webpack.config.base');

module.exports = [
    merge(
        base,
        {
            name: 'server',
            mode: 'development',
            entry: ['./src/server/render.js'],
            output: {
                path: path.join(__dirname, '../dist'),
                filename: 'server.js',
                libraryTarget: 'commonjs2'
            }
        }
    )
];
