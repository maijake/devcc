"use strict";

(function() {

    var moduleName = 'Demo';
    var controllerName = 'layouts.StandardController';

    angular.module( moduleName ).controller(
	controllerName,
	['$scope' 
	 , 'requestContext'
	 // * I define configurations for controller
	 , 'ModuleConfigs'
	 , function( $scope
		     , requestContext
		     , moduleConfigs
		   ) {
	     
	     // Config
	     
	     var logger = moduleConfigs[controllerName].logger;
	     var debug = moduleConfigs[controllerName].debug;
	     if ( logger ) logger( 'controller starting' );

	      // --- Define Controller Methods


	      // --- Define Scope Methods

	      // --- Define Controller Variables. ----------------- //


	      // Get the render context local to this controller (and relevant params).
	      var renderContext = requestContext.getRenderContext( 'app.standard.home' );


	      // --- Define Scope variables
	      $scope.subview = renderContext.getNextSection();
	      if ( debug ) debug( '$scope.subview=' + $scope.subview );


	      // --- Bind To Scope Events. ------------------------ //

	     // I handle changes to the request context.
	     $scope.$on(
		 'requestContextChanged',
		 function() {

		     if ( debug ) debug( 'requestContextChanged' )

		     // Make sure this change is relevant to this controller.
		     if ( ! renderContext.isChangeRelevant() ) {

			 return;

		     }

		     // Update the view that is being rendered.
		     $scope.subview = renderContext.getNextSection();

		     if ( debug ) debug( 'requestContextChanged - $scope.subview=' + $scope.subview )


		 }
	     );

	      // Initialize:

	  }] // controller function
    ); //  module().controller
})(); // module function
