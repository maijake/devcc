// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
    config.set({
	// base path, that will be used to resolve files and exclude
	basePath: '',

	// testing framework to use (jasmine/mocha/qunit/...)
	frameworks: ['mocha'],

	// pass configuration options directly to mocha you can do
	// this in the following way
	client: {
	    mocha: {
		reporter: ['spec' ]
	    }
	},

	// reporters configuration
	// Possible Values:
	// - dots
	// - progress (default)
	// - junit
	// - growl
	// - coverage
	reporters: ['dots'],

	// list of files / patterns to load in the browser
	files: [
	    // Load unit test context here
	    'bower_components/chai/chai.js',
	    'bower_components/sinon/lib/sinon.js',
	    'bower_components/sinon/lib/sinon/spy.js',
	    'bower_components/sinon/lib/sinon/stub.js',
	    'bower_components/sinon/lib/**/*.js',
	    'bower_components/angular/angular.js',
	    'bower_components/angular-route/angular-route.js',
	    'bower_components/lodash/dist/lodash.min.js',
	    'app/*.js',
	    'app/**/*.js',
	    // Le test context
	    'test/test-init.js',
	    // 'test/mock/**/*.js',
	    // Le app
	    'test/spec/**/*.js'
	],

	// list of files / patterns to exclude
	exclude: [],

	// web server port
	port: 8080,

	// proxies :  {
	//     '/': 'http://localhost:9000'
	// },
	// urlRoot : '/__unit/',

	// level of logging
	// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
	logLevel: config.LOG_INFO,



	// Start these browsers, currently available:
	// - Chrome
	// - ChromeCanary
	// - Firefox
	// - Opera
	// - Safari (only Mac)
	// - PhantomJS
	// - IE (only Windows)
	browsers: ['Firefox'],


	// enable / disable watching file and executing tests whenever any file changes
	autoWatch: false,

	// Continuous Integration mode
	// if true, it capture browsers, run tests and exit
	singleRun: true
    });
};
