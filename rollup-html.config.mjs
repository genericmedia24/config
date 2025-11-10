import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import transformCss from 'css-simple-minifier'
import del from 'rollup-plugin-delete'
import html from 'rollup-plugin-html'
import css from 'rollup-plugin-import-css'
import pkg from './package.json' with { type: 'json' }

export default {
  input: 'src/index.ts',
  output: {
    banner: `/*! ${pkg.name} v${pkg.version} | @license ${pkg.license} */`,
    file: 'dist/index.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    del({
      runOnce: true,
      targets: 'dist',
    }),
    css({
      transform: transformCss,
    }),
    html({
      htmlMinifierOptions: {
        collapseWhitespace: true,
        conservativeCollapse: false,
      },
    }),
    json(),
    nodeResolve(),
    typescript(),
    terser(),
  ],
}
