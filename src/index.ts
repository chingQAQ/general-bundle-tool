import { join } from 'path';
import { resolvePath } from '../src/helpers/path-handler';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

const config = require('../build.config.json');

console.log(config.data)

interface Output<Type> {
  [propName: string]: Type;
}

interface RollupOptions {
  input?: string;
  output?: Output<string | string[]>;
  [propName: string]: any;
}

const babelOptions = {
  babelHelpers: 'bundled',
  "presets": [
    [
      '@babel/preset-env',
      { 
        targets: {
          node: 'current'
        }
      }
    ]
  ]
}

const defaultOptions: RollupOptions = {
  input: './__tests__/index.js',
  output: {
    file: './src/index.js',
    format: 'es'
  },
  plugins: [
    resolve(),
    babel(<any>babelOptions)]
}

const customOptions: RollupOptions = {
  input: './__tests__/123.js',
}

const ret: RollupOptions = Object.assign({}, defaultOptions, customOptions);

export default ret;
