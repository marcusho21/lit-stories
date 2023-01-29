import { generateCustomData } from 'cem-plugin-vs-code-custom-data-generator';
import { jsdocExamplePlugin } from 'cem-plugin-jsdoc-example';

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
    jsdocExamplePlugin(),
  ],
};
