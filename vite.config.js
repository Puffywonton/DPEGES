import { resolve } from 'path'
export default {
    // config options
    base: '/DPEGPE/',
    build: {
    lib: {
        entry: resolve(__dirname, 'dpeGes.js'),
        name: 'DPEGPE',
        fileName: (format) => `dpegpe.${format}.js`,
      }
    }
  }