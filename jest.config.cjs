module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.app.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.app.json',
    },
  },
};
