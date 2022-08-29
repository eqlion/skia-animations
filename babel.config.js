module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '^@Assets/(.+)': './assets/\\1',
        },
      },
    ],
  ],
}
