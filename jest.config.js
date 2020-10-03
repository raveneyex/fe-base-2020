/**
 * Raveneyex's 2020 Front-End Stack
 * Made by @raveneyex
 * 
 * Hail Satan!
 */

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
  testEnvironmentOptions: { enzymeAdapter: "react16" },
  // Make jest handle scss imports
  moduleNameMapper: {
    "\\.s?css$": "<rootDir>/src/test/__mocks__/styleMock.js"
  },
};
