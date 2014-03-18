"use strict";


module.exports = function(grunt) {



    // ------------------------------------------------------------------
    // Global configs
    
    var globalConfig = {

	home: process.env.HOME

    };

    // ------------------------------------------------------------------
    // Config Grunt tasks

    grunt.initConfig({

	pkg: grunt.file.readJSON('package.json'), 
	
	globalConfig: globalConfig,
	

	// ------------------------------------------------------------------
	// Task configs
	taskConfig : {

	    // * dev web server configs
	    web_port: 8001
	    , web_root: 'app'

	}, // taskConfig


	// ------------------------------------------------------------------
	// Make sure code styles are up to par and there are no obvious mistakes

	jshint: {
	      options: {
		  jshintrc: '.jshintrc'
	      }
	      , all: ['app/js/**/*.js' ]
	},

	
	// ------------------------------------------------------------------
	// Unit testin framework

	karma: {
	    unit: {
		configFile: 'karma.conf.js',
		singleRun: false,
		autoWatch: true
	    },
	    unit_fast: {
		configFile: 'karma.conf.js'
		// singleRun: false,
		// exclude : ['spec/rest*_spec.js']
		
	    },
	    "unit-ci": {
		configFile: 'karma.conf.js',
		singleRun: true,
		browsers: ['Firefox'],
		// 		browsers: ['PhantomJS'],
		reporters: ['mocha'],
		autoWatch: false
	    }
	},  // karma


    }); // initConfig

    // ------------------------------------------------------------------
    // Load grunt-modules to execution context

    // * unit testing support
    grunt.loadNpmTasks('grunt-karma');

    // * Configure Grunt tasks to run with newer files only
    grunt.loadNpmTasks('grunt-newer');

    // * development web server
    grunt.loadNpmTasks('grunt-contrib-connect');

    // * Validate files with JSHint.
    grunt.loadNpmTasks('grunt-contrib-jshint');


    // ------------------------------------------------------------------
    // Register tasks


    grunt.registerTask('unit', ['karma:unit']);
    grunt.registerTask('unit-ci', ['karma:unit-ci']);

    grunt.registerTask('default', ['newer:jshint']);


    // Dev web server

    grunt.registerTask(

	'web-server', 'Start dev. web server',

	function webServer() {

	    grunt.log.writeln(
		'Starting dev. web server on ' +
		    JSON.stringify(grunt.config.process('<%= taskConfig.web_port %>')) );

	    // * async keep the grunt task running with server
	    var done = this.async();

	    var connect = require( 'connect' );
	    connect()
	    // * application root
		.use( connect.static( 'app' ))
	    // * map vendor verious paths (css, js, ... )
		.use('/vendor/css', connect.static('bower_components/bootstrap/dist/css'))
		.use('/vendor/js', connect.static('bower_components/bootstrap/dist/js'))
		.use('/vendor/js', connect.static('bower_components/jquery/dist'))
		.use('/vendor/js', connect.static('bower_components/angular'))
		.use('/vendor/js', connect.static('bower_components/angular-route'))
		.use('/vendor/js', connect.static('bower_components/lodash/dist'))
	    // * launch it
		.listen( grunt.config.process('<%= taskConfig.web_port %>') )
	    // * keepalive
		.on( 'close', done )
	    ;
	}
    ); // Register task

};

