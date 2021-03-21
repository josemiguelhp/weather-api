module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  collectCoverageFrom: [
    'src/**',
    '!src/utils/response.ts',
    '!src/utils/validation.ts',
    '!src/utils/globals.ts',
    '!src/routes/**',
    '!**/index.ts',
    '!src/server.ts',
    '!src/utils/errors/*',
    '!src/utils/asyncWrapper.ts'
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover']
}
