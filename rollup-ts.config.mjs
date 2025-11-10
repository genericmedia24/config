import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'
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
    nodeResolve(),
    typescript(),
    terser(),
  ],
}
