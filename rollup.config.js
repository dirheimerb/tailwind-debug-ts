import  terser from '@rollup/plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import path from 'path'
import typescript from 'rollup-plugin-typescript2';
import swc from '@rollup/plugin-swc';
import postcss from 'rollup-plugin-postcss';

const cssPath = path.resolve('src/tailwindcss.css');

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs'
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm'
        },
        {
            file: 'dist/index.umd.js',
            format: 'umd',
            name: 'debugScreens'
        }
    ],
    plugins: [
        nodeResolve(),
        commonjs(),
        postcss({
            extract: cssPath
        }),
        json(),
        typescript(),
        swc(),
        terser({
            maxWorkers: 1,
            compress: {
                drop_console: true,
                drop_debugger: true
            },
            output: {
                comments: false
            }
        }),
        
    ],
    external: [
        'tailwindcss',
        'postcss'
    ]
}
