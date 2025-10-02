import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    theme: 'src/theme.css',
  },
  format: ['cjs', 'esm'],
  dts: {
    entry: 'src/index.ts',
  },
  sourcemap: true,
  clean: true,
  external: [
    'react',
    'react-dom',
    'antd',
    'next',
    'next/image',
    'next/link',
    'next/navigation',
    'next/router',
  ],
  banner: {
    js: '"use client";',
  },
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
    options.loader = {
      '.svg': 'file',
      '.png': 'file',
    };
  },
  onSuccess: async () => {
    console.log('✅ Build completed successfully!');
  },
});
