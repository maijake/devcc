"use strict";


describe( "javascript", function() {

    // ------------------------------------------------------------------
    // undefined

    describe( "undefined", function() {

	it( "typeof undefined checked", function() {
	    assert( typeof undefinedvariable === "undefined" )
	});
	
	it( "definedvariable has no value", function() {
	    var flag;
	    var definedvariable; // not assigned
	    if ( !definedvariable )  {
		flag = true
	    } 
	    else {
		flag = false
	    }
	    
	    flag.should.eq( true );
	});

	it( "typeof definedvariable", function() {
	    var flag;
	    var definedvariable; // not assigned
	    if ( typeof definedvariable === "undefined" )  {
		flag = true
	    } 
	    else {
		flag = false
	    }
	    assert( flag, "!undefinedvarible === true " )
	});

    });

    // ------------------------------------------------------------------
    // false, true, 0
    
    describe( "false, true", function() {

	it( "true used in assert( true )", function() {
	    assert( true );
	});

	it( "assert( !false ) is true", function() {
	    assert( !false );
	});

	it( "0 is false ", function() {

	    var flag;
	    if ( 0 ) {
		flag = true;
	    }
	    else {
		flag = false;
	    }
	    flag.should.eql( false );
	    assert( !flag );
	});

	it( "<>0 is true w. ternary operator", function() {

	    var test=2;

	    // Ternary operator
	    var flag = test ? true : false;

	    flag.should.eql( true );
	});

    });

    // ------------------------------------------------------------------
    // Object equality

    describe( "object equality", function() {

	var user1, user2;

	before( function() {

	    // Object have the same content
	    user1 = {name : "nerd", org: "dev"};
	    user2 = {name : "nerd", org: "dev"};

	});

	it ( "js object comparison uses 'reference'", function() {

	    // They are referring to differnt object
	    assert( (user1 == user2) == false );

	    // Identity comparison => same refenrences
	    assert( (user1 == user1) == true );

	    
	    // user3 'pointing' the to 'user1'
	    var user3=user1;
	    assert( (user1 == user3) == true );
	    assert( (user2 != user3) == true );

	});

	it ( "using lodash .isEqual", function() {
	    
	    _.isEqual( user1, user2 ).should.eq( true );

	});

	it ( "compare using mocha", function() {

	    // Deep eql
	    user1.should.eql( user2 );

	    // js object reference comparison
	    user1.should.not.eq( user2 );

	});

    });

    
    // ------------------------------------------------------------------
    // functions && anymous functions


    describe( "anonymous function in javascript", function() {

	it ( "should work without function", function() {

	    var a;
	    a = "Hello world";
	    a.should.eql( "Hello world" );

	});


	it ( "should work with a named function", function() {

	    var a;

	    function tst() {
		a = "Hello world";
	    }
	    // Call named function 
	    tst();
	    a.should.eql( "Hello world" );

	});

	it ( "should work with an anonymous function", function() {

	    var a;

	    // define an anynonymous function && call it immediatelly
	    (function() {
		a = "Hello world";
	    })();

	    a.should.eql( "Hello world" );

	});


    });

    // ------------------------------------------------------------------
    // callback && delay && asyncrhounous testing

    describe( "callback && delay && asyncrhounous testing", function() {

	it ( "should work without timeout", function() {
	    
	    var a;

	    // Define a function
	    function tst() {
		a="Hello World";
	    }
	    // call the function
	    tst();
	    // verify the effect of function call
	    a.should.eql( "Hello World" );
	    
	});

	it ( "should work without timeout && using done", function( done ) {
	    
	    var a;

	    // Define a function
	    function tst() {
		a="Hello World";
	    }
	    // call the function
	    tst();
	    // verify the effect of function call
	    a.should.eql( "Hello World" );

	    // done parameter passed to it - must be called
	    done();
	    
	});


	it ( "should work with timeout && named function", function( done ) {
	    
	    var a="initial value"
	    // Define a function
	    function tst() {
		a="Hello World";
		
		a.should.eql( "Hello World" );
		// Notify mocha that async test finished
		done();
	    }
	    
	    // Call tst after 0,1 secs
	    setTimeout( tst, 100 );
	    
	    // A is not yet modified
	    a.should.eql( "initial value" );
	    
	});

	it ( "should work with timeout && anonymous function", function( done ) {
	    
	    var a="initial value"
	    // Define a function
	    
	    // Call tst after delay
	    setTimeout( 
		function() {

		    a="Hello World";
		    a.should.eql( "Hello World" );
		    // Notify mocha that async test finished
		    done();
		}
		, 100 // delay in ms
	    );
	    
	    // A is not yet modified
	    a.should.eql( "initial value" );
	});

    });



});
