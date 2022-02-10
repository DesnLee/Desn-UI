import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import RollupPluginTypescript2 from 'rollup-plugin-typescript2'
import { terser } from "rollup-plugin-terser"

export default {
  input: 'src/index.ts',
  output: [{
    globals: {
      vue: 'Vue'
    },
    name: 'desn-ui',
    file: 'dist/desn-ui.js',
    format: 'umd',
    plugins: [terser()]
  }, {
    name: 'desn-ui',
    file: 'dist/desn-ui.esm.js',
    format: 'es',
    plugins: [terser()]
  }],
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015'
    }),
    vue({
      include: /\.vue$/,
    }),
    RollupPluginTypescript2(),
  ],
}
