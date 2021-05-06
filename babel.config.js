module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['una-language', 'react-native-reanimated/plugin']
  };
};
