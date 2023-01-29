import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {},
  },
  // plugins: [
  //   VitePluginCustomElementsManifest({
  //     files: ['./src/components/*.ts'],
  //     lit: true,
  //     output: 'lit-stories.json',
  //     plugins: [
  //       jsdocExamplePlugin(),
  //       generateCustomData({
  //         outdir: 'dist',
  //         htmlFileName: 'vscode.html-lit-stories.json',
  //         cssFileName: '',
  //       }) as Plugin,
  //     ],
  //   }),
  // ],
});
