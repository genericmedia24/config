import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'

const { default: pkg } = await import(`${process.cwd()}/package.json`, {
  with: {
    type: 'json',
  },
})

export default {
  external: [
    /@genericmedia\//gui,
  ],
  input: 'src/index.ts',
  onwarn(message, warn) {
    if (message.code === 'CIRCULAR_DEPENDENCY') {
      return
    }

    warn(message)
  },
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
    commonjs(),
    nodeResolve(),
    typescript(),
    terser(),
  ],
}
