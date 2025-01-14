module.exports = {
  reporters: ['default', ['jest-junit', { suiteName: 'jest tests' }]],
  testMatch: [
    '<rootDir>/client/src/**/?(*.)(spec|test).{js,jsx}',
  ],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/tests/__mocks__/style.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg)$': '<rootDir>/tests/__mocks__/fileMock.js',
  },
};
