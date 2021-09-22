"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const plugin_node_resolve_1 = (0, tslib_1.__importDefault)(require("@rollup/plugin-node-resolve"));
const plugin_babel_1 = (0, tslib_1.__importDefault)(require("@rollup/plugin-babel"));
const config = require('../.config');
console.log(config);
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
};
const defaultOptions = {
    input: './__tests__/index.js',
    output: {
        file: './src/index.js',
        format: 'es'
    },
    plugins: [
        (0, plugin_node_resolve_1.default)(),
        (0, plugin_babel_1.default)(babelOptions)
    ]
};
const customOptions = {
    input: './__tests__/123.js',
};
const ret = Object.assign({}, defaultOptions, customOptions);
exports.default = ret;
