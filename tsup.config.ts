import { defineConfig } from 'tsup'

export default defineConfig(() => [
    {
        entry: ['src/*.ts'],
        outDir: 'dist',
        format: ['esm', 'cjs'],
        clean: true,
        minify: true,
        platform: 'browser',
        dts: {
            resolve: true
        }
    },
    {
        entry: { bundle: 'src/index.ts' },
        outDir: 'build',
        format: ['iife'],
        clean: false,
        minify: true,
        platform: 'browser',
        dts: false
    }
])