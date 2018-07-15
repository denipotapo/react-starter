// Jest configuration
// https://facebook.github.io/jest/docs/en/configuration.html
module.exports = {
    // Modules can be explicitly auto-mocked using jest.mock(moduleName).
    // https://facebook.github.io/jest/docs/en/configuration.html#automock-boolean
    automock: false, // [boolean]

    // Respect Browserify's 'browser' field in package.json when resolving modules.
    // https://facebook.github.io/jest/docs/en/configuration.html#browser-boolean
    browser: false, // [boolean]

    // This config option can be used here to have Jest stop running tests after the first failure.
    // https://facebook.github.io/jest/docs/en/configuration.html#bail-boolean
    bail: false, // [boolean]

    clearMocks: false,

    // The directory where Jest should store its cached dependency information.
    // https://facebook.github.io/jest/docs/en/configuration.html#cachedirectory-string
    // cacheDirectory: '/tmp/<path>', // [string]

    // Indicates whether the coverage information should be collected while executing the test.
    // Because this retrofits all executed files with coverage collection statements,
    // it may significantly slow down your tests.
    // https://facebook.github.io/jest/docs/en/configuration.html#collectcoverage-boolean
    // collectCoverage: false, // [boolean]

    // https://facebook.github.io/jest/docs/en/configuration.html#collectcoveragefrom-array
    collectCoverageFrom: [
        'src/**/*.{js,jsx,mjs}',
        '!**/node_modules/**'
    ],

    testURL: 'http://localhost',

    modulePaths: [
        '<rootDir>/src',
        '<rootDir>/node_modules'
    ],

    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
        '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}'
    ],

    // testEnvironment: 'node',
    testEnvironment: 'jsdom',

    transform: {
        '^.+\\.(jsx?,mjs)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.(tsx?)?$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
        '^.+\\.(css|s(a|c)ss|less)$': '<rootDir>/node_modules/jest-css-modules'
    },

    testPathIgnorePatterns: [
        '/node_modules/'
    ],

    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx|mjs)$'
    ],

    coveragePathIgnorePatterns: [
        '/node_modules/'
    ],

    // https://facebook.github.io/jest/docs/en/configuration.html#coveragedirectory-string
    coverageDirectory: '<rootDir>/coverage', // [string]

    globals: {
        __DEV__: true,
        NODE_ENV: 'test',
        'ts-jest': {
            useBabelrc: true,
            enableTsDiagnostics: true
        }
    },

    // https://facebook.github.io/jest/docs/en/configuration.html#mapcoverage-boolean
    // mapCoverage: false, // [boolean]

    // The default extensions Jest will look for.
    // https://facebook.github.io/jest/docs/en/configuration.html#modulefileextensions-array-string
    moduleFileExtensions: [
        'web.js',
        'ts',
        'tsx',
        'js',
        'jsx',
        'web.jsx',
        'json',
        'node',
        'mjs'
    ],

    moduleDirectories: [
        'node_modules',
        'src'
    ],

    // A map from regular expressions to module names that allow to stub out resources,
    // like images or styles with a single module.
    moduleNameMapper: {
        '^react(.*)$': '<rootDir>/node_modules/$1',
        '^pages/(.*)': '<rootDir>/src/pages/$1',
        '^layouts/(.*)': '<rootDir>/src/layouts/$1',
        '^segments/(.*)': '<rootDir>/src/segments/$1',
        '^components/(.*)': '<rootDir>/src/components/$1',
        '\\.(css|less|styl|scss|sass|sss)$': 'identity-obj-proxy'
    },

    verbose: true
}
