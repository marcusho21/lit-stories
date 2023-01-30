import { generateCustomData } from 'cem-plugin-vs-code-custom-data-generator';

export default {
  globs: ['src/components/*.ts'],
  outdir: 'cem',
  litelement: true,
  plugins: [
    generateCustomData({
      outdir: 'cem',
      htmlFileName: 'vscode.html-custom-elements.json',
      cssFileName: '',
    }),
  ],
};
