module.exports = {
  'testEnvironment': 'jsdom',
  'roots': [
    '<rootDir>/src'
  ],
  'transformIgnorePatterns': [
    'node_modules/(?!(@capacitor)/)'
  ],
  'transform': {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  },
  'setupFilesAfterEnv': ['jest-extended']
}
