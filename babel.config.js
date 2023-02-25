module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: { '@': './src/' },
        },
      ],
    ],
  };
};
