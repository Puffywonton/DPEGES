import { resolve } from 'path'

export default {
    // config options
    root: 'src',
    base: '/DPEGPE/',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      lib: {
        entry: resolve(__dirname, 'src/dpeGes.js'),
        name: 'DPEGPE',
        fileName: (format) => `dpegpe.${format}.js`,
      }
    }
  }