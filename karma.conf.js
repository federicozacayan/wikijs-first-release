// Karma configuration
// Generated on Sat Oct 20 2018 00:03:00 GMT+0400 (GMT+04:00)
const testWebpack = require('./webpack.test');

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'tests/**/*.spec.js',
    ],


    // list of files / patterns to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests/**/*.spec.js': ['webpack', 'sourcemap'],
      // 'src/**/!(*spec).js': ['webpack', 'sourcemap', 'coverage']
    },

    webpack: testWebpack,


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage-istanbul'],

    coverageIstanbulReporter: {
      reports: ['text-summary', 'lcov', 'html'],
      fixWebpackSourcePaths: true
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'ChromeTravisCi'
    ],

    customLaunchers: {
      ChromeTravisCi: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    sourcemap: true
  })
}
