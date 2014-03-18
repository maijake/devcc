"use strict";

(function() {

    var moduleName = "Demo";
    var controllerName = "layouts.SplashController";

    angular.module( moduleName ).controller(
	controllerName,
	["$scope" 
	 , "requestContext"
	 // * I define configurations for controller
	 , "ModuleConfigs"
	 , function( $scope 
		     , requestContext
		     , moduleConfigs
		   ) {
	     
	     // Config
	     var logger = moduleConfigs[controllerName].logger;
	     var debug = moduleConfigs[controllerName].debug;
	     if ( logger ) logger( "controller starting" );

	      // --- Define Controller Methods


	      // --- Define Scope Methods

	      // --- Define Controller Variables. ----------------- //


	      // Get the render context local to this controller (and relevant params).
	      var renderContext = requestContext.getRenderContext( 'standard.home' );


	      // --- Bind To Scope Events. ------------------------ //

	     // I handle changes to the request context.
	     $scope.$on(
		 "requestContextChanged",
		 function() {

		     // Make sure this change is relevant to this controller.
		     if ( ! renderContext.isChangeRelevant() ) {

			 return;

		     }

		     // Update the view that is being rendered.
		     $scope.subview = renderContext.getNextSection();

		 }
	     );

	      // Initialize:

	      // * I set subview 'loading' 
	      $scope.subview = "loading";


	  }] // controller function
    ); //  module().controller
})(); // module function
