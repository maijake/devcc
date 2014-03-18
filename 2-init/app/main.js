// I create main module, and define its dependencies

angular.module( "Demo", ['ng', 'ngRoute' ] );

// I do not want angular to silently swallow exceptions
angular.module('exceptionOverride', []).factory('$exceptionHandler', function () {
    return function (exception, cause) {
	exception.message += ' (caused by "' + cause + '")';
	throw exception;
    };
});


// I confir routing for the main module.
angular.module( "Demo" ) .config(

    function( $routeProvider ){

	// Typically, when defining routes, you will map the route to a Template to be 
	// rendered; however, this only makes sense for simple web sites. When you are 
	// building more complex applications, with nested navigation, you probably need 
	// something more complex. In this case, we are mapping routes to render "Actions" 
	// rather than a template.
	$routeProvider
	    .when(
	    	"/home/:demoID",
	    	{
	    	    action: "app.standard.home.demo"
	    	}
	    )
	    .when(
		"/home",
		{
		    action: "app.standard.home"
		}
	    )
	    .when(
	    	"/splash",
	    	{
	    	    action: "app.splash"
	    	}
	    )
	    .otherwise(
		{
		    redirectTo: "/home"
		}
	    )
	;

    }
);

