import { generateCustomData } from 'cem-plugin-vs-code-custom-data-generator';

export default {
  globs: ['src/components/*.ts'],
  outdir: 'dist',
  litelement: true,
  plugins: [
    generateCustomData({
      outdir: 'dist',
      htmlFileName: 'vscode.html-custom-elements.json',
      cssFileName: '',
    }),
  ],
};
