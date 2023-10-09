const { configure, presets } = require('eslint-kit')

module.exports = configure({
  allowDebug: process.env.NODE_ENV !== 'production',

  presets: [
    presets.imports({
      alias: {
        paths: {
          '@': './src',
          '@assets': './assets',
        },
      },
    }),
    presets.node(),
    presets.prettier(),
    presets.typescript(),
    presets.react(),
    presets.nextJs(),
  ],
})
