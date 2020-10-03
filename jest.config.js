// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  moduleDirectories: [
    "node_modules"
  ],
  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
  ],
  setupFilesAfterEnv: ["jest-enzyme"],
  testEnvironment: "enzyme",
  testEnvironmentOptions: { enzymeAdapter: "react16" }
};
