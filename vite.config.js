import { resolve } from 'path'

export default {
    // config options
    root: 'src',
    base: '/DPEGES/',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      lib: {
        entry: resolve(__dirname, 'src/dpeGes.js'),
        name: 'DPEGES',
        fileName: (format) => `dpeges.${format}.js`,
      }
    }
}
  