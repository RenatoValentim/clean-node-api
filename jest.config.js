module.exports = {
  collectCoverageFrom: ['<rooDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
    '.*\\.ts': 'ts-jest'
  }
}
