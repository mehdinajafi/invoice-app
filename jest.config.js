const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
    "^@/data/(.*)$": "<rootDir>/data/$1",
    "^@/store/(.*)$": "<rootDir>/store/$1",
    "^@/utilities/(.*)$": "<rootDir>/utilities/$1",
    "^@/types/(.*)$": "<rootDir>/types/$1",
    "^@/public/(.*)$": "<rootDir>/public/$1",
    "^@/images/[./a-zA-Z0-9$_-]+\\.svg$": "<rootDir>/__mocks__/SvgrMock.js",
    "stitches-config": "<rootDir>/stitches.config.js",
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
