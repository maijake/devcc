# Install

## Create directory ~/bin && add it to path

Create directory, unless it already exists

	mkdir ~/bin   # if it does not already exist

Edit `~/bashrc` and add the following line, unless `~/bin` =
`$HOME/bin/` already in path

	    export PATH="$HOME/bin:$PATH"

<strike>
## Install phantomjs

Install [PhantomJs](http://phantomjs.org/download) version
`phantomjs-1.9.7` to directory `~/softat/phantomjs`

	cd ~/softat/phantomjs
	unzip phantomjs-1.9.7-macosx.zip

Make it availabe in path. 

	ln -s ~/softat/phantomjs/phantomjs-1.9.7-*/bin/phantomjs ~/bin/phantomjs

</strike>

## Install node && bower modules

Install node modules

	npm install
	
	
Install bower modules

	bower install

# Development

## Start web-server

Launch node web-server with the command

	grunt web-server
	

and browse to address

	http://localhost:8001/index.html#/home
	
## Unit testing

Launch Karma test runner

	grunt unit
	
or run test once (in ci-environment)	

	grunt unit-ci

# Design notes

## Unit testing

### Unit test tools

Uses

* [mocha](http://visionmedia.github.io/mocha/) :
  http://visionmedia.github.io/mocha/) : Mocha is a feature-rich
  JavaScript test framework running on node.js and the browser

* [chai](http://chaijs.com/) : Chai is a BDD / TDD assertion library
  for node and the browser

* [sinonjs](http://sinonjs.org/) : Standalone test spies, stubs and
  mocks for JavaScript.


### Unit test locations

Unit tests are 

* `test/spec/` : application tests
   * `request-context_spec.js`: angular service, which does not have any dependencies
   * `render-context_spec.js`: angular service, which depends on
     `request-context_spec.js`, uses [sinonjs](http://sinonjs.org/) stubs
*  `test/spec/basic` : examples
   * `test/spec/basic/javascript_spec.js` : javascript examples
   * `test/spec/basic/assertion_context_spec.js` : mocha && chai
   * `test/spec/basic/sinon_stub_spec.js`: sinon examples


## Application

### index.html

Html file `index.html` 

* defines application name `Demo` and controller name `AppController`

	&lt;html ng-app="Demo" ng-controller="AppController"&gt;


* binds to `$scope` -variable `"windowTitle`

    &lt;title ng-bind="windowTitle"&gt;Init appl</title&gt;
	
* uses scope variable `subview` to include sub-views in

    &lt;div ng-switch="subview"&gt;
      &lt;div ng-switch-when="splash"&gt;
	&lt;div ng-include=" 'views/layouts/splash.html' "&gt;&lt;/div&gt;
      &lt;/div&gt;
      &lt;div ng-switch-when="standard"&gt;
        &lt;div ng-include=" 'views/layouts/standard.html' "&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

* uses scope variable `isLoading` to show a spinner

    &lt;div ng-switch="isLoading"&gt;
      &lt;div ng-switch-when="true"&gt;Loading...&lt;/div&gt;
    &lt;/div&gt;


### main.js

Defines

* defines angular module `Demo`
* configures `$routeProvider`, which maps url paths to `action` -value

### Deep Routing

Deep Routing is based on example by
[Ben Nadel](http://www.bennadel.com). See directory credits.

Controllers 

* create controller variable `renderContext` such as

	      var renderContext = requestContext.getRenderContext( 'app.standard.home.demo', "demoID" );

* listen to `requestContextChanged` message


	      $scope.$on(
	             "requestContextChanged",
			      function() {
			                    ...
		  });

* and access relevant information form request path

		     $scope.subview = renderContext.getNextSection();
		     $scope.demoID = requestContext.getParamAsInt( "demoID" );


### General controller structure

Uses anonymous function to prevent global scope being polluted

	(function() {
	     var moduleName = "Demo";
		 var controllerName = "xxxxController";
     ...
	})(); // module function

The anonymous wrap angular controller defintion

    angular.module( moduleName ).controller(
	controllerName, 
	[ "$scope", ....
	  , function(  $scope, ... )
     {
	    
	    // configuration
			...
	    // controller method (methods internal to the controller)
			...
	    // scope methods (methods available to views && sub -controllers)
			...
	    // scope variables (variables available to views)
			... 
	    // scope events (to manage view interaction)
			... 
	    // initialization
			...
	 }]);

Implemented controllers

* AppController.js : main controller referenced in index.html
* StandardController.js: menu level 1 controller reference in html included in index.html
* SplashController.js: menu level 1 controller reference in html included in index.html
* DemoController.js: demonstraters passing dynamic content (`demoID`) in url path

