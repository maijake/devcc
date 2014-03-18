"use strict";

(function() {

    var moduleName = "Demo";
    var controllerName = "AppController";

    angular.module( moduleName ).controller(
	controllerName, 
	[ "$scope", "$route", "$routeParams", "$location"
	  , "requestContext"
	  , "ModuleConfigs"
	  // Controller collaborators
	  , function( 
	      $scope, $route, $routeParams, $location
	      , requestContext
	      , moduleConfigs
	  ) {

	      // Config
	      var logger = moduleConfigs[controllerName].logger;
	      var debug = moduleConfigs[controllerName].debug;
	      if ( logger ) logger( "controller starting" );

	      
	      // --- Define Controller Methods

	      // I check to see if the given route is a valid route; or, is the route being
	      // re-directed to the default route (due to failure to match pattern).
	      function isRouteRedirect( route ) {

		  // If there is no action, then the route is redirection from an unknown 
		  // route to a known route.
		  return( ! route.current.action );

	      }

	      // --- Define Scope Methods

	      $scope.go = function( path ) {
		  if ( logger ) logger( "go path=" + path );
		  $location.path( path );
	      }; // go

	      // I get the current time for use when display the time a controller was rendered.
	      // This way, we can see the difference between when a controller was instantiated
	      // and when it was re-populated with data.
	      $scope.getInstanceTime = function() {

		  var now = new Date();
		  var timeString = now.toTimeString();
		  var instanceTime = timeString.match( /\d+:\d+:\d+/i );

		  return( instanceTime[ 0 ] );

	      };


	      // TODO: Flesh this out - for now, just trying to create a wrapper for alert().
	      $scope.openModalWindow = function( modalType ) {

		  alert( arguments[ 1 ] || "Opps: Something went wrong." );

	      };

	      // I update the title tag.
	      $scope.setWindowTitle = function( title ) {

		  if ( debug ) debug( "Setting title: " +  title )
		  $scope.windowTitle = title;

	      };

	      // --- Define Controller Variables. ----------------- //


	      // Get the render context local to this controller (and relevant params).
	      var renderContext = requestContext.getRenderContext( 'app' );

	      
	      // --- Define Scope Variables. ---------------------- //

	      // Set up the default window title.
	      // $scope.windowTitle = "Demo";

	      // The subview indicates which view is going to be rendered on the page.
	      $scope.subview = renderContext.getNextSection();
	      if ( debug ) debug( "$scope.subview=" + $scope.subview );
	      

	      // --- Bind To Scope Events. ------------------------ //


	      // I handle changes to the request context.
	      $scope.$on(
		  "requestContextChanged",
		  function() {

		      if ( debug ) debug( "requestContextChanged" )

		      // Make sure this change is relevant to this controller.
		      if ( ! renderContext.isChangeRelevant() ) {

			  if ( debug ) debug( "requestContextChanged - change not relevant" )
			  return;

		      }

		      $scope.isLoading = false;

		      // Update the view that is being rendered.
		      $scope.subview = renderContext.getNextSection();
		      if ( debug ) debug( "$scope.subview changed=" + $scope.subview );

		  }
	      );


	      // Listen for route changes so that we can trigger request-context change events.
	      $scope.$on( 

		  "$routeChangeSuccess",
		  
		  function( event ) {

		      if ( debug ) debug( "$routeChangeSuccess received" 
					  + " , $route.current.action=" + $route.current.action
					  + ", $routeParams=" + JSON.stringify( $routeParams ) );
		      // If this is a redirect directive, then there's no taction to be taken.
		      if ( isRouteRedirect( $route ) ) {

			  if ( debug ) debug( "isRouteRedirect true no action" );
			  return;

		      }

		      // Update the current request action change.
		      requestContext.setContext( $route.current.action, $routeParams );

		      if ( debug ) debug( "$routeChangeSuccess: broadcast $route.current.actiont=" 
					  + $route.current.action
					  + ", $routeParams=" +  JSON.stringify( $routeParams ) 
					);
		      
		      // Announce the change in render conditions.
		      $scope.$broadcast( "requestContextChanged", requestContext );

		  }
	      );

	      // Initialize:
	      $scope.setWindowTitle( "Demo" );

	      // I flag that data is being loaded.
	      $scope.isLoading = true;

	  }] // controller function
    ); //  app controller

})(); // module function
