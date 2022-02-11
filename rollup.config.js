import vue from 'rollup-plugin-vue'
import { terser } from "rollup-plugin-terser"
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs';
import postcssImport from 'postcss-import';

const overrides = {
  compilerOptions: { declaration: true },
  exclude: ["tests/**/*.ts", "tests/**/*.tsx"]
}

export default {
  input: 'src/index.ts',
  output: [{
    globals: {
      vue: 'Vue'
    },
    name: 'desn-ui',
    file: './lib/index.js',
    format: 'umd',
    plugins: [terser()]
  }, {
    name: 'desn-ui',
    file: './lib/index.module.js',
    format: 'es',
    plugins: [terser()]
  }],
  plugins: [
    nodeResolve(),
    typescript({ tsconfigOverride: overrides }),
    vue(),
    postcss({
      extensions: [".css"],
      extract: true,
      plugins: [postcssImport()]
    }),
    commonjs({
      include: [
        "node_modules/**",
        "node_modules/**/*"
      ]
    }),
    // scss({ include: /\.scss$/, sass: dartSass }),
    // esbuild({
    //   include: /\.[jt]s$/,
    //   minify: process.env.NODE_ENV === 'production',
    //   target: 'es2015'
    // }),
    // vue({
    //   include: /\.vue$/,
    // }),
    // RollupPluginTypescript2(),
  ],
  external: ['vue', 'echarts', 'lodash-es']
}
