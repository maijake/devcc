(function() {

    var moduleName  = 'Demo';
    var serviceName = "ModuleConfigs";



    angular.module( moduleName  )
	.service( serviceName, [ 
	    function() {

		return {

		    "AppController" : {
			
			logger: function ( msg ) {
			    console.log( "AppController: " + msg );
			}

			, debug: function ( msg ) {
			    console.debug( "AppController: " + msg );
			}

		    }

		    , "layouts.StandardController" : {
			
			logger: function ( msg ) {
			    console.log( "StandardController: " + msg );
			}

			, debug: function ( msg ) {
			    console.debug( "StandardController: " + msg );
			}

		    } // layouts.StandardController


		    , "demo.DemoController" : {
			
			logger: function ( msg ) {
			    console.log( "DemoController: " + msg );
			}

			, debug: function ( msg ) {
			    console.debug( "DemoController: " + msg );
			}

		    } // demo.DemoController

		    , "layouts.SplashController" : {
			
			logger: function ( msg ) {
			    console.log( "SplashController: " + msg );
			}

			, debug: function ( msg ) {
			    console.debug( "SplashController: " + msg );
			}

		    }  // layouts.SplashController

		}
		    
	    } // Service function
	]);  // Service definition


})();

