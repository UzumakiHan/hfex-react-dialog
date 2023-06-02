
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import image from 'rollup-plugin-img';
import postcss from 'rollup-plugin-postcss'
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";
import autoprefixer from 'autoprefixer'
import path from 'path'
// 讲require转换为模块
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const pkg = require(path.resolve(`package.json`))
export default[
    {
        input:'./src/index.tsx',
        output:[
            {
                file:pkg.main,
                format:"cjs",
                sourcemap:true,
                name:"<%= name %>"
            },
            {
                file:pkg.module,
                format:"es",
                sourcemap:true,
            }
        ],
        plugins:[
            resolve(),
            typescript(),
            terser(),
            babel({
                exclude: "**/node_modules/**",
                runtimeHelpers: true,
            }),
            commonjs(),
            postcss({
                plugins:[autoprefixer()]
            }),
            json(),
            image({
               
               
                limit: 8192,  // default 8192(8k)
                exclude: 'node_modules/**'
              })
        ]
    },
    {
        input:"dist/esm/index.d.ts",
        output:[
            {
                file:"dist/index.d.ts",
                format:"es"
            }
        ],
        external: [/\.scss$/],
        plugins:[
            dts()
        ]
    }
]