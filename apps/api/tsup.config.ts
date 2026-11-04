import { defineConfig } from 'tsup';

// Bundle the server into one file. Internal workspace packages (@sbq/*) ship
// as TypeScript source, so they must be bundled rather than left external.
export default defineConfig({
  entry: ['src/server.ts'],
  format: ['esm'],
  platform: 'node',
  target: 'node20',
  outDir: 'dist',
  clean: true,
  sourcemap: true,
  noExternal: [/^@sbq\//],
  // Some bundled CommonJS dependencies (e.g. gray-matter) call require().
  banner: { js: "import { createRequire } from 'node:module'; const require = createRequire(import.meta.url);" },
});
