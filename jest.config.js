module.exports = {
  preset: "react-native",
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
  },
  transformIgnorePatterns: ["node_modules/(?!@react-native|react-native)"],
};
