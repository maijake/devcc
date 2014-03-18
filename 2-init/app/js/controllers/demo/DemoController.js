"use strict";

(function() {

    var moduleName = "Demo";
    var controllerName = "demo.DemoController";

    angular.module( moduleName ).controller(
	controllerName,
	["$scope", "$q"
	 , "requestContext"
	 // * I define configurations for controller
	 , "ModuleConfigs"
	 , function( $scope, $q
		     , requestContext
		     , moduleConfigs
		   ) {
	     
	     // Config
	     
	     var logger = moduleConfigs[controllerName].logger;
	     var debug = moduleConfigs[controllerName].debug;
	     if ( logger ) logger( "controller starting" );

	      // --- Define Controller Methods
	     function loadRemoteData( remoteKey ) {

		 // Put a spinner on view
		 $scope.isLoading = true;
		 if ( debug ) debug( "isLoading = " + $scope.isLoading );
		 
		 // No data while loading
		 $scope.data = undefined;

		 // I 'promise' to 'resolve' the 'deferred' object
		 var deferred = $q.defer();
		 
		 // Resolve successfully after a dalay
		 setTimeout( function() {

		     var remoteData = {
			 key : remoteKey
			 , data: "remote data for key " + remoteKey
		     }
		     
		     // I trigger promise.then
		     deferred.resolve( remoteData );

		 }, 2000 );

		 return deferred.promise;
	     }

	     function updateRemoteData( remoteData ) {

		 // Put spinner away
		 $scope.isLoading = false;
		 if ( debug ) debug( "isLoading = " + $scope.isLoading );

		 // Data to show
		 $scope.data = remoteData;

	     }
	     


	      // --- Define Scope Methods

	      // --- Define Controller Variables. ----------------- //


	      // Get the render context local to this controller (and relevant params).
	      var renderContext = requestContext.getRenderContext( 'app.standard.home.demo', "demoID" );


	      // --- Define Scope variables
	     $scope.subview = renderContext.getNextSection();
	     if ( debug ) debug( "$scope.subview=" + $scope.subview );

	     $scope.demoID = requestContext.getParamAsInt( "demoID" );
	     if ( debug ) debug( "$scope.demoID=" + $scope.demoID );


	      // --- Bind To Scope Events. ------------------------ //

	     // I handle changes to the request context.
	     $scope.$on(
		 "requestContextChanged",
		 function() {

		     if ( debug ) debug( "requestContextChanged" )

		     // Make sure this change is relevant to this controller.
		     if ( ! renderContext.isChangeRelevant() ) {

			 return;

		     }

		     // Update the view that is being rendered.
		     $scope.subview = renderContext.getNextSection();
		     $scope.demoID = requestContext.getParamAsInt( "demoID" );
		     
		     // Run remote load
		     var promise = loadRemoteData( $scope.demoID );
		     promise.then( updateRemoteData );

		     if ( debug ) debug( "requestContextChanged" 
					 + " ,$scope.subview=" + $scope.subview
					 + ", $scope.demoID=" + $scope.demoID );

		     // Normally reset when remote data received

		 }
	     );

	      // Initialize:


	     loadRemoteData( $scope.demoID ).then( updateRemoteData );

	  }] // controller function
    ); //  module().controller
})(); // module function
