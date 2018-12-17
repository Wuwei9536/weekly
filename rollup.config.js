import path from 'path';
import alias from 'rollup-plugin-alias';
import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import nodeGlobals from 'rollup-plugin-node-globals';
import { uglify } from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';

const pkg = require('./package.json');


let plugins = [
  alias({
    '@': path.resolve('./src/'),
    resolve: ['.js', '.jsx']
  }),
  buble({
    objectAssign: 'Object.assign'
  }),
  nodeResolve({
    jsnext: true,
    main: true,
    browser: true
  }),
  commonjs(),
  nodeGlobals(),
  filesize(),
  uglify()
];

const config = {
    input: './src/lib/index.js',
    output: {
        file: './dist/index.js',
        format: ['umd'],
        name: pkg.name,
        sourcemap: false
    },
    external: ['react', 'antd'],
    plugins: plugins
};

export default config;
