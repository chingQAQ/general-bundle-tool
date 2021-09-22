import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

interface Output<Type> {
  [propName: string]: Type;
}

interface RollupOptions {
  input?: string;
  output?: Output<string | string[]>;
  [propName: string]: any;
}

const config: any = require('./build.config.json');
const extensions: Array<string> = ['.js', '.jsx', '.ts', '.tsx'];
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
  // custom default
  plugins: [
    resolve({
      extensions
    }),
    commonjs(),
    babel(<any>babelOptions)
  ]
  // // core input options
  // external,
  // input, // conditionally required
  // plugins,

  // // advanced input options
  // cache,
  // onwarn,
  // preserveEntrySignatures,
  // strictDeprecations,

  // // danger zone
  // acorn,
  // acornInjectPlugins,
  // context,
  // moduleContext,
  // preserveSymlinks,
  // shimMissingExports,
  // treeshake,

  // // experimental
  // experimentalCacheExpiry,
  // perf,

  // // required (can be an array, for multiple outputs)
  // output: {
  //   // core output options
  //   dir,
  //   file,
  //   format, // required
  //   globals,
  //   name,
  //   plugins,

  //   // advanced output options
  //   assetFileNames,
  //   banner,
  //   chunkFileNames,
  //   compact,
  //   entryFileNames,
  //   extend,
  //   footer,
  //   hoistTransitiveImports,
  //   inlineDynamicImports,
  //   interop,
  //   intro,
  //   manualChunks,
  //   minifyInternalExports,
  //   outro,
  //   paths,
  //   preserveModules,
  //   preserveModulesRoot,
  //   sourcemap,
  //   sourcemapExcludeSources,
  //   sourcemapFile,
  //   sourcemapPathTransform,
  //   validate,

  //   // danger zone
  //   amd,
  //   esModule,
  //   exports,
  //   externalLiveBindings,
  //   freeze,
  //   indent,
  //   namespaceToStringTag,
  //   noConflict,
  //   preferConst,
  //   sanitizeFileName,
  //   strict,
  //   systemNullSetters
  // },
  // watch: {
  //   buildDelay,
  //   chokidar,
  //   clearScreen,
  //   skipWrite,
  //   exclude,
  //   include
  // },
}
const customOptions: RollupOptions = config.data;
const ret: RollupOptions = Object.assign({}, defaultOptions, customOptions);

export default ret;
