module.exports = {
  setupFilesAfterEnv: ["<rootDir>/config/setupTest.js"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  modulePaths: ["<rootDir>/src", "<rootDir>/node_modules"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/client/src/__mock__/styleMock.js"
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"], // <-- this allows babel to load only the node modules I need (which is lodash-es) and ignore the rest
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/**/*.ts?(x)",
    "src/components/**/*.js?(x)",
    "src/reducers/**/*.ts?(x)",
    "src/reducers/**/*.js?(x)"
  ],
  verbose: true,
  // coverageDirectory: "./coverage",
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  coverageReporters: ["json", "lcov", "text"]
};
