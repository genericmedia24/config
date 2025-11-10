import { defineConfig } from 'eslint/config'
import tsconfig from './eslint-ts.config.mjs'

export default defineConfig(
  tsconfig,
)
