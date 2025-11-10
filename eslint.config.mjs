import { defineConfig } from 'eslint/config'
import jsconfig from './eslint/js.mjs'
import tsconfig from './eslint/ts.mjs'

export default defineConfig(
  tsconfig,
  jsconfig,
)
