module.exports = {
  'testEnvironment': 'jsdom',
  'roots': [
    '<rootDir>/src'
  ],
  'transform': {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  },
  'moduleNameMapper': {
    '^src(.*)$': '<rootDir>/src/$1',
  },
  'setupFilesAfterEnv': ['jest-extended']
}
