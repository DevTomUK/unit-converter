module.exports = {
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/tests/**/*.test.js'],
  collectCoverageFrom: ['src/**/*.ts', '!src/types.ts', '!src/index.ts'],
}